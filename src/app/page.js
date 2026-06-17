import CourseCard from "./Components/Card/CourseCard";
import Hero from "./Components/Home/Hero/Hero";
import TopCourses from "./Components/Home/TopCourses";
import CoursesPage from "./courses/page";


export default function Home() {
  return (
    <div className="flex flex-col flex-1 font-sans">
      {/* Hero is full-width — outside the constrained wrapper */}
      <Hero />

      <div className="container mx-auto px-6">
        <TopCourses />
        
      </div>

      
    </div>
  );
}
