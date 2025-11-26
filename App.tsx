import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { PricingTable } from "./components/PricingTable";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { FAQ } from "./components/FAQ";
import { ContactCTA } from "./components/ContactCTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <PricingTable />
        <WhyChooseUs />
        <FAQ />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
