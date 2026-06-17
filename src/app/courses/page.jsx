import { Label, SearchField } from "@heroui/react";
import React, { Suspense } from "react";
import CourseCard from "../Components/Card/CourseCard";
import { getCourseData } from "@/DataActions/CourseData";

export const metadata = {
  title: "All-Courses",
  description: "Browse top courses from industry experts",
};

const CoursesPage = async () => {
  const CourseData = await getCourseData();

  return (
    <div className="container mx-auto my-12 ">
      {/* Title and search  */}
      <div className="md:flex  justify-between items-center ">
        <h1 className="text-4xl flex justify-center font-black underline underline-offset-8 decoration-2">
          All Courses Page
        </h1>
        <div className="mt-6">
          <SearchField name="search">
            <SearchField.Group>
              <SearchField.SearchIcon className="text-[#0485F7]" />
              <SearchField.Input
                className="w-52 "
                placeholder="Search Courses..."
              />
              <SearchField.ClearButton />
            </SearchField.Group>
          </SearchField>
        </div>
      </div>

      {/* All Course Card */}

      <div className="p-7 bg-[#cfc4e82e] rounded-xl mt-5 ">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 ">
          {CourseData.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
