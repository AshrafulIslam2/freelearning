import React from "react";
import { useLoaderData } from "react-router-dom";
const Cheackout = () => {
  const coursesDetails = useLoaderData();
  return (
    <div>
      <div className="col-span-4  flex justify-center  ">
        <div className="px-2">
          <h1 className="text-2xl bg-gray-600 px-2 pt-3 mt-3 pb-3 rounded-t text-white font-bold text-center">
            এই কোর্সের নাম
          </h1>
          <h1 className="text-2xl bg-gray-600 px-2 pt-3 mt-3 rounded-t text-white font-bold">
            {coursesDetails.title}
          </h1>
          <div className="grid  bg-gray-600 text-blue-50  tracking-widest leading-loose font-extrlight text-center  px-3 py-4 lg:grid-cols-2  ">
            <div>
              <h1>Approx. 10 Hours</h1>
            </div>
            <div>
              <h1>88 Students</h1>
            </div>
            <div>
              <h1>Basic</h1>
            </div>
            <div>
              <h1> Mentor Support</h1>
            </div>
            <div>
              <h1>Language Bengali</h1>
            </div>
            <div>
              <h1> ractice Problems</h1>
            </div>
            <div>
              <h1>Lifetime Access</h1>
            </div>
            <div>
              <h1>Course Certificate</h1>
            </div>
          </div>
          <div className="bg-gray-600 flex py-3 justify-center text-white font-bold font-mono lg:text-2xl">
            <h1>কোর্সের মূল্য</h1>
            <h1>৳ ১,২০০</h1>
          </div>
          <div className=" bg-gray-600 py-3 px-2  rounded-b ">
            <div className="flex justify-center items-center">
              <button className="bg-pink-600 text-white  py-2 px-1 rounded-xl font-semibold">
                পেমেন্ট এর জন্যে ক্লিক করুন
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cheackout;
