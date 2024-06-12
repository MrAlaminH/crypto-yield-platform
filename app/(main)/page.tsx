import Hero from "@/components/main/Hero";
import Aboutus from "@/components/main/Aboutus";
import Footer from "@/components/main/Footer";
import Nav from "@/components/main/Nav";
import Benefits from "@/components/main/Benefits";
import Faq from "@/components/main/Faq";



export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col">
        <Nav/>
        <Hero />
        <Aboutus/>
        <Benefits/>
        <Faq/>
        <Footer/>
      </div>
    </main>
  );
}