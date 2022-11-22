import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import CourseComponets from "./CourseComponets";

const Courses = () => {
  const courses = useLoaderData();
  console.log(courses);
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-4">
        {courses.map((course) => (
          <div className=" ml-3 mr-6 ">
            <button className="bg-pink-900 text-white font-mono font-bold my-3  rounded-xl  w-full py-3">
              <Link to={`${course.id}`}>
                <span>{course.id}</span> {course.name}
              </Link>
            </button>
          </div>
        ))}
      </div>
      <div className=" col-span-7 grid grid-cols-2 gap-4 ">
        {courses.map((course) => (
          <CourseComponets key={course.id} course={course}></CourseComponets>
        ))}
      </div>
    </div>
  );
};

export default Courses;
