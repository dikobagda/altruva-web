'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Plus, Edit, Trash2, ExternalLink, LogOut, Search,
  Eye, TrendingUp, FileText, ArrowUpDown, BarChart2, Users, Copy, Calendar, CheckCircle, XCircle, Clock, MessageCircle, MousePointerClick, RefreshCw,
  Monitor, Smartphone, Tablet, Globe, Hourglass, ArrowUpRight, ArrowDownRight,
  FileSpreadsheet
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as ChartTooltip,
  Legend,
  Cell
} from 'recharts';

interface Blog {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  content: string;
  keywords: string[];
  view_count: number;
  status?: 'published' | 'draft';
  updated_at: string;
}

interface AnalyticsRow {
  slug: string;
  total_views: number;
  unique_views: number;
  views_7d: number;
  unique_7d: number;
}

interface Appointment {
  id: number;
  name: string;
  email: string;
  phone: string;
  treatment: string;
  preferred_date: string;
  preferred_time: string;
  notes: string | null;
  status: 'pending' | 'confirmed' | 'cancelled';
  created_at: string;
}

interface WhatsAppAnalytics {
  total: number;
  unique_ips: number;
  clicks_7d: number;
  clicks_30d: number;
  byType: { event_type: string; count: number }[];
  byPage: { url: string; count: number }[];
  trend: { day: string; count: number }[];
}

interface GA4Stats {
  activeUsers: number;
  newUsers: number;
  pageViews: number;
  sessions: number;
  avgSessionDuration: number;
}

interface GA4TrendPoint {
  date: string;
  rawDate: string;
  activeUsers: number;
  newUsers: number;
  pageViews: number;
}

interface GA4TopPage {
  path: string;
  users: number;
  views: number;
}

interface GA4Device {
  device: string;
  users: number;
}

interface GA4Browser {
  browser: string;
  users: number;
}

interface GA4TrafficSource {
  source: string;
  users: number;
}

interface GA4City {
  city: string;
  users: number;
}

interface GA4Data {
  success: boolean;
  current: GA4Stats;
  previous: GA4Stats;
  trend: GA4TrendPoint[];
  topPages: GA4TopPage[];
  devices: GA4Device[];
  browsers: GA4Browser[];
  browserBuckets: Record<string, number>;
  trafficSources: GA4TrafficSource[];
  cities: GA4City[];
}

function estimateReadTime(content: string): number {
  const words = content?.replace(/<[^>]*>/g, '').split(/\s+/).length || 0;
  return Math.max(1, Math.round(words / 200));
}

function todayLocal(): string {
  const d = new Date();
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().slice(0, 10);
}

type SortKey = 'title' | 'date' | 'view_count' | 'views_7d' | 'read_time';

export default function DashboardPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [activeTab, setActiveTab] = useState<'articles' | 'appointments' | 'whatsapp' | 'ga4'>('ga4');
  const [deleteTargetSlug, setDeleteTargetSlug] = useState<string | null>(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [appointmentToDelete, setAppointmentToDelete] = useState<number | null>(null);
  const [isApptDeleteDialogOpen, setIsApptDeleteDialogOpen] = useState(false);
  const [updatingApptId, setUpdatingApptId] = useState<number | null>(null);
  const [analytics, setAnalytics] = useState<Record<string, AnalyticsRow>>({});
  const [whatsappAnalytics, setWhatsappAnalytics] = useState<WhatsAppAnalytics | null>(null);
  const [waLoading, setWaLoading] = useState(true);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortKey, setSortKey] = useState<SortKey>('date');
  const [sortAsc, setSortAsc] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [waDateFrom, setWaDateFrom] = useState('');
  const [waDateTo, setWaDateTo] = useState('');
  
  // GA4 Analytics States
  const [ga4Data, setGa4Data] = useState<GA4Data | null>(null);
  const [ga4Loading, setGa4Loading] = useState(false);
  const [ga4Error, setGa4Error] = useState<string | null>(null);
  const [ga4Preset, setGa4Preset] = useState<'today' | 'yesterday' | '7daysAgo' | '30daysAgo' | 'custom'>('today');
  const [ga4DateFrom, setGa4DateFrom] = useState('');
  const [ga4DateTo, setGa4DateTo] = useState('');

  // Google Sheets export states
  const [sheetSyncing, setSheetSyncing] = useState(false);
  const [sheetStatus, setSheetStatus] = useState<{ ok: boolean; message: string } | null>(null);

  const router = useRouter();

  // Reset pagination on search or sorting change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, sortKey, sortAsc]);

  // Fetch GA4 data when tab is active or preset changes
  useEffect(() => {
    if (activeTab === 'ga4') {
      if (ga4Preset !== 'custom') {
        fetchGa4Data();
      } else if (ga4DateFrom && ga4DateTo) {
        fetchGa4Data();
      } else if (!ga4Data) {
        fetchGa4Data('30daysAgo', 'today');
      }
    }
  }, [activeTab, ga4Preset]);

  const fetchGa4Data = async (forceFrom?: string, forceTo?: string) => {
    setGa4Loading(true);
    setGa4Error(null);
    try {
      let from = '30daysAgo';
      let to = 'today';

      if (forceFrom !== undefined && forceTo !== undefined) {
        from = forceFrom;
        to = forceTo;
      } else if (ga4Preset === 'today') {
        from = 'today';
        to = 'today';
      } else if (ga4Preset === 'yesterday') {
        from = 'yesterday';
        to = 'yesterday';
      } else if (ga4Preset === '7daysAgo') {
        from = '7daysAgo';
        to = 'today';
      } else if (ga4Preset === 'custom') {
        if (!ga4DateFrom || !ga4DateTo) {
          from = '30daysAgo';
          to = 'today';
        } else {
          from = ga4DateFrom;
          to = ga4DateTo;
        }
      }

      const params = new URLSearchParams();
      params.set('from', from);
      params.set('to', to);

      const res = await fetch(`/api/analytics/ga4?${params.toString()}`);
      if (res.ok) {
        const data = await res.json();
        setGa4Data(data);
      } else {
        const errorData = await res.json().catch(() => ({ error: 'Failed to parse response' }));
        setGa4Error(errorData.error || 'Failed to fetch GA4 analytics.');
      }
    } catch (e) {
      console.error('Failed to fetch GA4 analytics:', e);
      setGa4Error('An unexpected error occurred while fetching GA4 data.');
    } finally {
      setGa4Loading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const syncToSheets = async () => {
    setSheetSyncing(true);
    setSheetStatus(null);
    try {
      const res = await fetch('/api/sheets/sync', { method: 'POST' });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        const total = (data.worksheets || []).reduce((sum: number, w: any) => sum + (w.rowsAppended || 0), 0);
        const timeNote = data.syncedAt ? ` pada ${data.syncedAt} WIB` : '';
        setSheetStatus({
          ok: true,
          message: `Data berhasil dikirim ke Google Sheets${timeNote} (${total} baris baru).${data.warning ? ` ${data.warning}` : ''}`,
        });
      } else {
        setSheetStatus({ ok: false, message: data.error || 'Gagal mengirim data ke Google Sheets.' });
      }
    } catch {
      setSheetStatus({ ok: false, message: 'Terjadi kesalahan saat menghubungi server.' });
    } finally {
      setSheetSyncing(false);
    }
  };

  const fetchData = async () => {
    try {
      setWaLoading(true);
      const waParams = new URLSearchParams();
      if (waDateFrom) waParams.set('from', waDateFrom);
      if (waDateTo) waParams.set('to', waDateTo);
      const waQuery = waParams.toString();

      const [blogsRes, analyticsRes, appointmentsRes, whatsappRes] = await Promise.all([
        fetch('/api/cms/blogs'),
        fetch('/api/analytics/view'),
        fetch('/api/cms/appointments'),
        fetch(`/api/analytics/whatsapp${waQuery ? `?${waQuery}` : ''}`),
      ]);

      if (blogsRes.status === 401) {
        router.push('/cms/login');
        return;
      }

      if (blogsRes.ok) {
        const data: Blog[] = await blogsRes.json();
        setBlogs(data);
      }

      if (analyticsRes.ok) {
        const rows: AnalyticsRow[] = await analyticsRes.json();
        const map: Record<string, AnalyticsRow> = {};
        rows.forEach((r) => { map[r.slug] = r; });
        setAnalytics(map);
      }

      if (appointmentsRes.ok) {
        const data: Appointment[] = await appointmentsRes.json();
        setAppointments(data);
      }

      if (whatsappRes.ok) {
        const data: WhatsAppAnalytics = await whatsappRes.json();
        setWhatsappAnalytics(data);
      }
    } catch (error) {
      console.error('Failed to fetch data:', error);
    } finally {
      setWaLoading(false);
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await fetch('/api/cms/auth', { method: 'DELETE' });
    router.push('/cms/login');
    router.refresh();
  };

  const confirmDelete = (slug: string) => {
    setDeleteTargetSlug(slug);
    setIsDeleteDialogOpen(true);
  };

  const handleDelete = async () => {
    if (!deleteTargetSlug) return;
    const res = await fetch(`/api/cms/blogs/${deleteTargetSlug}`, { method: 'DELETE' });
    if (res.ok) {
      setBlogs(blogs.filter((b) => b.slug !== deleteTargetSlug));
      setIsDeleteDialogOpen(false);
      setDeleteTargetSlug(null);
    } else {
      alert('Failed to delete article.');
    }
  };

  const toggleSort = (key: SortKey) => {
    if (sortKey === key) setSortAsc(!sortAsc);
    else { setSortKey(key); setSortAsc(false); }
  };

  const handleUpdateApptStatus = async (id: number, status: 'pending' | 'confirmed' | 'cancelled') => {
    setUpdatingApptId(id);
    try {
      const res = await fetch('/api/cms/appointments', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status }),
      });
      if (res.ok) {
        setAppointments(prev => prev.map(a => a.id === id ? { ...a, status } : a));
      }
    } catch (e) {
      console.error('Failed to update appointment status', e);
    } finally {
      setUpdatingApptId(null);
    }
  };

  const handleDeleteAppointment = async () => {
    if (!appointmentToDelete) return;
    try {
      const res = await fetch('/api/cms/appointments', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: appointmentToDelete }),
      });
      if (res.ok) {
        setAppointments(prev => prev.filter(a => a.id !== appointmentToDelete));
        setIsApptDeleteDialogOpen(false);
        setAppointmentToDelete(null);
      }
    } catch (e) {
      console.error('Failed to delete appointment', e);
    }
  };

  const filteredBlogs = blogs
    .filter((b) =>
      b.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      let av: any, bv: any;
      if (sortKey === 'view_count') { av = a.view_count; bv = b.view_count; }
      else if (sortKey === 'views_7d') { av = analytics[a.slug]?.views_7d || 0; bv = analytics[b.slug]?.views_7d || 0; }
      else if (sortKey === 'read_time') { av = estimateReadTime(a.content); bv = estimateReadTime(b.content); }
      else if (sortKey === 'date') { av = new Date(a.date).getTime() || 0; bv = new Date(b.date).getTime() || 0; }
      else { av = a.title.toLowerCase(); bv = b.title.toLowerCase(); }
      if (av < bv) return sortAsc ? -1 : 1;
      if (av > bv) return sortAsc ? 1 : -1;
      return 0;
    });

  const totalPages = Math.ceil(filteredBlogs.length / pageSize);
  const paginatedBlogs = filteredBlogs.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const totalViews = blogs.reduce((s, b) => s + (b.view_count || 0), 0);
  const totalViews7d = Object.values(analytics).reduce((s, r) => s + (r.views_7d || 0), 0);

  const SortTh = ({ label, k }: { label: string; k: SortKey }) => (
    <th
      className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider cursor-pointer hover:text-primary select-none whitespace-nowrap"
      onClick={() => toggleSort(k)}
    >
      <span className="flex items-center gap-1">
        {label}
        <ArrowUpDown className={`h-3 w-3 ${sortKey === k ? 'text-primary' : 'text-slate-300'}`} />
      </span>
    </th>
  );

  return (
    <div className="min-h-screen bg-slate-50/60">
      {/* CMS Navbar */}
      <header className="border-b bg-white sticky top-0 z-10 px-6 py-3.5 flex items-center justify-between shadow-sm">
        <div className="flex items-center space-x-3">
          <Image
            src="/images/logoaltruvanew.webp"
            alt="Altruva Logo"
            width={80}
            height={80}
            className="h-8 w-8 object-contain"
          />
          <span className="font-serif text-xl font-bold text-primary">Altruva CMS</span>
        </div>
        <div className="flex items-center space-x-3">
          <Button asChild variant="outline" size="sm">
            <Link href="/blog" target="_blank" className="flex items-center">
              View Website <ExternalLink className="ml-2 h-3.5 w-3.5" />
            </Link>
          </Button>
          <Button variant="ghost" size="sm" onClick={handleLogout} className="text-destructive hover:bg-destructive/10 hover:text-destructive">
            Sign Out <LogOut className="ml-2 h-3.5 w-3.5" />
          </Button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6 md:p-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="font-serif text-3xl font-bold text-primary">
              {activeTab === 'ga4' ? 'Google Analytics (GA4)' : activeTab === 'articles' ? 'Blog Articles' : activeTab === 'whatsapp' ? 'WhatsApp Analytics' : 'Appointments'}
            </h1>
            <p className="text-muted-foreground text-sm mt-1">
              {activeTab === 'ga4'
                ? 'Website traffic, trends, and visitor demographics'
                : activeTab === 'articles'
                ? `${blogs.length} articles · Manage and track your content`
                : activeTab === 'whatsapp'
                ? `${whatsappAnalytics?.total || 0} tracked clicks · WhatsApp button & CTA performance`
                : `${appointments.length} bookings · ${appointments.filter(a => a.status === 'pending').length} pending`}
            </p>
          </div>
          {activeTab === 'whatsapp' ? (
            <Button
              variant="outline"
              onClick={() => fetchData()}
              className="text-primary border-primary/30 hover:bg-primary/5"
            >
              <RefreshCw className="mr-2 h-4 w-4" /> Refresh
            </Button>
          ) : activeTab === 'ga4' ? (
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                onClick={() => syncToSheets()}
                className="text-primary border-primary/30 hover:bg-primary/5"
                disabled={sheetSyncing}
              >
                {sheetSyncing ? (
                  <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <FileSpreadsheet className="mr-2 h-4 w-4" />
                )}
                {sheetSyncing ? 'Mengirim...' : 'Kirim ke Google Sheets'}
              </Button>
              <Button
                variant="outline"
                onClick={() => fetchGa4Data()}
                className="text-primary border-primary/30 hover:bg-primary/5"
                disabled={ga4Loading}
              >
                <RefreshCw className={`mr-2 h-4 w-4 ${ga4Loading ? 'animate-spin' : ''}`} /> Refresh GA4
              </Button>
            </div>
          ) : activeTab === 'articles' ? (
            <Button asChild className="bg-primary text-primary-foreground font-semibold">
              <Link href="/cms/dashboard/new">
                <Plus className="mr-2 h-4 w-4" /> New Article
              </Link>
            </Button>
          ) : (
            <Button
              onClick={() => {
                const header = "ID,Name,Email,Phone,Treatment,Date,Time,Status,Notes,Submitted\n";
                const rows = appointments.map(a =>
                  `${a.id},"${a.name}",${a.email},${a.phone},"${a.treatment}",${a.preferred_date},${a.preferred_time},${a.status},"${(a.notes || '').replace(/"/g, '""')}",${new Date(a.created_at).toLocaleString()}`
                ).join('\n');
                navigator.clipboard.writeText(header + rows);
                alert('Appointments copied to clipboard as CSV!');
              }}
              className="bg-primary text-primary-foreground font-semibold"
            >
              <Copy className="mr-2 h-4 w-4" /> Export CSV
            </Button>
          )}
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap border-b border-slate-200 mb-6 gap-2">
          <button
            onClick={() => { setActiveTab('ga4'); setSearchTerm(''); setCurrentPage(1); }}
            className={`px-4 py-2.5 font-serif text-sm font-semibold border-b-2 transition-all flex items-center gap-2 ${activeTab === 'ga4' ? 'border-primary text-primary' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
          >
            <BarChart2 className="h-4 w-4" /> Google Analytics (GA4)
          </button>
          <button
            onClick={() => { setActiveTab('articles'); setSearchTerm(''); setCurrentPage(1); }}
            className={`px-4 py-2.5 font-serif text-sm font-semibold border-b-2 transition-all flex items-center gap-2 ${activeTab === 'articles' ? 'border-primary text-primary' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
          >
            <FileText className="h-4 w-4" /> Articles ({blogs.length})
          </button>
          <button
            onClick={() => { setActiveTab('appointments'); setSearchTerm(''); setCurrentPage(1); }}
            className={`px-4 py-2.5 font-serif text-sm font-semibold border-b-2 transition-all flex items-center gap-2 ${activeTab === 'appointments' ? 'border-primary text-primary' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
          >
            <Calendar className="h-4 w-4" /> Appointments ({appointments.length})
            {appointments.filter(a => a.status === 'pending').length > 0 && (
              <span className="ml-1 bg-amber-100 text-amber-700 text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                {appointments.filter(a => a.status === 'pending').length}
              </span>
            )}
          </button>
          <button
            onClick={() => { setActiveTab('whatsapp'); setSearchTerm(''); setCurrentPage(1); }}
            className={`px-4 py-2.5 font-serif text-sm font-semibold border-b-2 transition-all flex items-center gap-2 ${activeTab === 'whatsapp' ? 'border-primary text-primary' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp ({whatsappAnalytics?.clicks_7d || 0})
          </button>
        </div>

        {/* Analytics Summary Cards (Only on Articles tab) */}
        {activeTab === 'articles' && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card className="bg-white border-slate-200">
              <CardHeader className="pb-1 pt-4 px-4">
                <CardTitle className="text-xs text-slate-500 font-medium uppercase tracking-wider flex items-center gap-1.5">
                  <FileText className="h-3.5 w-3.5" /> Total Articles
                </CardTitle>
              </CardHeader>
              <CardContent className="px-4 pb-4">
                <p className="text-3xl font-bold text-primary">{blogs.length}</p>
              </CardContent>
            </Card>
            <Card className="bg-white border-slate-200">
              <CardHeader className="pb-1 pt-4 px-4">
                <CardTitle className="text-xs text-slate-500 font-medium uppercase tracking-wider flex items-center gap-1.5">
                  <Eye className="h-3.5 w-3.5" /> Total Views
                </CardTitle>
              </CardHeader>
              <CardContent className="px-4 pb-4">
                <p className="text-3xl font-bold text-primary">{totalViews.toLocaleString()}</p>
              </CardContent>
            </Card>
            <Card className="bg-white border-slate-200">
              <CardHeader className="pb-1 pt-4 px-4">
                <CardTitle className="text-xs text-slate-500 font-medium uppercase tracking-wider flex items-center gap-1.5">
                  <TrendingUp className="h-3.5 w-3.5" /> Views (7 days)
                </CardTitle>
              </CardHeader>
              <CardContent className="px-4 pb-4">
                <p className="text-3xl font-bold text-primary">{totalViews7d.toLocaleString()}</p>
              </CardContent>
            </Card>
            <Card className="bg-white border-slate-200">
              <CardHeader className="pb-1 pt-4 px-4">
                <CardTitle className="text-xs text-slate-500 font-medium uppercase tracking-wider flex items-center gap-1.5">
                  <BarChart2 className="h-3.5 w-3.5" /> Avg. Views/Article
                </CardTitle>
              </CardHeader>
              <CardContent className="px-4 pb-4">
                <p className="text-3xl font-bold text-primary">
                  {blogs.length ? Math.round(totalViews / blogs.length).toLocaleString() : 0}
                </p>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Search */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder={activeTab === 'articles' ? "Search articles..." : activeTab === 'whatsapp' || activeTab === 'ga4' ? "Filter pages..." : "Search appointments..."}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9 bg-white border-slate-200"
          />
        </div>

        {/* Table/List View */}
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
          </div>
        ) : activeTab === 'articles' ? (
          /* Articles Tab View */
          filteredBlogs.length === 0 ? (
            <div className="text-center py-20 text-muted-foreground">
              {searchTerm ? 'No articles match your search.' : 'No articles yet. Create your first one!'}
            </div>
          ) : (
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-slate-50 border-b border-slate-200">
                    <tr>
                      <SortTh label="Title" k="title" />
                      <SortTh label="Published" k="date" />
                      <SortTh label="Total Views" k="view_count" />
                      <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider whitespace-nowrap">Status</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider whitespace-nowrap">Unique Visitors</th>
                      <SortTh label="Views (7d)" k="views_7d" />
                      <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider whitespace-nowrap">Unique (7d)</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {paginatedBlogs.map((blog) => {
                      const views7d = analytics[blog.slug]?.views_7d || 0;
                      return (
                        <tr 
                          key={blog.slug} 
                          className="hover:bg-slate-50/85 transition-colors cursor-pointer"
                          onClick={() => router.push(`/cms/dashboard/post/${blog.slug}`)}
                        >
                          {/* Title */}
                          <td className="px-4 py-3 max-w-xs">
                            <p className="font-semibold text-primary truncate">{blog.title}</p>
                            <p className="text-xs text-slate-400 mt-0.5 font-mono">/{blog.slug}</p>
                          </td>

                          {/* Date */}
                          <td className="px-4 py-3 whitespace-nowrap text-slate-600">
                            {blog.date}
                          </td>

                          {/* Total Views */}
                          <td className="px-4 py-3 whitespace-nowrap">
                            <div className="flex items-center gap-1.5 font-semibold text-slate-700">
                              <Eye className="h-3.5 w-3.5 text-slate-400" />
                              {(blog.view_count || 0).toLocaleString()}
                            </div>
                          </td>

                          {/* Publishing Status */}
                          <td className="px-4 py-3 whitespace-nowrap">
                            {blog.status === 'draft' ? (
                              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 border border-amber-200">
                                🟡 Draft
                              </span>
                            ) : (
                              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-green-100 text-green-800 border border-green-200">
                                🟢 Live
                              </span>
                            )}
                          </td>

                          {/* Unique Visitors (all time) */}
                          <td className="px-4 py-3 whitespace-nowrap text-slate-600">
                            {((analytics[blog.slug] as any)?.unique_views || 0).toLocaleString()}
                          </td>

                          {/* Views 7d */}
                          <td className="px-4 py-3 whitespace-nowrap">
                            <span className={`inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full ${views7d > 0 ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-400'}`}>
                              <TrendingUp className="h-3 w-3" /> {views7d.toLocaleString()}
                            </span>
                          </td>

                          {/* Unique 7d */}
                          <td className="px-4 py-3 whitespace-nowrap text-slate-600 text-sm">
                            {((analytics[blog.slug] as any)?.unique_7d || 0).toLocaleString()}
                          </td>

                          {/* Actions */}
                          <td className="px-4 py-3" onClick={(e) => e.stopPropagation()}>
                            <div className="flex items-center gap-2">
                              <Button asChild variant="outline" size="sm" className="h-7 text-xs">
                                <Link href={`/cms/dashboard/edit/${blog.slug}`}>
                                  <Edit className="h-3.5 w-3.5 mr-1" /> Edit
                                </Link>
                              </Button>
                              <Button asChild variant="ghost" size="sm" className="h-7 text-xs text-muted-foreground">
                                <Link href={`/blog/${blog.slug}`} target="_blank">
                                  <ExternalLink className="h-3.5 w-3.5" />
                                </Link>
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-7 text-xs text-destructive hover:bg-destructive/10"
                                onClick={() => confirmDelete(blog.slug)}
                              >
                                <Trash2 className="h-3.5 w-3.5" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Pagination Controls */}
              <div className="flex flex-col sm:flex-row items-center justify-between border-t border-slate-200 px-6 py-4 bg-slate-50 text-slate-500 gap-4 text-xs">
                <div className="flex items-center gap-2">
                  <span>Show</span>
                  <select
                    value={pageSize}
                    onChange={(e) => {
                      setPageSize(Number(e.target.value));
                      setCurrentPage(1);
                    }}
                    className="bg-white border border-slate-200 rounded px-2.5 py-1 text-slate-700 outline-none focus:border-primary"
                  >
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={50}>50</option>
                  </select>
                  <span>entries</span>
                  <span className="ml-4">
                    Showing {filteredBlogs.length === 0 ? 0 : (currentPage - 1) * pageSize + 1} to {Math.min(currentPage * pageSize, filteredBlogs.length)} of {filteredBlogs.length} entries
                  </span>
                </div>
                
                <div className="flex items-center gap-1.5">
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-8 px-3"
                    onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </Button>
                  
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <Button
                      key={page}
                      variant={page === currentPage ? 'default' : 'outline'}
                      size="sm"
                      className="h-8 w-8 p-0 text-xs"
                      onClick={() => setCurrentPage(page)}
                    >
                      {page}
                    </Button>
                  ))}
                  
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-8 px-3"
                    onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                    disabled={currentPage === totalPages || totalPages === 0}
                  >
                    Next
                  </Button>
                </div>
              </div>
            </div>
          )
        ) : activeTab === 'appointments' ? (
          /* Appointments Tab View */
          (() => {
            const filteredAppts = appointments.filter(a =>
              a.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              a.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
              a.phone.includes(searchTerm) ||
              a.treatment.toLowerCase().includes(searchTerm.toLowerCase())
            );
            const totalApptPages = Math.ceil(filteredAppts.length / pageSize);
            const paginatedAppts = filteredAppts.slice(
              (currentPage - 1) * pageSize,
              currentPage * pageSize
            );

            const statusBadge = (status: Appointment['status']) => {
              const map = {
                pending: 'bg-amber-50 text-amber-700 border border-amber-200',
                confirmed: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
                cancelled: 'bg-red-50 text-red-600 border border-red-200',
              };
              return (
                <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold capitalize ${map[status]}`}>
                  {status === 'confirmed' && <CheckCircle className="h-3 w-3" />}
                  {status === 'cancelled' && <XCircle className="h-3 w-3" />}
                  {status === 'pending' && <Clock className="h-3 w-3" />}
                  {status}
                </span>
              );
            };

            return filteredAppts.length === 0 ? (
              <div className="text-center py-20 text-muted-foreground">
                {searchTerm ? 'No appointments match your search.' : 'No appointments yet.'}
              </div>
            ) : (
              <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-slate-50 border-b border-slate-200">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">ID</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Patient</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Treatment</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Date &amp; Time</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {paginatedAppts.map((appt) => (
                        <tr key={appt.id} className="hover:bg-slate-50/50 transition-colors">
                          <td className="px-4 py-4 whitespace-nowrap text-slate-400 font-mono text-xs">#{appt.id}</td>
                          <td className="px-4 py-4">
                            <div className="font-semibold text-slate-800">{appt.name}</div>
                            <div className="text-xs text-slate-500">{appt.email}</div>
                            <div className="text-xs text-slate-500">{appt.phone}</div>
                          </td>
                          <td className="px-4 py-4">
                            <div className="text-slate-700 max-w-[180px] truncate" title={appt.treatment}>{appt.treatment}</div>
                            {appt.notes && <div className="text-xs text-slate-400 mt-1 max-w-[180px] truncate" title={appt.notes}>Note: {appt.notes}</div>}
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <div className="text-slate-700 font-medium">{new Date(appt.preferred_date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</div>
                            <div className="text-xs text-slate-500">{appt.preferred_time}</div>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap">
                            {statusBadge(appt.status)}
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <div className="flex items-center gap-1.5">
                              {appt.status !== 'confirmed' && (
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="h-7 px-2 text-xs text-emerald-600 border-emerald-200 hover:bg-emerald-50"
                                  disabled={updatingApptId === appt.id}
                                  onClick={() => handleUpdateApptStatus(appt.id, 'confirmed')}
                                >
                                  <CheckCircle className="h-3 w-3 mr-1" /> Confirm
                                </Button>
                              )}
                              {appt.status !== 'cancelled' && (
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="h-7 px-2 text-xs text-red-500 border-red-200 hover:bg-red-50"
                                  disabled={updatingApptId === appt.id}
                                  onClick={() => handleUpdateApptStatus(appt.id, 'cancelled')}
                                >
                                  <XCircle className="h-3 w-3 mr-1" /> Cancel
                                </Button>
                              )}
                              <Button
                                size="sm"
                                variant="ghost"
                                className="h-7 w-7 p-0 text-slate-400 hover:text-destructive"
                                onClick={() => { setAppointmentToDelete(appt.id); setIsApptDeleteDialogOpen(true); }}
                              >
                                <Trash2 className="h-3.5 w-3.5" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Pagination */}
                <div className="flex flex-col sm:flex-row items-center justify-between border-t border-slate-200 px-6 py-4 bg-slate-50 text-slate-500 gap-4 text-xs">
                  <div className="flex items-center gap-2">
                    <span>Show</span>
                    <select
                      value={pageSize}
                      onChange={(e) => { setPageSize(Number(e.target.value)); setCurrentPage(1); }}
                      className="bg-white border border-slate-200 rounded px-2.5 py-1 text-slate-700 outline-none focus:border-primary"
                    >
                      <option value={5}>5</option>
                      <option value={10}>10</option>
                      <option value={20}>20</option>
                      <option value={50}>50</option>
                    </select>
                    <span>entries</span>
                    <span className="ml-4">
                      Showing {filteredAppts.length === 0 ? 0 : (currentPage - 1) * pageSize + 1} to {Math.min(currentPage * pageSize, filteredAppts.length)} of {filteredAppts.length} entries
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Button variant="outline" size="sm" className="h-8 px-3" onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))} disabled={currentPage === 1}>Previous</Button>
                    {Array.from({ length: totalApptPages }, (_, i) => i + 1).map((page) => (
                      <Button key={page} variant={page === currentPage ? 'default' : 'outline'} size="sm" className="h-8 w-8 p-0 text-xs" onClick={() => setCurrentPage(page)}>{page}</Button>
                    ))}
                    <Button variant="outline" size="sm" className="h-8 px-3" onClick={() => setCurrentPage(prev => Math.min(totalApptPages, prev + 1))} disabled={currentPage === totalApptPages || totalApptPages === 0}>Next</Button>
                  </div>
                </div>
              </div>
            );
          })()
        ) : activeTab === 'whatsapp' ? (
          /* WhatsApp Analytics Tab View */
          (() => {
            const wa = whatsappAnalytics;
            const byPage = (wa?.byPage || []).filter(p =>
              p.url.toLowerCase().includes(searchTerm.toLowerCase())
            );
            const maxTrend = Math.max(...(wa?.trend || []).map(t => t.count), 0);

            return (
              <div className="space-y-8">
                {/* Date range filter */}
                <Card className="bg-white border-slate-200">
                  <CardContent className="px-6 py-4">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-slate-400" />
                        <span className="text-sm font-medium text-slate-600">Date range</span>
                      </div>
                      <div className="flex flex-wrap items-center gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="h-8 text-primary border-primary/30 hover:bg-primary/5"
                          onClick={() => {
                            const today = todayLocal();
                            setWaDateFrom(today);
                            setWaDateTo(today);
                            setTimeout(fetchData, 0);
                          }}
                        >
                          Today
                        </Button>
                        <span className="text-slate-300 text-sm">|</span>
                        <input
                          type="date"
                          value={waDateFrom}
                          onChange={(e) => setWaDateFrom(e.target.value)}
                          className="bg-white border border-slate-200 rounded-md px-3 py-1.5 text-sm text-slate-700 outline-none focus:border-primary focus:ring-1 focus:ring-primary/30"
                        />
                        <span className="text-slate-400 text-sm">to</span>
                        <input
                          type="date"
                          value={waDateTo}
                          onChange={(e) => setWaDateTo(e.target.value)}
                          className="bg-white border border-slate-200 rounded-md px-3 py-1.5 text-sm text-slate-700 outline-none focus:border-primary focus:ring-1 focus:ring-primary/30"
                        />
                        <Button
                          size="sm"
                          className="h-8"
                          onClick={() => { fetchData(); }}
                        >
                          <RefreshCw className="mr-1.5 h-3.5 w-3.5" /> Apply
                        </Button>
                        {(waDateFrom || waDateTo) && (
                          <Button
                            size="sm"
                            variant="ghost"
                            className="h-8 text-slate-500"
                            onClick={() => {
                              setWaDateFrom('');
                              setWaDateTo('');
                              setTimeout(fetchData, 0);
                            }}
                          >
                            Clear
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {waLoading ? (
                  /* Lazy-load placeholder while fetching */
                  <div className="flex flex-col items-center justify-center py-16 text-muted-foreground">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
                    <p className="text-sm mt-3">Loading WhatsApp analytics...</p>
                  </div>
                ) : !wa || wa.total === 0 ? (
                  <div className="text-center py-16 text-muted-foreground">
                    <MessageCircle className="h-10 w-10 mx-auto mb-3 opacity-40" />
                    <p>No WhatsApp clicks in this period.</p>
                    <p className="text-sm mt-1">
                      {(waDateFrom || waDateTo) ? 'Try a different date range.' : 'Clicks on the floating WhatsApp button and WhatsApp CTAs will appear here.'}
                    </p>
                  </div>
                ) : (
                  <>
                {/* Summary cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Card className="bg-white border-slate-200">
                    <CardHeader className="pb-1 pt-4 px-4">
                      <CardTitle className="text-xs text-slate-500 font-medium uppercase tracking-wider flex items-center gap-1.5">
                        <MousePointerClick className="h-3.5 w-3.5" /> Total Clicks
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="px-4 pb-4">
                      <p className="text-3xl font-bold text-primary">{wa.total.toLocaleString()}</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-white border-slate-200">
                    <CardHeader className="pb-1 pt-4 px-4">
                      <CardTitle className="text-xs text-slate-500 font-medium uppercase tracking-wider flex items-center gap-1.5">
                        <TrendingUp className="h-3.5 w-3.5" /> Clicks (7 days)
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="px-4 pb-4">
                      <p className="text-3xl font-bold text-primary">{wa.clicks_7d.toLocaleString()}</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-white border-slate-200">
                    <CardHeader className="pb-1 pt-4 px-4">
                      <CardTitle className="text-xs text-slate-500 font-medium uppercase tracking-wider flex items-center gap-1.5">
                        <BarChart2 className="h-3.5 w-3.5" /> Clicks (30 days)
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="px-4 pb-4">
                      <p className="text-3xl font-bold text-primary">{wa.clicks_30d.toLocaleString()}</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-white border-slate-200">
                    <CardHeader className="pb-1 pt-4 px-4">
                      <CardTitle className="text-xs text-slate-500 font-medium uppercase tracking-wider flex items-center gap-1.5">
                        <Users className="h-3.5 w-3.5" /> Unique Visitors
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="px-4 pb-4">
                      <p className="text-3xl font-bold text-primary">{wa.unique_ips.toLocaleString()}</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Trend chart */}
                <Card className="bg-white border-slate-200">
                  <CardHeader className="pb-2 pt-4 px-6">
                    <CardTitle className="text-sm text-slate-600 font-semibold">Clicks Trend (Last 30 Days)</CardTitle>
                  </CardHeader>
                  <CardContent className="px-6 pb-6">
                    {wa.trend.length === 0 ? (
                      <p className="text-slate-400 text-sm py-8 text-center">No data in the last 30 days.</p>
                    ) : (
                      <div className="flex items-end gap-1.5 h-40 pt-2 border-b border-slate-100 px-1">
                        {wa.trend.map((d) => {
                          const heightPct = maxTrend > 0 ? (d.count / maxTrend) * 100 : 0;
                          const label = new Date(`${d.day}T00:00:00`).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
                          return (
                            <div key={d.day} className="flex-1 flex flex-col items-center h-full group relative">
                              <div className="opacity-0 group-hover:opacity-100 absolute bottom-full mb-1 bg-slate-800 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap z-10 transition-opacity">
                                {label}: {d.count} clicks
                              </div>
                              <div className="w-full flex items-end h-full">
                                <div style={{ height: `${Math.max(4, heightPct)}%` }} className="w-full bg-primary/20 group-hover:bg-primary rounded-t transition-colors" />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </CardContent>
                </Card>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* By type */}
                  <Card className="bg-white border-slate-200">
                    <CardHeader className="pb-2 pt-4 px-6">
                      <CardTitle className="text-sm text-slate-600 font-semibold">By Click Type</CardTitle>
                    </CardHeader>
                    <CardContent className="px-6 pb-6">
                      {(wa.byType || []).length === 0 ? (
                        <p className="text-slate-400 text-sm py-4">No data yet.</p>
                      ) : (
                        <div className="space-y-3">
                          {wa.byType.map((t) => {
                            const pct = wa.total > 0 ? Math.round((t.count / wa.total) * 100) : 0;
                            return (
                              <div key={t.event_type}>
                                <div className="flex items-center justify-between text-sm mb-1">
                                  <span className="font-medium text-slate-700">
                                    {t.event_type === 'whatsapp-button' ? 'Floating Button' : 'WhatsApp CTA'}
                                  </span>
                                  <span className="text-slate-500">{t.count.toLocaleString()} ({pct}%)</span>
                                </div>
                                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                  <div className="h-full bg-primary rounded-full" style={{ width: `${pct}%` }} />
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </CardContent>
                  </Card>

                  {/* By page */}
                  <Card className="bg-white border-slate-200">
                    <CardHeader className="pb-2 pt-4 px-6">
                      <CardTitle className="text-sm text-slate-600 font-semibold">Top Pages ({byPage.length})</CardTitle>
                    </CardHeader>
                    <CardContent className="px-6 pb-6">
                      {byPage.length === 0 ? (
                        <p className="text-slate-400 text-sm py-4">No pages tracked yet.</p>
                      ) : (
                        <div className="space-y-2.5">
                          {byPage.slice(0, 10).map((p) => (
                            <div key={p.url + p.count} className="flex items-center justify-between text-sm gap-3">
                              <span className="text-slate-600 font-mono text-xs truncate">{p.url || '/'}</span>
                              <span className="text-slate-800 font-semibold whitespace-nowrap">{p.count.toLocaleString()}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
                  </>
                )}
              </div>
            );
          })()
        ) : (
          /* GA4 Analytics Tab View */
          (() => {
            if (ga4Loading) {
              return (
                <div className="flex flex-col items-center justify-center py-24 text-muted-foreground">
                  <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary mb-4" />
                  <p className="text-sm">Fetching real-time report from Google Analytics (GA4)...</p>
                </div>
              );
            }

            if (ga4Error) {
              return (
                <Card className="bg-red-50/50 border-red-200/60 p-6 text-center">
                  <div className="max-w-md mx-auto py-8">
                    <XCircle className="h-12 w-12 text-destructive mx-auto mb-4" />
                    <h3 className="font-serif text-lg font-bold text-slate-800 mb-2">GA4 Integration Error</h3>
                    <p className="text-sm text-slate-600 mb-6">{ga4Error}</p>
                    <p className="text-xs text-slate-500 mb-4">
                      Please check that your service account credentials and project configurations are correctly defined in your environment variables (`GA4_PROPERTY_ID`, `GCS_CLIENT_EMAIL`, and `GCS_PRIVATE_KEY_BASE64`).
                    </p>
                    <Button onClick={() => fetchGa4Data()} variant="outline" className="border-red-200 text-red-700 hover:bg-red-50">
                      <RefreshCw className="mr-2 h-4 w-4" /> Try Again
                    </Button>
                  </div>
                </Card>
              );
            }

            if (!ga4Data) {
              return (
                <div className="text-center py-16 text-muted-foreground">
                  <BarChart2 className="h-10 w-10 mx-auto mb-3 opacity-40" />
                  <p>No Google Analytics data retrieved.</p>
                </div>
              );
            }

            const calculateChange = (current: number, previous: number) => {
              if (!previous) return { text: '--', up: true, val: 0 };
              const diff = current - previous;
              const pct = (diff / previous) * 100;
              return {
                text: `${pct >= 0 ? '+' : ''}${pct.toFixed(1)}%`,
                up: pct >= 0,
                val: Math.abs(pct)
              };
            };

            const formatDuration = (seconds: number) => {
              const m = Math.floor(seconds / 60);
              const s = Math.round(seconds % 60);
              return `${m}m ${s}s`;
            };

            const userChange = calculateChange(ga4Data.current.activeUsers, ga4Data.previous.activeUsers);
            const newUserChange = calculateChange(ga4Data.current.newUsers, ga4Data.previous.newUsers);
            const viewChange = calculateChange(ga4Data.current.pageViews, ga4Data.previous.pageViews);
            const sessionChange = calculateChange(ga4Data.current.sessions, ga4Data.previous.sessions);
            const durationChange = calculateChange(ga4Data.current.avgSessionDuration, ga4Data.previous.avgSessionDuration);

            // Device category helper
            const totalDevices = ga4Data.devices.reduce((acc, d) => acc + d.users, 0);

            // Filter Top Pages by search term if exists
            const filteredPages = ga4Data.topPages.filter(p =>
              p.path.toLowerCase().includes(searchTerm.toLowerCase())
            );

            return (
              <div className="space-y-8 animate-in fade-in duration-300">
                {/* Date range filter card */}
                <Card className="bg-white border-slate-200">
                  <CardContent className="px-6 py-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      {/* Preset Select */}
                      <div className="flex items-center gap-3">
                        <Calendar className="h-4 w-4 text-slate-400" />
                        <span className="text-sm font-medium text-slate-600">Period</span>
                        <select
                          value={ga4Preset}
                          onChange={(e) => setGa4Preset(e.target.value as any)}
                          className="bg-white border border-slate-200 rounded-md px-3 py-1.5 text-sm text-slate-700 outline-none focus:border-primary focus:ring-1 focus:ring-primary/30"
                        >
                          <option value="today">Today</option>
                          <option value="yesterday">Yesterday</option>
                          <option value="7daysAgo">Last 7 Days</option>
                          <option value="30daysAgo">Last 30 Days</option>
                          <option value="custom">Custom Date Range</option>
                        </select>
                      </div>

                      {/* Custom inputs */}
                      {ga4Preset === 'custom' && (
                        <div className="flex flex-wrap items-center gap-2 animate-in fade-in slide-in-from-left-2 duration-200">
                          <input
                            type="date"
                            value={ga4DateFrom}
                            onChange={(e) => setGa4DateFrom(e.target.value)}
                            className="bg-white border border-slate-200 rounded-md px-3 py-1.5 text-sm text-slate-700 outline-none focus:border-primary focus:ring-1 focus:ring-primary/30"
                          />
                          <span className="text-slate-400 text-sm">to</span>
                          <input
                            type="date"
                            value={ga4DateTo}
                            onChange={(e) => setGa4DateTo(e.target.value)}
                            className="bg-white border border-slate-200 rounded-md px-3 py-1.5 text-sm text-slate-700 outline-none focus:border-primary focus:ring-1 focus:ring-primary/30"
                          />
                          <Button
                            size="sm"
                            className="h-8"
                            onClick={() => { fetchGa4Data(); }}
                          >
                            Apply
                          </Button>
                        </div>
                      )}
                    </div>

                    {sheetStatus && (
                      <div className={`mt-3 text-sm rounded-md px-3 py-2 flex items-start gap-2 ${
                        sheetStatus.ok ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-600'
                      }`}>
                        {sheetStatus.ok
                          ? <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                          : <XCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                        <span>{sheetStatus.message}</span>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Metric Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {/* Users */}
                  <Card className="bg-white border-slate-200">
                    <CardHeader className="pb-1 pt-4 px-4 flex flex-row items-center justify-between space-y-0">
                      <CardTitle className="text-xs text-slate-500 font-medium uppercase tracking-wider flex items-center gap-1.5">
                        <Users className="h-3.5 w-3.5" /> Active Users
                      </CardTitle>
                      <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full flex items-center ${userChange.up ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-600'}`}>
                        {userChange.up ? <ArrowUpRight className="h-3 w-3 mr-0.5" /> : <ArrowDownRight className="h-3 w-3 mr-0.5" />}
                        {userChange.text}
                      </span>
                    </CardHeader>
                    <CardContent className="px-4 pb-4">
                      <p className="text-3xl font-bold text-primary">{ga4Data.current.activeUsers.toLocaleString()}</p>
                      <p className="text-[10px] text-slate-400 mt-1">vs {ga4Data.previous.activeUsers.toLocaleString()} last period</p>
                    </CardContent>
                  </Card>

                  {/* New Users */}
                  <Card className="bg-white border-slate-200">
                    <CardHeader className="pb-1 pt-4 px-4 flex flex-row items-center justify-between space-y-0">
                      <CardTitle className="text-xs text-slate-500 font-medium uppercase tracking-wider flex items-center gap-1.5">
                        <Users className="h-3.5 w-3.5" /> New Users
                      </CardTitle>
                      <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full flex items-center ${newUserChange.up ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-600'}`}>
                        {newUserChange.up ? <ArrowUpRight className="h-3 w-3 mr-0.5" /> : <ArrowDownRight className="h-3 w-3 mr-0.5" />}
                        {newUserChange.text}
                      </span>
                    </CardHeader>
                    <CardContent className="px-4 pb-4">
                      <p className="text-3xl font-bold text-primary">{ga4Data.current.newUsers.toLocaleString()}</p>
                      <p className="text-[10px] text-slate-400 mt-1">vs {ga4Data.previous.newUsers.toLocaleString()} last period</p>
                    </CardContent>
                  </Card>

                  {/* Views */}
                  <Card className="bg-white border-slate-200">
                    <CardHeader className="pb-1 pt-4 px-4 flex flex-row items-center justify-between space-y-0">
                      <CardTitle className="text-xs text-slate-500 font-medium uppercase tracking-wider flex items-center gap-1.5">
                        <Eye className="h-3.5 w-3.5" /> Page Views
                      </CardTitle>
                      <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full flex items-center ${viewChange.up ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-600'}`}>
                        {viewChange.up ? <ArrowUpRight className="h-3 w-3 mr-0.5" /> : <ArrowDownRight className="h-3 w-3 mr-0.5" />}
                        {viewChange.text}
                      </span>
                    </CardHeader>
                    <CardContent className="px-4 pb-4">
                      <p className="text-3xl font-bold text-primary">{ga4Data.current.pageViews.toLocaleString()}</p>
                      <p className="text-[10px] text-slate-400 mt-1">vs {ga4Data.previous.pageViews.toLocaleString()} last period</p>
                    </CardContent>
                  </Card>

                  {/* Sessions */}
                  <Card className="bg-white border-slate-200">
                    <CardHeader className="pb-1 pt-4 px-4 flex flex-row items-center justify-between space-y-0">
                      <CardTitle className="text-xs text-slate-500 font-medium uppercase tracking-wider flex items-center gap-1.5">
                        <BarChart2 className="h-3.5 w-3.5" /> Sessions
                      </CardTitle>
                      <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full flex items-center ${sessionChange.up ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-600'}`}>
                        {sessionChange.up ? <ArrowUpRight className="h-3 w-3 mr-0.5" /> : <ArrowDownRight className="h-3 w-3 mr-0.5" />}
                        {sessionChange.text}
                      </span>
                    </CardHeader>
                    <CardContent className="px-4 pb-4">
                      <p className="text-3xl font-bold text-primary">{ga4Data.current.sessions.toLocaleString()}</p>
                      <p className="text-[10px] text-slate-400 mt-1">vs {ga4Data.previous.sessions.toLocaleString()} last period</p>
                    </CardContent>
                  </Card>

                  {/* Avg Session Duration */}
                  <Card className="bg-white border-slate-200">
                    <CardHeader className="pb-1 pt-4 px-4 flex flex-row items-center justify-between space-y-0">
                      <CardTitle className="text-xs text-slate-500 font-medium uppercase tracking-wider flex items-center gap-1.5">
                        <Hourglass className="h-3.5 w-3.5" /> Session Duration
                      </CardTitle>
                      <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full flex items-center ${durationChange.up ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-600'}`}>
                        {durationChange.up ? <ArrowUpRight className="h-3 w-3 mr-0.5" /> : <ArrowDownRight className="h-3 w-3 mr-0.5" />}
                        {durationChange.text}
                      </span>
                    </CardHeader>
                    <CardContent className="px-4 pb-4">
                      <p className="text-3xl font-bold text-primary">{formatDuration(ga4Data.current.avgSessionDuration)}</p>
                      <p className="text-[10px] text-slate-400 mt-1">vs {formatDuration(ga4Data.previous.avgSessionDuration)} last period</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Daily Trend Chart */}
                <Card className="bg-white border-slate-200 shadow-sm overflow-hidden">
                  <CardHeader className="px-6 pt-4 pb-2 border-b border-slate-100 flex flex-row items-center justify-between">
                    <CardTitle className="text-sm font-semibold text-slate-800">Traffic Trend (Last 30 Days)</CardTitle>
                    <div className="flex items-center gap-4 text-xs font-medium">
                      <span className="flex items-center gap-1.5 text-[#824123]"><span className="h-2.5 w-2.5 rounded-full bg-[#824123] inline-block" /> Page Views</span>
                      <span className="flex items-center gap-1.5 text-[#b76631]"><span className="h-2.5 w-2.5 rounded-full bg-[#b76631] inline-block" /> Active Users</span>
                      <span className="flex items-center gap-1.5 text-[#0d9488]"><span className="h-2.5 w-2.5 rounded-full bg-[#0d9488] inline-block" /> New Users</span>
                    </div>
                  </CardHeader>
                  <CardContent className="px-6 py-6">
                    <div className="h-[300px] w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={ga4Data.trend} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                          <defs>
                            <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#824123" stopOpacity={0.2}/>
                              <stop offset="95%" stopColor="#824123" stopOpacity={0}/>
                            </linearGradient>
                            <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#b76631" stopOpacity={0.2}/>
                              <stop offset="95%" stopColor="#b76631" stopOpacity={0}/>
                            </linearGradient>
                            <linearGradient id="colorNewUsers" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#0d9488" stopOpacity={0.2}/>
                              <stop offset="95%" stopColor="#0d9488" stopOpacity={0}/>
                            </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                          <XAxis dataKey="date" stroke="#94a3b8" fontSize={11} tickLine={false} axisLine={false} />
                          <YAxis stroke="#94a3b8" fontSize={11} tickLine={false} axisLine={false} />
                          <ChartTooltip contentStyle={{ borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                          <Area type="monotone" dataKey="pageViews" name="Page Views" stroke="#824123" strokeWidth={2.5} fillOpacity={1} fill="url(#colorViews)" />
                          <Area type="monotone" dataKey="activeUsers" name="Active Users" stroke="#b76631" strokeWidth={2.5} fillOpacity={1} fill="url(#colorUsers)" />
                          <Area type="monotone" dataKey="newUsers" name="New Users" stroke="#0d9488" strokeWidth={2.5} fillOpacity={1} fill="url(#colorNewUsers)" />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>

                {/* Sub panels Row 1: Cities & Sources */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Top Cities */}
                  <Card className="bg-white border-slate-200 shadow-sm lg:col-span-2">
                    <CardHeader className="px-6 pt-4 pb-2 border-b border-slate-100">
                      <CardTitle className="text-sm font-semibold text-slate-800 flex items-center justify-between">
                        <span>Top Visitor Locations (Cities)</span>
                        <span className="text-xs font-normal text-slate-400">by active users</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="max-h-[350px] overflow-y-auto">
                        <table className="w-full text-sm">
                          <thead className="bg-slate-50 border-b border-slate-100 text-xs font-medium text-slate-400 uppercase tracking-wider sticky top-0">
                            <tr>
                              <th className="px-6 py-3 text-left">City</th>
                              <th className="px-6 py-3 text-right">Active Users</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100">
                            {ga4Data.cities.map((city, idx) => (
                              <tr key={city.city + idx} className="hover:bg-slate-50/50">
                                <td className="px-6 py-3 font-medium text-slate-700 flex items-center gap-2">
                                  <Globe className="h-3.5 w-3.5 text-slate-400" />
                                  {city.city}
                                </td>
                                <td className="px-6 py-3 text-right font-semibold text-slate-800">
                                  {city.users.toLocaleString()}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Traffic Sources */}
                  <Card className="bg-white border-slate-200 shadow-sm lg:col-span-1">
                    <CardHeader className="px-6 pt-4 pb-2 border-b border-slate-100">
                      <CardTitle className="text-sm font-semibold text-slate-800">Traffic Source / Medium</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="max-h-[350px] overflow-y-auto">
                        <table className="w-full text-sm">
                          <thead className="bg-slate-50 border-b border-slate-100 text-xs font-medium text-slate-400 uppercase tracking-wider sticky top-0">
                            <tr>
                              <th className="px-4 py-3 text-left">Source / Medium</th>
                              <th className="px-4 py-3 text-right">Users</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100">
                            {ga4Data.trafficSources.map((src, idx) => (
                              <tr key={src.source + idx} className="hover:bg-slate-50/50">
                                <td className="px-4 py-3 text-slate-600 truncate max-w-[150px]" title={src.source}>
                                  {src.source}
                                </td>
                                <td className="px-4 py-3 text-right font-semibold text-slate-800">
                                  {src.users.toLocaleString()}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Sub panels Row 2: Pages & Devices */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Top Pages */}
                  <Card className="bg-white border-slate-200 shadow-sm lg:col-span-2">
                    <CardHeader className="px-6 pt-4 pb-2 border-b border-slate-100">
                      <CardTitle className="text-sm font-semibold text-slate-800 flex items-center justify-between">
                        <span>Top Visited Pages</span>
                        <span className="text-xs font-normal text-slate-400">{filteredPages.length} active paths</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="max-h-[350px] overflow-y-auto">
                        <table className="w-full text-sm">
                          <thead className="bg-slate-50 border-b border-slate-100 text-xs font-medium text-slate-400 uppercase tracking-wider sticky top-0">
                            <tr>
                              <th className="px-6 py-3 text-left">Page Path</th>
                              <th className="px-6 py-3 text-right">Users</th>
                              <th className="px-6 py-3 text-right">Views</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100">
                            {filteredPages.map((page, idx) => (
                              <tr key={page.path + idx} className="hover:bg-slate-50/50">
                                <td className="px-6 py-3 font-mono text-xs text-slate-600 truncate max-w-[200px]" title={page.path}>
                                  {page.path}
                                </td>
                                <td className="px-6 py-3 text-right font-medium text-slate-800">
                                  {page.users.toLocaleString()}
                                </td>
                                <td className="px-6 py-3 text-right font-semibold text-primary">
                                  {page.views.toLocaleString()}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Device Breakdown */}
                  <div className="lg:col-span-1 space-y-6">
                  <Card className="bg-white border-slate-200 shadow-sm">
                    <CardHeader className="px-6 pt-4 pb-2 border-b border-slate-100">
                      <CardTitle className="text-sm font-semibold text-slate-800">Device Share</CardTitle>
                    </CardHeader>
                    <CardContent className="px-6 py-5">
                      <div className="space-y-4">
                        {ga4Data.devices.map((dev) => {
                          const pct = totalDevices > 0 ? (dev.users / totalDevices) * 100 : 0;
                          const isMobile = dev.device.toLowerCase() === 'mobile';
                          const isTablet = dev.device.toLowerCase() === 'tablet';
                          return (
                            <div key={dev.device} className="space-y-1.5">
                              <div className="flex items-center justify-between text-xs font-medium text-slate-700">
                                <span className="flex items-center gap-1.5 capitalize">
                                  {isMobile ? <Smartphone className="h-3.5 w-3.5 text-slate-400" /> : isTablet ? <Tablet className="h-3.5 w-3.5 text-slate-400" /> : <Monitor className="h-3.5 w-3.5 text-slate-400" />}
                                  {dev.device}
                                </span>
                                <span>{pct.toFixed(1)}% ({dev.users.toLocaleString()})</span>
                              </div>
                              <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                <div className="h-full bg-primary rounded-full" style={{ width: `${pct}%` }} />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Browser Breakdown */}
                  <Card className="bg-white border-slate-200 shadow-sm">
                    <CardHeader className="px-6 pt-4 pb-2 border-b border-slate-100">
                      <CardTitle className="text-sm font-semibold text-slate-800">Browser Share</CardTitle>
                    </CardHeader>
                    <CardContent className="px-6 py-5">
                      <div className="space-y-4">
                        {ga4Data.browsers.map((brs) => {
                          const pct = ga4Data.current.activeUsers > 0 ? (brs.users / ga4Data.current.activeUsers) * 100 : 0;
                          return (
                            <div key={brs.browser} className="space-y-1.5">
                              <div className="flex items-center justify-between text-xs font-medium text-slate-700">
                                <span className="flex items-center gap-1.5">
                                  <Globe className="h-3.5 w-3.5 text-slate-400" />
                                  {brs.browser}
                                </span>
                                <span>{pct.toFixed(1)}% ({brs.users.toLocaleString()})</span>
                              </div>
                              <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                <div className="h-full bg-[#b76631] rounded-full" style={{ width: `${pct}%` }} />
                              </div>
                            </div>
                          );
                        })}
                        {ga4Data.browsers.length === 0 && (
                          <p className="text-xs text-slate-400">No browser data for the selected period.</p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                  </div>
                </div>
              </div>
            );
          })()
        )}
      </main>

      {/* Article Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent className="sm:max-w-[400px] rounded-2xl border border-slate-200 shadow-xl bg-white p-6">
          <DialogHeader className="text-center sm:text-left">
            <DialogTitle className="font-serif text-xl text-primary font-bold">
              Confirm Delete
            </DialogTitle>
            <DialogDescription className="text-sm text-slate-500 mt-2">
              Are you sure you want to delete this article? This action is permanent and cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="mt-6 flex flex-col sm:flex-row gap-2 justify-end">
            <Button
              variant="outline"
              onClick={() => {
                setIsDeleteDialogOpen(false);
                setDeleteTargetSlug(null);
              }}
              className="w-full sm:w-auto rounded-full"
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={handleDelete}
              className="w-full sm:w-auto rounded-full bg-destructive text-white hover:bg-destructive/90"
            >
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Appointment Delete Confirmation Dialog */}
      <Dialog open={isApptDeleteDialogOpen} onOpenChange={setIsApptDeleteDialogOpen}>
        <DialogContent className="sm:max-w-[400px] rounded-2xl border border-slate-200 shadow-xl bg-white p-6">
          <DialogHeader className="text-center sm:text-left">
            <DialogTitle className="font-serif text-xl text-primary font-bold">
              Delete Appointment
            </DialogTitle>
            <DialogDescription className="text-sm text-slate-500 mt-2">
              Are you sure you want to delete this appointment record? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="mt-6 flex flex-col sm:flex-row gap-2 justify-end">
            <Button
              variant="outline"
              onClick={() => { setIsApptDeleteDialogOpen(false); setAppointmentToDelete(null); }}
              className="w-full sm:w-auto rounded-full"
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={handleDeleteAppointment}
              className="w-full sm:w-auto rounded-full bg-destructive text-white hover:bg-destructive/90"
            >
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
