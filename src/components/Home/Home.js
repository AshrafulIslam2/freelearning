import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (
    <div className="bg w-auto lg:flex justify-evenly items-center">
      <div className="w-[600px]">
        <h1 className="sm:text-lg lg:text-3xl text-white my-4 font-semibold">
          নিজের মত শিখুন, আত্মবিশ্বাস গড়ুন!
        </h1>
        <p className="sm:text-base lg:text-lg text-white tracking-widest leading-loose font-mono font-bold my-5">
          পছন্দের ক্যারিয়ার ট্র্যাক প্রোগ্রামে ভর্তি হয়ে বর্তমান সময়ের সবচেয়ে
          গুরুত্বপুর্ণ দক্ষতাগুলো অর্জন করুন।
        </p>
        <button
          type="btn"
          className="bg-pink-600 text-white py-3 px-2 rounded-xl font-mono font-bold leading-loose tracking-normal my-4"
        >
          <Link to="/courses">কোর্সগুলো দেখুন</Link>
        </button>
      </div>
      <div c>
        <div className="mainimage">
          <img
            className=""
            src="https://bohubrihi.com/wp-content/themes/oceanwp-ext/assets/img/home/model.png"
            alt=""
            srcset=""
          />
        </div>
        <div className="flex ">
          <img
            className="img1 absolute -bottom-8 lg:bottom-52 "
            src="https://bohubrihi.com/wp-content/themes/oceanwp-ext/assets/img/home/d-marketing.png"
            alt=""
            srcset=""
          />
          <img
            className="img2 absolute bottom-2 lg:bottom-80 animate-pulse"
            src="https://bohubrihi.com/wp-content/themes/oceanwp-ext/assets/img/home/python.png"
            alt=""
            srcset=""
          />

          <img
            className="img5 absolute bottom-32 animate-pulse"
            src="https://bohubrihi.com/wp-content/themes/oceanwp-ext/assets/img/home/html-5.png"
            alt=""
            srcset=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
