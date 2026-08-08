'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Plus, Edit, Trash2, ExternalLink, LogOut, Search,
  Eye, TrendingUp, FileText, ArrowUpDown, BarChart2, Users, Download, Copy, Calendar, CheckCircle, XCircle, Clock, MessageCircle, MousePointerClick, RefreshCw
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

interface Lead {
  id: number;
  name: string;
  whatsapp: string;
  created_at: string;
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

function estimateReadTime(content: string): number {
  const words = content?.replace(/<[^>]*>/g, '').split(/\s+/).length || 0;
  return Math.max(1, Math.round(words / 200));
}

type SortKey = 'title' | 'date' | 'view_count' | 'views_7d' | 'read_time';

export default function DashboardPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [activeTab, setActiveTab] = useState<'articles' | 'leads' | 'appointments' | 'whatsapp'>('articles');
  const [deleteTargetSlug, setDeleteTargetSlug] = useState<string | null>(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [appointmentToDelete, setAppointmentToDelete] = useState<number | null>(null);
  const [isApptDeleteDialogOpen, setIsApptDeleteDialogOpen] = useState(false);
  const [updatingApptId, setUpdatingApptId] = useState<number | null>(null);
  const [analytics, setAnalytics] = useState<Record<string, AnalyticsRow>>({});
  const [whatsappAnalytics, setWhatsappAnalytics] = useState<WhatsAppAnalytics | null>(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortKey, setSortKey] = useState<SortKey>('date');
  const [sortAsc, setSortAsc] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [waDateFrom, setWaDateFrom] = useState('');
  const [waDateTo, setWaDateTo] = useState('');
  const router = useRouter();

  // Reset pagination on search or sorting change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, sortKey, sortAsc]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const waParams = new URLSearchParams();
      if (waDateFrom) waParams.set('from', waDateFrom);
      if (waDateTo) waParams.set('to', waDateTo);
      const waQuery = waParams.toString();

      const [blogsRes, analyticsRes, leadsRes, appointmentsRes, whatsappRes] = await Promise.all([
        fetch('/api/cms/blogs'),
        fetch('/api/analytics/view'),
        fetch('/api/cms/leads'),
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

      if (leadsRes.ok) {
        const data: Lead[] = await leadsRes.json();
        setLeads(data);
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
              {activeTab === 'articles' ? 'Blog Articles' : activeTab === 'leads' ? 'E-Book Downloads' : activeTab === 'whatsapp' ? 'WhatsApp Analytics' : 'Appointments'}
            </h1>
            <p className="text-muted-foreground text-sm mt-1">
              {activeTab === 'articles'
                ? `${blogs.length} articles · Manage and track your content`
                : activeTab === 'leads'
                ? `${leads.length} leads registered · Prospective clients`
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
          ) : activeTab === 'articles' ? (
            <Button asChild className="bg-primary text-primary-foreground font-semibold">
              <Link href="/cms/dashboard/new">
                <Plus className="mr-2 h-4 w-4" /> New Article
              </Link>
            </Button>
          ) : activeTab === 'leads' ? (
            <Button
              onClick={() => {
                const header = "ID,Name,WhatsApp,Date\n";
                const rows = leads.map(l => `${l.id},"${l.name.replace(/"/g, '""')}",${l.whatsapp},${new Date(l.created_at).toLocaleString()}`).join('\n');
                navigator.clipboard.writeText(header + rows);
                alert('Leads list copied to clipboard as CSV format!');
              }}
              className="bg-primary text-primary-foreground font-semibold"
            >
              <Copy className="mr-2 h-4 w-4" /> Copy CSV to Clipboard
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
        <div className="flex border-b border-slate-200 mb-6 gap-2">
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
            onClick={() => { setActiveTab('leads'); setSearchTerm(''); setCurrentPage(1); }}
            className={`px-4 py-2.5 font-serif text-sm font-semibold border-b-2 transition-all flex items-center gap-2 ${activeTab === 'leads' ? 'border-primary text-primary' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
          >
            <Users className="h-4 w-4" /> E-book Downloads ({leads.length})
          </button>
          <button
            onClick={() => { setActiveTab('whatsapp'); setSearchTerm(''); setCurrentPage(1); }}
            className={`px-4 py-2.5 font-serif text-sm font-semibold border-b-2 transition-all flex items-center gap-2 ${activeTab === 'whatsapp' ? 'border-primary text-primary' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp Analytics
            {(whatsappAnalytics?.clicks_7d || 0) > 0 && (
              <span className="ml-1 bg-green-100 text-green-700 text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                {whatsappAnalytics?.clicks_7d}
              </span>
            )}
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
            placeholder={activeTab === 'articles' ? "Search articles..." : activeTab === 'whatsapp' ? "Filter pages..." : "Search leads by name or whatsapp..."}
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
        ) : activeTab === 'leads' ? (
          /* Leads Tab View */
          (() => {
            const filteredLeads = leads.filter(l => 
              l.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              l.whatsapp.includes(searchTerm)
            );
            const totalLeadsPages = Math.ceil(filteredLeads.length / pageSize);
            const paginatedLeads = filteredLeads.slice(
              (currentPage - 1) * pageSize,
              currentPage * pageSize
            );

            return filteredLeads.length === 0 ? (
              <div className="text-center py-20 text-muted-foreground">
                {searchTerm ? 'No leads match your search.' : 'No leads registered yet.'}
              </div>
            ) : (
              <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-slate-50 border-b border-slate-200">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">ID</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">WhatsApp Number</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Date Registered</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {paginatedLeads.map((lead) => (
                        <tr key={lead.id} className="hover:bg-slate-50/50 transition-colors">
                          <td className="px-6 py-4 whitespace-nowrap text-slate-500 font-mono">#{lead.id}</td>
                          <td className="px-6 py-4 whitespace-nowrap font-medium text-slate-800">{lead.name}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <a 
                              href={`https://wa.me/${lead.whatsapp.replace(/[^0-9]/g, '')}`} 
                              target="_blank" 
                              rel="noreferrer" 
                              className="text-primary hover:underline font-medium"
                            >
                              {lead.whatsapp}
                            </a>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-slate-500">
                            {new Date(lead.created_at).toLocaleString('id-ID', {
                              day: 'numeric',
                              month: 'long',
                              year: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit'
                            })}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Pagination Controls for Leads */}
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
                      Showing {filteredLeads.length === 0 ? 0 : (currentPage - 1) * pageSize + 1} to {Math.min(currentPage * pageSize, filteredLeads.length)} of {filteredLeads.length} entries
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
                    
                    {Array.from({ length: totalLeadsPages }, (_, i) => i + 1).map((page) => (
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
                      onClick={() => setCurrentPage(prev => Math.min(totalLeadsPages, prev + 1))}
                      disabled={currentPage === totalLeadsPages || totalLeadsPages === 0}
                    >
                      Next
                    </Button>
                  </div>
                </div>
              </div>
            );
          })()
        ) : (
          /* WhatsApp Analytics Tab View */
          (() => {
            const wa = whatsappAnalytics;
            const byPage = (wa?.byPage || []).filter(p =>
              p.url.toLowerCase().includes(searchTerm.toLowerCase())
            );
            const maxTrend = Math.max(...(wa?.trend || []).map(t => t.count), 0);
            const findTypeCount = (type: string) => (wa?.byType || []).find(t => t.event_type === type)?.count || 0;

            if (!wa || wa.total === 0) {
              return (
                <div className="text-center py-20 text-muted-foreground">
                  <MessageCircle className="h-10 w-10 mx-auto mb-3 opacity-40" />
                  <p>No WhatsApp clicks tracked yet.</p>
                  <p className="text-sm mt-1">Clicks on the floating WhatsApp button and WhatsApp CTAs will appear here.</p>
                </div>
              );
            }

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
