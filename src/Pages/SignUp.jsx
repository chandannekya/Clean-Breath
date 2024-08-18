import React from "react";
import Signupform from "../Component/Auth/Signupform";
import Loader from "../Component/Loader";
import { useSelector } from "react-redux";

const SignUp = () => {
  // Selecting the loading state from the Redux store
  const loading = useSelector((state) => state.auth.loading);

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {loading ? (
        <Loader />
      ) : (
        <div className="bg-slate-800/10 m-8 lg:max-w-[40%] border-2 border-green-950 rounded-md p-8 text-left">
          <h1 className="text-black/85 text-3xl poppins-bold">
            Join Clean Breath: <br /> Plant for a Healthier Tomorrow!
          </h1>
          <p className="poppins-regular text-black/60">
            Welcome to Clean Breath! We're on a mission to help you improve air
            quality by planting the right trees and plants. By signing up, you
            become part of a community dedicated to creating a cleaner,
            healthier environment for everyone.
          </p>
          <Signupform />
        </div>
      )}
    </div>
  );
};

export default SignUp;
