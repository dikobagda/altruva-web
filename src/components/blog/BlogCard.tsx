
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Blog } from '@/lib/data/blog';
import { ArrowRight, CalendarDays } from 'lucide-react';

interface BlogCardProps {
  blog: Blog;
}

export default function BlogCard({ blog }: BlogCardProps) {
  if (!blog.href) {
    // Render a non-clickable card or null if a blog post has no href
    // This prevents the Link component from receiving an undefined href
    return (
      <Card className="flex flex-col overflow-hidden shadow-lg h-full w-full">
        {blog.imageSrc && (
          <div className="relative w-full aspect-video overflow-hidden">
            <Image
              src={blog.imageSrc}
              alt={blog.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              data-ai-hint={blog.imageHint}
            />
          </div>
        )}
        <CardHeader>
          <CardTitle className="font-serif text-xl text-primary leading-tight min-h-14">{blog.title}</CardTitle>
           <div className="flex items-center text-sm text-muted-foreground pt-1">
             <CalendarDays className="h-4 w-4 mr-2" />
             <span>{blog.date}</span>
           </div>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-foreground/80 text-sm h-24 overflow-hidden text-ellipsis">
            {blog.excerpt}
          </p>
        </CardContent>
        <CardFooter>
          <Button variant="link" className="p-0 font-semibold text-primary" disabled>
            Read More <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Link href={blog.href} className="flex h-full">
      <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full w-full group">
        {blog.imageSrc && (
          <div className="relative w-full aspect-video overflow-hidden">
            <Image
              src={blog.imageSrc}
              alt={blog.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              data-ai-hint={blog.imageHint}
            />
          </div>
        )}
        <CardHeader>
          <CardTitle className="font-serif text-xl text-primary leading-tight min-h-14">{blog.title}</CardTitle>
           <div className="flex items-center text-sm text-muted-foreground pt-1">
             <CalendarDays className="h-4 w-4 mr-2" />
             <span>{blog.date}</span>
           </div>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-foreground/80 text-sm h-24 overflow-hidden text-ellipsis">
            {blog.excerpt}
          </p>
        </CardContent>
        <CardFooter>
          <Button variant="link" className="p-0 font-semibold text-primary group-hover:underline">
            Read More <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}

