"use client";

import { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

type VideoProps = {
  data: {
    videoUrl: string;
  };
};

const VideoCards = ({ data }: VideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div
      className="group relative w-full aspect-[9/16] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 bg-slate-200"
      onClick={togglePlay}
    >
      {/* Video Element */}
      <video
        ref={videoRef}
        src={data.videoUrl}
        className="w-full h-full object-cover cursor-pointer"
        muted
        loop
        playsInline
      />

      {/* Modern Overlay */}
      {!isPlaying && (
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex flex-col items-center justify-center transition-all group-hover:bg-black/20">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white shadow-xl transform group-hover:scale-110 transition-transform duration-300">
            <Play className="w-8 h-8 fill-current ml-1" />
          </div>
          <span className="mt-4 text-white text-xs font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">
            Watch Story
          </span>
        </div>
      )}

      {/* Floating Pause Button when playing (Visible on Hover) */}
      {isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black/20">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white">
            <Pause className="w-6 h-6 fill-current" />
          </div>
        </div>
      )}

      {/* Top Border Accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-[#0b2a5b] opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  );
};

export default VideoCards;
