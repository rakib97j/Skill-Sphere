import React from "react";
import CourseCard from "../Components/Card/CourseCard";
import { getCourseData } from "@/DataActions/CourseData";
import Search from "../Components/Search/Search";

export const metadata = {
  title: "All-Courses",
  description: "Browse top courses from industry experts",

  icons: {
    icon: "https://cdn-icons-png.flaticon.com/512/2702/2702134.png?utm_source=chatgpt.com",
  },
};

const CoursesPage = async (props) => {
  const searchParams = await props.searchParams;

  const query = searchParams?.query?.toLowerCase() || "";

  const CourseData = await getCourseData();

  const filteredCourses = query
    ? CourseData.filter((course) => {
        const matchesTitle = course.title.toLowerCase().includes(query);
        const matchesCategory = course.category?.toLowerCase().includes(query);

        return matchesTitle || matchesCategory;
      })
    : CourseData;

  return (
    <div className="container mx-auto my-12 ">
      {/* Title and search  */}
      <div className="md:flex  justify-between items-center ">
        <h1 className="text-4xl flex justify-center font-black underline underline-offset-8 decoration-2">
          Explore Courses
        </h1>
        <div className="mt-6">
          <React.Suspense
            fallback={
              <div className="w-52 h-10 bg-gray-200 animate-pulse rounded-md" />
            }
          >
            <Search />
          </React.Suspense>
        </div>
      </div>

      {/* All Course Card */}

      <div className="p-7 bg-primary/5 rounded-xl mt-5 ">
        {filteredCourses.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-2   lg:grid-cols-3 ">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="text-center py-10 text-xl font-medium text-gray-500">
            No courses found
          </div>
        )}
      </div>
    </div>
  );
};

export default CoursesPage;
