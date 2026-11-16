import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Results from "@/components/sections/Results";
import Doctors from "@/components/sections/Doctors";
import Testimonials from "@/components/sections/Testimonials";
import Blog from "@/components/sections/Blog";
import Booking from "@/components/sections/Booking";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Results />
        <Doctors />
        <Testimonials />
        <Blog />
        <Booking />
      </main>
      <Footer />
    </>
  );
}
