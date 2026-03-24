import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
// import Services from "../components/Services"; <-- A próxima secção a brilhar aqui!
import Events from "../components/Events";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import BackgroundRibbon from "../components/BackgroundRibbon";

export default function Home() {
return (
    <div className="relative min-h-screen">
      <BackgroundRibbon />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Events />
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
}