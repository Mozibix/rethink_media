import React from "react";

interface YouTubeEmbedProps {
  videoId: string;
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ videoId }) => {
  return (
    <div className="yt_container">
      <iframe
        width={100}
        height={100}
        src={`https://www.youtube.com/embed/${videoId}`}
        title="Explainer Video"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeEmbed;
