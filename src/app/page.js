// app/page.js
import VideoPlayer from './components/VideoPlayer';
import Purpose from './components/Purpose';
import KPI from './components/KPI';
import Experience from './components/Experience';

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