"use client"

import { Button, Card, Chip } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import toast from 'react-hot-toast';



const upcomingCourses = [
  {
    id: 1,
    title: "AI Engineering with LangChain",
    category: "Artificial Intelligence",
    release: "July 2026",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&h=450&q=80",
  },
  {
    id: 2,
    title: "Flutter Mobile App Development",
    category: "Mobile Development",
    release: "August 2026",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&h=450&q=80",
  },
  {
    id: 3,
    title: "DevOps & Kubernetes Bootcamp",
    category: "Cloud & DevOps",
    release: "September 2026",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&h=450&q=80",
  },
];


const handleNotify = () => {
 toast.success(
   "Course enrollment hasn't started yet. We'll notify you as soon as registration opens. Stay connected with SkillSphere!",
   {
     style: {
       border: "1px solid [#6366F1]",
       padding: "16px",
       color: "#6366F1",
     },
     iconTheme: {
       primary: "#6366F1",
       secondary: "#FFFAEE",
     },
   },
 );
};


const Upcoming = () => {


    

    return (
      <div>
        <section className="my-20  ">
          <div className="text-center mb-10">
            <Chip color="primary" variant="flat">
              Coming Soon
            </Chip>

            <h2 className="text-4xl font-black mt-4">Upcoming Courses</h2>

            <p className="text-foreground/70 mt-3 max-w-2xl mx-auto">
              Explore our upcoming premium courses and stay ahead with the
              latest industry skills.
            </p>
          </div>

          <div className="grid md:grid-cols-2 mx-3 lg:grid-cols-3 gap-6    ">
            {upcomingCourses.map((course) => (
              <Card
                key={course.id}
                className="border border-default-200 hover:-translate-y-1 transition-all duration-300   border-border bg-card text-card-foreground "
                // className="group overflow- rounded-xl border border-border bg-card text-card-foreground shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-500"
              >
                <div className="h-52">
                  <Image
                    src={course.image}
                    alt={course.title}
                    // fill
                    width={2500}
                    height={2500}
                    priority
                    className="object-cover rounded-2xl"
                  />
                </div>

                <Card className=" bg-card text-card-foreground ">
                  <Chip
                    size="sm"
                    color="primary"
                    className="w-fit"
                    variant="flat"
                  >
                    {course.category}
                  </Chip>

                  <h3 className="text-xl font-bold mt-3">{course.title}</h3>

                  <p className="text-foreground/70 mt-2">
                    Release: {course.release}
                  </p>

                  <Button
                    color="primary"
                    variant="shadow"
                    className="mt-4"
                    fullWidth
                    onPress={handleNotify}
                  >
                    Notify Me
                  </Button>
                </Card>
              </Card>
            ))}
          </div>
        </section>
      </div>
    );
};

export default Upcoming;