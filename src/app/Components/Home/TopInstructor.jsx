import { getTopTeachersData } from '@/DataActions/CourseData';
import React from 'react';

const TopInstructor = async() => {


    const instructorData = await getTopTeachersData()


    return (
      <div>
        <h1 className="text-3xl md:text-5xl font-extrabold  text-primary">
          Top Instructors{" "}
        </h1>

        <div></div>
      </div>
    );
};

export default TopInstructor;