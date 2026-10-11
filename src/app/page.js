import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import WhoWeHelp from "@/components/WhoWeHelp";
import QuoteBanner from "@/components/QuoteBanner";
import Expertise from "@/components/Expertise";
import HowWeWork from "@/components/HowWeWork";
import Specialties from "@/components/Specialties";
import SpecialtiesList from "@/components/SpecialtiesList";
import OurOffice from "@/components/OurOffice";
import FAQ from "@/components/FAQ";
import BookCTA from "@/components/BookCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <WhoWeHelp />
        <QuoteBanner />
        <Expertise />
        <HowWeWork />
        <Specialties />
        <SpecialtiesList />
        <OurOffice />
        <FAQ />
        <BookCTA />
      </main>
      <Footer />
    </>
  );
}