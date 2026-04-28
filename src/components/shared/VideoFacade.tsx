
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';

interface VideoFacadeProps {
  videoId: string;
  title?: string;
  isShort?: boolean;
}

export default function VideoFacade({ videoId, title, isShort = false }: VideoFacadeProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  // Get high quality thumbnail from YouTube
  // hqdefault or maxresdefault
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  if (isPlaying) {
    return (
      <iframe
        className="w-full h-full absolute inset-0"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title={title || "YouTube video"}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    );
  }

  return (
    <div 
      className="w-full h-full relative cursor-pointer group bg-black flex items-center justify-center"
      onClick={() => setIsPlaying(true)}
    >
      <Image
        src={thumbnailUrl}
        alt={title || "Video thumbnail"}
        fill
        className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
      <div className="relative z-20 bg-primary/90 text-white p-4 rounded-full shadow-xl transform group-hover:scale-110 transition-transform">
        <Play className="w-8 h-8 fill-current" />
      </div>
    </div>
  );
}
