import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Events from "@/components/Events";
import Team from "@/components/Team";
import Jobs from "@/components/Jobs";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B3D2C]">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Events />
        <Team />
        <Jobs />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
