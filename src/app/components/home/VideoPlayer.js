// components/VideoPlayer.js
const VideoPlayer = () => {
  return (
    <section className="relative w-full overflow-hidden bg-black">
      <div className="relative w-full" style={{ paddingTop: '45%' }}> {/* Controls the height */}
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/KCisrHlB-7Q?autoplay=1&mute=1&loop=1&playlist=KCisrHlB-7Q&controls=0&modestbranding=1&showinfo=0&rel=0"
          title="Video intro"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </section>
  );
};

export default VideoPlayer;