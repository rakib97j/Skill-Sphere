"use server";

export const getCourseData = async () => {
  const res = await fetch(
    "https://skillsphere-server-10gx.onrender.com/courses",
  );

  const data = await res.json();

  return data;
};

export const getTopTeachersData = async () => {
  const res = await fetch(
    "https://skillsphere-server-10gx.onrender.com/teachers",
  );

  const data = await res.json();

  return data;
};