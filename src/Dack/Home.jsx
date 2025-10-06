import React from "react";
import DackHeroSection from "./dackHeroSection";
import DackTyreSection from "./dackTyreSection";
import DackTyreService from "./TyreService";
import DackTyreFeature from "./DackTyreFeature";
import DackFaq from "./dackfaq";
import DackSurveySection from "./DackSurveySection";
import DackTyreMoreService from "./DackTyreMoreService";
import Footer from "./Footer";
import Header from "./Header";


const Home = () => {
  return (
   <div>
    <Header />
    <DackHeroSection />
      <DackTyreSection />
      <DackTyreService />
      <DackTyreFeature />
      <DackFaq />
      <DackSurveySection />
      <DackTyreMoreService />
      <Footer />
    </div>
  )
}

export default Home
