import React from "react";
import { Link } from "react-router-dom";

const CourseComponets = (params) => {
  const { course } = params;
  const name = course.name;

  return (
    <div className="">
      <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
        <img
          src={course.image}
          alt=""
          className="object-fill w-full rounded-md h-72 dark:bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <h2 className="text-xl font-semibold tracking-wide">
            {name.length > 10 ? name.slice(0, 30) : name}
          </h2>
          <button className="bg-pink-600 text-white py-3 px-2 rounded-xl font-mono font-bold leading-loose tracking-normal mt-3">
            <Link to={`${course.id}`}>Select Course</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseComponets;
