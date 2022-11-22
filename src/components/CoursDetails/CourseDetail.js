import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaChild, FaDisease } from "react-icons/fa";
import { jsPDF } from "jspdf";

const CourseDetail = () => {
  const coursesDetails = useLoaderData();
  console.log(coursesDetails);
  const { instructor, rating, coursesid } = coursesDetails;
  const PdfDownloder = (name, pname) => {
    console.log();
    const doc = new jsPDF();
    doc.text(` course name :${name} \n Publisher Name: ${pname}  `, 10, 10);
    doc.save("course.pdf");
  };
  return (
    <div className="grid lg:grid-cols-12 bg-slate-100 ">
      <div className="col-span-7 ">
        <div className="flex flex-col">
          <h1 className="text-2xl  mt-2 text-center font-mono font-extrabold text-black">
            {coursesDetails.title}
          </h1>
          <img
            src={coursesDetails.thumbnail_url}
            alt=""
            srcset=""
            className="my-4 mx-4 rounded-xl"
          />
        </div>
        <div className="px-4">
          <div className="flex justify-between">
            <div className="font-mono mx-2 font-bold">
              <h1> Instructor Name: {instructor.name}</h1>
              <h1>Publish Date {instructor.published_date}</h1>
            </div>
            <div className="font-mono mx-2 font-bold flex ">
              <h1 className="flex items-center mr-3">
                Total_purchase <FaChild className="text-blue-700" />{" "}
                {coursesDetails.Total_purchase}
              </h1>
              <h1 className=" flex items-center">
                Rating
                <FaDisease className="text-yellow-400 mx-1" /> {rating.number}
              </h1>
            </div>
          </div>
          <h1 className="text-center text-4xl my-5 font-mono font-extrabold ">
            {" "}
            এই কোর্স থেকে কি কি শিখব?
          </h1>
          <h1 className="leading-loose tracking-widest font-lg mt-3 mx-2">
            {coursesDetails.details}
          </h1>
        </div>
      </div>
      <div className="col-span-4  flex justify-center  ">
        <div className="px-2">
          <h1 className="text-2xl bg-gray-600 px-2 pt-3 mt-3 rounded-t text-white font-bold">
            এই কোর্সের ভেতরে যা যা রয়েছে
          </h1>
          <div className="grid  bg-gray-600 text-blue-50  tracking-widest leading-loose font-extrlight  px-3 py-4 lg:grid-cols-2  ">
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
          <div className="flex bg-gray-600 py-3 px-2  rounded-b ">
            <div className="mx-1">
              <button className="bg-pink-600 text-white  py-2 px-1  rounded-xl font-bold">
                <Link to={`/checkout/${coursesid}`}>এখনি ভর্তি হোন</Link>
              </button>
            </div>
            <div>
              <button
                className="bg-pink-600 text-white  py-2 px-1 rounded-xl font-semibold"
                onClick={() => {
                  PdfDownloder(
                    coursesDetails.title,
                    instructor.name,
                    instructor.published_date
                  );
                }}
              >
                কোর্স ডিটেইল ডাউনলোড করুন
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
