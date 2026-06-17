import { getTopTeachersData } from "@/DataActions/CourseData";
import React from "react";
import Instructor from "./Instructor";

const TopInstructor = async () => {
  const instructorData = await getTopTeachersData();

  return (
    <div className="my-12">
      <div className="text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold  text-primary80 mb-3">
          Top Instructors{" "}
        </h1>
        <p className="text-xl font-bold mb-3 text-primary/80">
          Meet our top Instructor
        </p>
      </div>

      <div className="p-7 bg-primary/5 rounded-xl ">
        <div className="grid gap-4 md:grid-cols-3 ">
          {instructorData.map((instructor) => (
            <Instructor key={instructor.id} instructor={instructor} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopInstructor;
