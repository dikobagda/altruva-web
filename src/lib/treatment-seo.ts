import type { Service } from '@/lib/data/services';

type LocText = Record<'en' | 'id', string>;

function protocolValue(service: Service, label: string): LocText | undefined {
  return service.protocol?.find((p) => p.label.en === label)?.value;
}

export interface ServiceFaq {
  question: LocText;
  answer: LocText;
}

export function buildServiceSummary(service: Service): LocText {
  const duration =
    protocolValue(service, 'Duration') ??
    protocolValue(service, 'Session Duration') ??
    protocolValue(service, 'Session Time');
  const sessions =
    protocolValue(service, 'Sessions') ?? protocolValue(service, 'Sessions Needed');
  const downtime = protocolValue(service, 'Downtime');
  const results =
    protocolValue(service, 'Results') ??
    protocolValue(service, 'Results Timeline') ??
    protocolValue(service, 'Visible results') ??
    protocolValue(service, 'Onset');
  const maintenance = protocolValue(service, 'Maintenance');
  const frequency =
    protocolValue(service, 'Frequency') ?? protocolValue(service, 'Suggested frequency');

  const en: string[] = [service.description.en];
  if (duration) en.push(`A typical session takes ${duration.en}.`);
  if (sessions) en.push(`Physicians typically recommend ${sessions.en}.`);
  if (downtime) en.push(`Downtime is ${downtime.en}.`);
  if (results) en.push(`Results ${results.en}.`);
  if (maintenance) en.push(`Maintenance: ${maintenance.en}.`);
  if (frequency) en.push(`Frequency: ${frequency.en}.`);

  const id: string[] = [service.description.id];
  if (duration) id.push(`Satu sesi biasanya berlangsung ${duration.id}.`);
  if (sessions) id.push(`Dokter umumnya merekomendasikan ${sessions.id}.`);
  if (downtime) id.push(`Waktu pemulihan: ${downtime.id}.`);
  if (results) id.push(`Hasil ${results.id}.`);
  if (maintenance) id.push(`Pemeliharaan: ${maintenance.id}.`);
  if (frequency) id.push(`Frekuensi: ${frequency.id}.`);

  return { en: en.join(' '), id: id.join(' ') };
}

export function buildServiceFaqs(service: Service): ServiceFaq[] {
  const faqs: ServiceFaq[] = [];
  const { title } = service;

  const duration =
    protocolValue(service, 'Duration') ??
    protocolValue(service, 'Session Duration') ??
    protocolValue(service, 'Session Time');
  const sessions =
    protocolValue(service, 'Sessions') ?? protocolValue(service, 'Sessions Needed');
  const downtime = protocolValue(service, 'Downtime');
  const results =
    protocolValue(service, 'Results') ??
    protocolValue(service, 'Results Timeline') ??
    protocolValue(service, 'Visible results') ??
    protocolValue(service, 'Onset');
  const idealFor = service.indications?.length
    ? {
        en: service.indications.map((i) => i.en).join(', '),
        id: service.indications.map((i) => i.id).join(', '),
      }
    : protocolValue(service, 'Ideal For');

  if (duration) {
    faqs.push({
      question: { en: `How long does a ${title} session take?`, id: `Berapa lama satu sesi ${title}?` },
      answer: duration,
    });
  }
  if (sessions) {
    faqs.push({
      question: { en: `How many ${title} sessions are needed for results?`, id: `Berapa banyak sesi ${title} yang dibutuhkan untuk hasil optimal?` },
      answer: sessions,
    });
  }
  if (downtime) {
    faqs.push({
      question: { en: `Is there downtime after ${title}?`, id: `Apakah ada waktu pemulihan setelah ${title}?` },
      answer: downtime,
    });
  }
  if (results) {
    faqs.push({
      question: { en: `When will I see results from ${title}?`, id: `Kapan saya akan melihat hasil dari ${title}?` },
      answer: results,
    });
  }
  if (idealFor) {
    faqs.push({
      question: { en: `Who is ${title} suitable for?`, id: `Siapa yang cocok menjalani ${title}?` },
      answer: idealFor,
    });
  }
  faqs.push({
    question: { en: `How much does ${title} cost?`, id: `Berapa biaya perawatan ${title}?` },
    answer: { en: service.price, id: service.price },
  });

  return faqs;
}
