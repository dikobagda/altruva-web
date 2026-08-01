'use client';

import { useState } from 'react';
import BlogCard from './BlogCard';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import type { Blog } from '@/lib/data/blog';

interface BlogListProps {
  initialBlogs: Blog[];
  itemsPerPage?: number;
}

export default function BlogList({ initialBlogs, itemsPerPage = 6 }: BlogListProps) {
  const [visibleCount, setVisibleCount] = useState(itemsPerPage);

  const hasMore = visibleCount < initialBlogs.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + itemsPerPage, initialBlogs.length));
  };

  const displayedBlogs = initialBlogs.slice(0, visibleCount);

  return (
    <div className="space-y-12">
      {/* Blog Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedBlogs.map((insight) => (
          <BlogCard key={insight.id} blog={insight} />
        ))}
      </div>

      {/* Load More Button */}
      {hasMore && (
        <div className="flex justify-center pt-4">
          <Button
            onClick={handleLoadMore}
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 font-semibold px-8"
          >
            Load More <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
}
