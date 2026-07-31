'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Plus, Edit, Trash2, ExternalLink, LogOut, Search,
  BookOpen, Eye, TrendingUp, FileText, ArrowUpDown, BarChart2,
} from 'lucide-react';
import { Input } from '@/components/ui/input';

interface Blog {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  content: string;
  keywords: string[];
  view_count: number;
  updated_at: string;
}

interface AnalyticsRow {
  slug: string;
  total_views: number;
  unique_views: number;
  views_7d: number;
  unique_7d: number;
}

function estimateReadTime(content: string): number {
  const words = content?.replace(/<[^>]*>/g, '').split(/\s+/).length || 0;
  return Math.max(1, Math.round(words / 200));
}

type SortKey = 'title' | 'date' | 'view_count' | 'views_7d' | 'read_time';

export default function DashboardPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [analytics, setAnalytics] = useState<Record<string, AnalyticsRow>>({});
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortKey, setSortKey] = useState<SortKey>('date');
  const [sortAsc, setSortAsc] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
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
      const [blogsRes, analyticsRes] = await Promise.all([
        fetch('/api/cms/blogs'),
        fetch('/api/analytics/view'),
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

  const handleDelete = async (slug: string) => {
    if (!confirm('Are you sure you want to delete this article?')) return;
    const res = await fetch(`/api/cms/blogs/${slug}`, { method: 'DELETE' });
    if (res.ok) {
      setBlogs(blogs.filter((b) => b.slug !== slug));
    } else {
      alert('Failed to delete article.');
    }
  };

  const toggleSort = (key: SortKey) => {
    if (sortKey === key) setSortAsc(!sortAsc);
    else { setSortKey(key); setSortAsc(false); }
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
          <BookOpen className="h-5 w-5 text-primary" />
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
            <h1 className="font-serif text-3xl font-bold text-primary">Blog Articles</h1>
            <p className="text-muted-foreground text-sm mt-1">{blogs.length} articles · Manage and track your content</p>
          </div>
          <Button asChild className="bg-primary text-primary-foreground font-semibold">
            <Link href="/cms/dashboard/new">
              <Plus className="mr-2 h-4 w-4" /> New Article
            </Link>
          </Button>
        </div>

        {/* Analytics Summary Cards */}
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

        {/* Search */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9 bg-white border-slate-200"
          />
        </div>

        {/* Table */}
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
          </div>
        ) : filteredBlogs.length === 0 ? (
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
                    <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider whitespace-nowrap">Unique Visitors</th>
                    <SortTh label="Views (7d)" k="views_7d" />
                    <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider whitespace-nowrap">Unique (7d)</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {paginatedBlogs.map((blog) => {
                    const views7d = analytics[blog.slug]?.views_7d || 0;
                    const readMin = estimateReadTime(blog.content);
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
                              onClick={() => handleDelete(blog.slug)}
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
        )}
      </main>
    </div>
  );
}
