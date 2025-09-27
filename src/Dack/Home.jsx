import React from "react";
import DackHeroSection from "./dackHeroSection";
import DackTyreSection from "./dackTyreSection";
import DackTyreService from "./TyreService";
import DackTyreFeature from "./DackTyreFeature";
import DackFaq from "./dackfaq";
import DackSurveySection from "./DackSurveySection";
import DackTyreMoreService from "./DackTyreMoreService";


const Home = () => {
  return (
   <div>
    <DackHeroSection />
      <DackTyreSection />
      <DackTyreService />
      <DackTyreFeature />
      <DackFaq />
      <DackSurveySection />
      <DackTyreMoreService />
    </div>
  )
}

export default Home
