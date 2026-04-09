"use client";

type VideoProps = {
  data: {
    videoUrl: string;
  };
};

const getEmbedUrl = (url: string) => {
  return url.replace("shorts/", "embed/");
};

const VideoCards = ({ data }: VideoProps) => {
  return (
    <div className="relative w-full aspect-[9/16] rounded-xl overflow-hidden shadow-lg bg-black">
      <iframe
        src={getEmbedUrl(data.videoUrl)}
        className="w-full h-full"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
    </div>
  );
};

export default VideoCards;
