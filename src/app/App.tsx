import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Packages } from "./components/Packages";
import { Portfolio } from "./components/Portfolio";
import { About } from "./components/About";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Packages />
      <Portfolio />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
