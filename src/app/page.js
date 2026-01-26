// app/page.js
import VideoPlayer from './components/home/VideoPlayer';
import Purpose from './components/home/Purpose';
import KPI from './components/home/KPI';
import Experience from './components/home/Experience';

export default function Home() {
  return (
    <div className="min-h-screen">
      <VideoPlayer />
      <Purpose />
      <KPI />
      <Experience />
    </div>
  );
}