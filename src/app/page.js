
import Hero from "./Components/Home/Hero/Hero";
import LearningTips from "./Components/Home/LearningTips";
import TopCourses from "./Components/Home/TopCourses";
import TopInstructor from "./Components/Home/TopInstructor";
import Upcoming from "./Components/Home/Upcoming";



export default function Home() {
  return (
    <div className="flex flex-col flex-1 font-sans">
      
      <Hero />

      <div className="container mx-auto">
        <TopCourses />
        <LearningTips/>
        <TopInstructor/>
        <Upcoming/>        
        
      </div>

      
    </div>
  );
}
