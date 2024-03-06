import Image from "next/image";
import React from "react";
import SignImage from "@/public/icons8-wallet-50.png";
import Chart from "@/public/chart.jpg";

const SignIn = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="flex flex-col items-center justify-center lg:w-[300px] xl:w-[600px] p-6 sm:[200px]">
          <div className="flex items-center justify-center h-[50px] w-[250px] gap-5">
            <Image src={SignImage} alt="sign" className="" />
            <div className="flex w-full ">
              <h1 className="font-semibold ">Customer Account</h1>
            </div>
          </div>
          <div className="mt-4 flex flex-col items-">
            <div className="w-full flex-1 mt-8">
              <div className="flex flex-col items-center">
                <h1 className="text-3xl font-bold">Create</h1>
                <div className="flex pt-3 space-x-2">
                  <h1 className="text-3xl font-bold text-cyan-400">
                    Customer Portal
                  </h1>
                  <div className="flex">
                    {" "}
                    <h1 className="text-3xl font-bold">account</h1>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 mx-auto max-w-xs mt-5 ">
                <div className="flex flex-col space-y-4">
                  <h1>Username</h1>
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="text"
                    placeholder="Enter your username"
                  />
                </div>
                <div className="flex flex-col ">
                  <h1>Account Number</h1>
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="text"
                    placeholder="Enter your account number"
                  />
                </div>
                <div className=" flex flex-col">
                  <h1>Email Address</h1>
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="email"
                    placeholder="abc@gmail.com"
                  />
                </div>
                <div className=" flex flex-col">
                  <h1>Phone Number</h1>
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="tel"
                    placeholder="0123456789"
                  />
                </div>
                <button className="mt-2 tracking-wide font-semibold bg-cyan-400 text-white-500 w-full py-4 rounded-lg hover:bg-cyan-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                  <span className="ml-">Sign In</span>
                </button>
                <p className="mt-6 text-sm text-gray-600 text-center">
                  Already have account?
                  <a
                    href="/login"
                    className="border-b border-cyan-400 border-dotted text-cyan-400"
                  >
                    Login
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-cyan-400 text-center hidden lg:flex">
          <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat">
            <Image src={Chart} alt="s" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
