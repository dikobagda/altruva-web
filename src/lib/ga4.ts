import { BetaAnalyticsDataClient } from '@google-analytics/data';
import { getGoogleCredentials } from '@/lib/google-credentials';

export function getPreviousPeriod(fromStr: string, toStr: string) {
  const parseDate = (val: string): Date => {
    if (val === 'today') return new Date();
    if (val === 'yesterday') {
      const d = new Date();
      d.setDate(d.getDate() - 1);
      return d;
    }
    const match = val.match(/^(\d+)daysAgo$/);
    if (match) {
      const days = parseInt(match[1], 10);
      const d = new Date();
      d.setDate(d.getDate() - days);
      return d;
    }
    return new Date(val); // YYYY-MM-DD
  };

  const start = parseDate(fromStr);
  const end = parseDate(toStr);

  // Calculate diff in days
  const diffTime = Math.abs(end.getTime() - start.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) || 1;

  // Previous end date is (start - 1 day)
  const prevEnd = new Date(start);
  prevEnd.setDate(prevEnd.getDate() - 1);

  // Previous start date is (prevEnd - diffDays + 1)
  const prevStart = new Date(prevEnd);
  prevStart.setDate(prevStart.getDate() - diffDays + 1);

  const formatDate = (d: Date) => {
    return d.toISOString().split('T')[0];
  };

  return {
    startDate: formatDate(prevStart),
    endDate: formatDate(prevEnd)
  };
}

export function createGa4Client() {
  const credentials = getGoogleCredentials();

  return new BetaAnalyticsDataClient({
    credentials,
    fallback: true,
  });
}

export interface GA4Snapshot {
  current: {
    activeUsers: number;
    newUsers: number;
    pageViews: number;
    sessions: number;
    avgSessionDuration: number;
  };
  previous: {
    activeUsers: number;
    newUsers: number;
    pageViews: number;
    sessions: number;
    avgSessionDuration: number;
  };
  trend: { date: string; rawDate: string; activeUsers: number; pageViews: number }[];
  topPages: { path: string; users: number; views: number }[];
  devices: { device: string; users: number }[];
  browsers: { browser: string; users: number }[];
  browserBuckets: Record<string, number>;
  trafficSources: { source: string; users: number }[];
  sourceBuckets: Record<string, number>;
  cities: { city: string; users: number }[];
  cityBuckets: Record<string, number>;
}

export async function fetchGa4Snapshot(from: string, to: string): Promise<GA4Snapshot> {
  const propertyId = '499923251';

  const client = createGa4Client();
  const property = `properties/${propertyId}`;
  const prevPeriod = getPreviousPeriod(from, to);

  const [
    currentPeriodRes,
    previousPeriodRes,
    trendRes,
    pagesRes,
    devicesRes,
    trafficRes,
    browsersRes,
    citiesRes
  ] = await Promise.all([
    // 1. Current Period Overview
    client.runReport({
      property,
      dateRanges: [{ startDate: from, endDate: to }],
      metrics: [
        { name: 'activeUsers' },
        { name: 'newUsers' },
        { name: 'screenPageViews' },
        { name: 'sessions' },
        { name: 'averageSessionDuration' }
      ],
    }),
    // 2. Previous Period Overview for comparison
    client.runReport({
      property,
      dateRanges: [{ startDate: prevPeriod.startDate, endDate: prevPeriod.endDate }],
      metrics: [
        { name: 'activeUsers' },
        { name: 'newUsers' },
        { name: 'screenPageViews' },
        { name: 'sessions' },
        { name: 'averageSessionDuration' }
      ],
    }),
    // 3. Daily Trend
    client.runReport({
      property,
      dateRanges: [{ startDate: from, endDate: to }],
      dimensions: [{ name: 'date' }],
      metrics: [
        { name: 'activeUsers' },
        { name: 'screenPageViews' }
      ],
      orderBys: [{ dimension: { dimensionName: 'date' } }]
    }),
    // 4. Top Pages
    client.runReport({
      property,
      dateRanges: [{ startDate: from, endDate: to }],
      dimensions: [{ name: 'pagePath' }],
      metrics: [
        { name: 'activeUsers' },
        { name: 'screenPageViews' }
      ],
      orderBys: [{ metric: { metricName: 'screenPageViews' }, desc: true }],
      limit: 15
    }),
    // 5. Device categories
    client.runReport({
      property,
      dateRanges: [{ startDate: from, endDate: to }],
      dimensions: [{ name: 'deviceCategory' }],
      metrics: [{ name: 'activeUsers' }]
    }),
    // 6. Traffic Source/Medium
    client.runReport({
      property,
      dateRanges: [{ startDate: from, endDate: to }],
      dimensions: [{ name: 'sessionSourceMedium' }],
      metrics: [{ name: 'activeUsers' }],
      orderBys: [{ metric: { metricName: 'activeUsers' }, desc: true }],
      limit: 100
    }),
    // 6b. Browsers
    client.runReport({
      property,
      dateRanges: [{ startDate: from, endDate: to }],
      dimensions: [{ name: 'browser' }],
      metrics: [{ name: 'activeUsers' }],
      orderBys: [{ metric: { metricName: 'activeUsers' }, desc: true }],
      limit: 50
    }),
    // 7. Top Cities
    client.runReport({
      property,
      dateRanges: [{ startDate: from, endDate: to }],
      dimensions: [{ name: 'city' }],
      metrics: [{ name: 'activeUsers' }],
      orderBys: [{ metric: { metricName: 'activeUsers' }, desc: true }],
      limit: 500
    })
  ]);

  // Parse overview helper
  const parseOverview = (report: any) => {
    const row = report[0]?.rows?.[0];
    const values = row?.metricValues || [];
    return {
      activeUsers: parseInt(values[0]?.value || '0', 10),
      newUsers: parseInt(values[1]?.value || '0', 10),
      pageViews: parseInt(values[2]?.value || '0', 10),
      sessions: parseInt(values[3]?.value || '0', 10),
      avgSessionDuration: parseFloat(values[4]?.value || '0'),
    };
  };

  const currentStats = parseOverview(currentPeriodRes);
  const previousStats = parseOverview(previousPeriodRes);

  // Parse daily trend
  const trend = (trendRes[0]?.rows || []).map((row: any) => {
    const rawDate = row.dimensionValues?.[0]?.value || ''; // YYYYMMDD
    // Format to DD/MM
    let formattedDate = rawDate;
    if (rawDate.length === 8) {
      const year = rawDate.substring(0, 4);
      const month = rawDate.substring(4, 6);
      const day = rawDate.substring(6, 8);
      const dateObj = new Date(`${year}-${month}-${day}`);
      formattedDate = dateObj.toLocaleDateString('id-ID', { day: 'numeric', month: 'short' });
    }
    return {
      date: formattedDate,
      rawDate,
      activeUsers: parseInt(row.metricValues?.[0]?.value || '0', 10),
      pageViews: parseInt(row.metricValues?.[1]?.value || '0', 10),
    };
  });

  // Parse top pages
  const topPages = (pagesRes[0]?.rows || []).map((row: any) => ({
    path: row.dimensionValues?.[0]?.value || '/',
    users: parseInt(row.metricValues?.[0]?.value || '0', 10),
    views: parseInt(row.metricValues?.[1]?.value || '0', 10),
  }));

  // Parse devices (always include mobile/desktop/tablet, zero-filled if absent)
  const deviceMap = new Map(
    (devicesRes[0]?.rows || []).map((row: any) => [
      (row.dimensionValues?.[0]?.value || '').toLowerCase(),
      parseInt(row.metricValues?.[0]?.value || '0', 10),
    ])
  );
  const devices = ['mobile', 'desktop', 'tablet'].map((device) => ({
    device,
    users: deviceMap.get(device) || 0,
  }));

  // Parse browsers
  const browsers = (browsersRes[0]?.rows || []).map((row: any) => ({
    browser: row.dimensionValues?.[0]?.value || '(unknown)',
    users: parseInt(row.metricValues?.[0]?.value || '0', 10),
  }));
  const browserBuckets = bucketizeBrowsers(browsers);

  // Parse traffic sources
  const allTrafficSources = (trafficRes[0]?.rows || []).map((row: any) => ({
    source: row.dimensionValues?.[0]?.value || '(direct) / (none)',
    users: parseInt(row.metricValues?.[0]?.value || '0', 10),
  }));
  const trafficSources = allTrafficSources.slice(0, 10);

  // Bucket traffic sources into campaign/brand labels
  const sourceBuckets = bucketizeTrafficSources(allTrafficSources);

  // Parse cities
  const allCities = (citiesRes[0]?.rows || []).map((row: any) => ({
    city: row.dimensionValues?.[0]?.value || '(unknown)',
    users: parseInt(row.metricValues?.[0]?.value || '0', 10),
  }));
  const cities = allCities.slice(0, 15);

  // Bucket cities into known service-area labels
  const cityBuckets = bucketizeCities(allCities);

  return {
    current: currentStats,
    previous: previousStats,
    trend,
    topPages,
    devices,
    browsers,
    browserBuckets,
    trafficSources,
    sourceBuckets,
    cities,
    cityBuckets,
  };
}

export const TRAFFIC_BUCKET_LABELS = [
  'Instagram Paid',
  'Threads Paid',
  'Direct',
  'Google Organic',
  'fb Paid',
  'unknown/others',
] as const;

export const BROWSER_BUCKET_LABELS = [
  'AndroidWebview',
  'Safari',
  'Safari (in-app)',
  'Chrome',
  'SamsungInternet',
  'Others',
] as const;

export const CITY_BUCKET_LABELS = [
  'Jakarta',
  'Tangsel',
  'Depok',
  'Tangerang',
  'Bekasi',
  'Soreang (Bandung)',
  'Bekasi Regency',
  'Bogor',
  'Bandung',
  'Others',
] as const;

function bucketizeBrowsers(
  rows: { browser: string; users: number }[]
): Record<string, number> {
  const buckets: Record<string, number> = BROWSER_BUCKET_LABELS.reduce(
    (acc, label) => ({ ...acc, [label]: 0 }),
    {} as Record<string, number>
  );

  for (const row of rows) {
    const browser = row.browser.toLowerCase();
    let bucket: string | null = null;

    if (browser.includes('webview') || browser.includes('android webview')) bucket = 'AndroidWebview';
    else if (browser === 'safari (in-app)') bucket = 'Safari (in-app)';
    else if (browser === 'safari') bucket = 'Safari';
    else if (browser.includes('chrome')) bucket = 'Chrome';
    else if (/samsung\s*internet/.test(browser) || browser.includes('samsung')) bucket = 'SamsungInternet';
    else bucket = 'Others';

    buckets[bucket] += row.users;
  }

  return buckets;
}

function bucketizeCities(
  rows: { city: string; users: number }[]
): Record<string, number> {
  const buckets: Record<string, number> = CITY_BUCKET_LABELS.reduce(
    (acc, label) => ({ ...acc, [label]: 0 }),
    {} as Record<string, number>
  );

  for (const row of rows) {
    const city = row.city.toLowerCase();
    let bucket: string | null = null;

    if (city === 'jakarta') bucket = 'Jakarta';
    else if (city === 'south tangerang') bucket = 'Tangsel';
    else if (city === 'depok') bucket = 'Depok';
    else if (city === 'tangerang') bucket = 'Tangerang';
    else if (city === 'bekasi') bucket = 'Bekasi';
    else if (city === 'soreang') bucket = 'Soreang (Bandung)';
    else if (city === 'bekasi regency') bucket = 'Bekasi Regency';
    else if (city === 'bogor') bucket = 'Bogor';
    else if (city === 'bandung') bucket = 'Bandung';
    else bucket = 'Others';

    buckets[bucket] += row.users;
  }

  return buckets;
}

function bucketizeTrafficSources(
  rows: { source: string; users: number }[]
): Record<string, number> {
  const buckets: Record<string, number> = TRAFFIC_BUCKET_LABELS.reduce(
    (acc, label) => ({ ...acc, [label]: 0 }),
    {} as Record<string, number>
  );

  for (const row of rows) {
    const source = row.source.toLowerCase();
    let bucket: string | null = null;

    if (source === 'ig / paid') bucket = 'Instagram Paid';
    else if (source === 'th / paid') bucket = 'Threads Paid';
    else if (source === '(direct) / (none)') bucket = 'Direct';
    else if (source === 'google / organic') bucket = 'Google Organic';
    else if (source === 'fb / paid') bucket = 'fb Paid';
    else bucket = 'unknown/others';

    buckets[bucket] += row.users;
  }

  return buckets;
}