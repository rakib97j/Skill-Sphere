import CourseDetailsCard from "@/app/Components/Card/CourseDetailsCard";
import { getCourseData } from "@/DataActions/CourseData";

const CoursesDetailsPage = async ({ params }) => {
  const { id } = await params;

  const CourseData = await getCourseData();



const singleCourse = CourseData.find((course) => String(course.id) === id);


 
//   console.log("id:", id);
//   console.log("CourseData:", CourseData);
// console.log(CourseData[0]);



  if (!singleCourse) {
    return (
      <h1 className="p-32 text-center text-7xl font-black text-red-600">
        Course Not Found!
      </h1>
    );
  }

  return (
    <div className="container mx-auto my-20 bg-primary/5 p-5 rounded-xl">
      <div>
        {
          CourseData.map((singleData) => <CourseDetailsCard key={singleData.id} singleData={singleData} /> )
        }
      </div>
    </div>
  );
};

export default CoursesDetailsPage;
