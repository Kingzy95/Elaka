import {Navbar} from "@/components/navbar";
import Organization from "@/components/organization";
import DevelopmentSection from "@/components/development";
import TechnologyApproach from "@/components/technology";
import TrustedLeaders from "@/components/trusted";
import WorkflowImprovement from "@/components/workflow";
import Footer from "@/components/footer";
import {HeroScroll} from "@/components/containerScroll";
import Hero from "@/components/hero";

export default function Home() {
  return (
      <main className="min-h-screen bg-white selection:bg-primary/10 selection:text-primary dark:bg-gray-900">
          <Navbar />
          <HeroScroll />
          <Organization />
          <DevelopmentSection />
          <TechnologyApproach />
          <TrustedLeaders />
          <WorkflowImprovement />
          <Footer />
      </main>
  );
}
