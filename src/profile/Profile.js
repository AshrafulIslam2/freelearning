import React, { useContext } from "react";
import { useState } from "react";
import { AuthContexts } from "../components/UserContext/UserContext";

const Profile = () => {
  const { Duser, uProfile } = useContext(AuthContexts);
  const [name, setName] = useState(Duser.displayName);
  const [Photo, setPhoto] = useState(Duser.photoURL);
  const [successful, SetSuccessful] = useState("");
  const HandleProfile = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const name = form.name.value;
    setName(name);
    const photourl = form.photourl.value;
    setPhoto(photourl);
    console.log(email, name, photourl);
    const profile = {
      displayName: name,
      photoURL: photourl,
    };
    uProfile(profile)
      .then(() => {
        // Profile updated!
        // ...
      })
      .catch((error) => {
        // An error occurred
        // ...
      });
    SetSuccessful("Submitted successfully");
  };
  return (
    <div>
      <section className="p-6 text-gray-100">
        <form
          novalidate=""
          className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow bg-gray-900 ng-untouched ng-pristine ng-valid"
          onSubmit={HandleProfile}
        >
          <h2 className="w-full text-3xl font-bold leading-tight">
            Profile Information
          </h2>
          <div>
            <label for="name" className="block mb-1 ml-1">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              defaultValue={name}
              required=""
              className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-gray-800"
            />
          </div>
          <div>
            <label for="email" className="block mb-1 ml-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Your email"
              defaultValue={Duser?.email}
              readOnly
              required=""
              className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-gray-800"
            />
          </div>
          <div>
            <label for="photourl" className="block mb-1 ml-1">
              PhotoURL
            </label>
            <input
              id="photourl"
              type="text"
              name="photourl"
              defaultValue={Photo}
              placeholder="Your Photo Url"
              className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-gray-800"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 bg-violet-400 focus:ring-violet-400 hover:ring-violet-400 text-gray-900"
            >
              Submit
            </button>
          </div>
          <h1 className="text-green-600">{successful}</h1>
        </form>
      </section>
    </div>
  );
};

export default Profile;
