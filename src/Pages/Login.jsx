import React from "react";
import Logingform from "../Component/Auth/Loginform";

const Login = () => {
  return (
    <div className="  justify-center  flex flex-col items-center  ">
      <div className="lg:w-[40%] bg-slate-800/10 m-8  border-2  border-green-950 rounded-md p-8">
        {" "}
        <h1 className="text-4xl text-black/85 mt-5 poppins-bold">
          Welcome Back!
        </h1>
        <Logingform />
      </div>
    </div>
  );
};

export default Login;
