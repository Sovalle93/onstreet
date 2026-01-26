// components/VideoPlayer.js
const VideoPlayer = () => {
  return (
    <section className="relative w-full aspect-video overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center w-full"> {/* Added w-full */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-contain"
        >
          <source 
            src="https://res.cloudinary.com/dmivjpb65/video/upload/v1768780127/intro_video_f7eckc.mp4" 
            type="video/mp4" 
          />
        </video>
      </div>
    </section>
  );
};

export default VideoPlayer;