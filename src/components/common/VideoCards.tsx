"use client";

import Image from "next/image";
import { useRef, useState } from "react";

type VideoProps = {
  data: {
    videoUrl: string;
  };
};

const VideoCards = ({ data }: VideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="relative w-full aspect-[9/16] rounded-xl overflow-hidden shadow-lg bg-black">
      {/* VIDEO */}
      <video
        ref={videoRef}
        src={data.videoUrl}
        className="w-full h-full object-cover"
        muted
        loop
        controls={isPlaying}
      />

      {!isPlaying && (
        <div
          onClick={handlePlay}
          className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/30"
        >
          <Image
            src="/doctors.jpg"
            alt="Thumbnail"
            height={150}
            width={150}
            className="shadow-lg"
          />
        </div>
      )}
    </div>
  );
};

export default VideoCards;
