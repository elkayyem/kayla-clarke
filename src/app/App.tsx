import { CursorRing } from "./components/CursorRing";
import { MobileNav } from "./components/MobileNav";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Packages } from "./components/Packages";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <CursorRing />
      <MobileNav />
      <Hero />
      <Services />
      <Packages />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
