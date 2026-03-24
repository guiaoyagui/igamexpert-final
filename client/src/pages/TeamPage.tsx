import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackgroundRibbon from "../components/BackgroundRibbon";
import Team from "../components/Team";

export default function TeamPage() {
  return (
    <div className="relative min-h-screen bg-[#0B3D2C]">
      {/* A fita de néon global para manter a identidade visual */}
      <BackgroundRibbon />
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        
        {/* Usamos flex-grow para empurrar o Footer para o fundo, e pt-24 para compensar a Navbar */}
        <main className="flex-grow pt-24 pb-12">
          <Team />
        </main>

        <Footer />
      </div>
    </div>
  );
}