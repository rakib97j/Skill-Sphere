import CourseDetailsCard from "@/app/Components/Card/CourseDetailsCard";
import { getCourseData } from "@/DataActions/CourseData";
import { auth } from "@/lib/auth";

import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Details Page",
  description: "Best Course of bangladesh",
  icons: {
    icon: "https://cdn-icons-png.flaticon.com/512/2702/2702134.png?utm_source=chatgpt.com",
  },
};

const CoursesDetailsPage = async ({ params }) => {


// privet route info

  const session = await auth.api.getSession({
      headers : await headers()
    })

    const user =session?.user;
    if(!user){
      redirect('/login');
    }



  


    // for dynamic page

  const { id } = await params;

  const CourseData = await getCourseData();



const singleCourse = CourseData.find((course) => String(course.id) === id);


 
//


  if (!singleCourse) {
    return (
      <h1 className="p-32 text-center text-7xl font-black text-red-600">
        Course Not Found!
      </h1>
    );
  }

  return (
    <div>
      <h1 className="text-center mt-7 font-bold text-3xl">
        Course details about <span className="font-black">{singleCourse.title}</span>
      </h1>
      <div className="container mx-auto mt-14 mb-20 bg-primary/5 p-5 rounded-xl">
        <div className="">
          {
            <CourseDetailsCard
              key={singleCourse.id}
              singleCourse={singleCourse}
            />
          }
        </div>
      </div>
    </div>
  );
};

export default CoursesDetailsPage;
