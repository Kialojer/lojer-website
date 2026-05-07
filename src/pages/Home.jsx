import React from 'react';
import Navbar from '../components/lojer/Navbar';
import HeroSection from '../components/lojer/HeroSection';
import SolutionSection from '../components/lojer/SolutionSection';
import EcosystemSection from '../components/lojer/EcosystemSection';
import ProblemSection from '../components/lojer/ProblemSection';
import MarketSection from '../components/lojer/MarketSection';
import TokenomicsSection from '../components/lojer/TokenomicsSection';
import AIAgentsSection from '../components/lojer/AIAgentsSection';
import RoadmapSection from '../components/lojer/RoadmapSection';
import AboutFounder from '../components/lojer/AboutFounder';
import FooterSection from '../components/lojer/FooterSection';

const IMAGES = {
  heroPhone: 'https://media.base44.com/images/public/69fb893f52700de5f6c4df1e/b5ef617ec_generated_dcae646b.png',
  techBg: 'https://media.base44.com/images/public/69fb893f52700de5f6c4df1e/a5723bc7f_generated_e8a57fed.png',
  christStatue: 'https://media.base44.com/images/public/69fb893f52700de5f6c4df1e/555136383_generated_7f46e4bc.png',
  marketPhoto: 'https://media.base44.com/images/public/69fb893f52700de5f6c4df1e/98908686b_generated_2bc2d91e.png',
  aiAgents: 'https://media.base44.com/images/public/69fb893f52700de5f6c4df1e/1ea7f134d_generated_8cdde43d.png',
  ecosystemBg: 'https://media.base44.com/images/public/69fb893f52700de5f6c4df1e/8a1f432a1_generated_12743916.png',
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection heroPhoneImg={IMAGES.heroPhone} techBgImg={IMAGES.techBg} />
      <SolutionSection techBgImg={IMAGES.techBg} />
      <EcosystemSection ecosystemBgImg={IMAGES.ecosystemBg} />
      <ProblemSection marketPhotoImg={IMAGES.marketPhoto} />
      <MarketSection christStatueImg={IMAGES.christStatue} />
      <TokenomicsSection />
      <AIAgentsSection aiAgentsImg={IMAGES.aiAgents} />
      <RoadmapSection techBgImg={IMAGES.techBg} />
      
      {/* بخش درباره من */}
      <AboutFounder />
      
      <FooterSection />
    </div>
  );
}