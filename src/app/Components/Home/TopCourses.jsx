import { getCourseData } from '@/DataActions/CourseData';
import Link from 'next/link';
import React from 'react';
import CourseCard from '../Card/CourseCard';

const TopCourses =  async () => {

  const CourseData = await getCourseData()

  // console.log(CourseData);




    return (
      <div className="pt-20 pb-12 ">
        <h1 className="text-6xl font-black text-center mb-5">
          Our Top Courses
        </h1>
        <div className="p-7 bg-[#cfc4e82e] rounded-xl  ">
          {/* Card section */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 " >
            {
              CourseData.slice(0 ,3).map( course => <CourseCard key={course.id} course={course} ></CourseCard> )
            }
          </div>
          <Link
            className="underline font-bold hover:text-[#7190f6] flex justify-center mt-4 "
            href="/courses"
          >
            View ALL Courses
          </Link>
        </div>
      </div>
    );
};

export default TopCourses;