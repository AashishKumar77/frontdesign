import React from "react";
// import { useNavigate } from "react-router-dom";
import pic1 from "../image/pic1.svg";
import Group9 from "../image/Group 9.svg";
import Frame from "../image/Frame.svg";
import googleplaywhite from "../image/google-play-white.svg";
import appstore from "../image/app-store.svg";
import Group11 from "../image/Group 11.svg";
import Group12 from "../image/Group 12.svg";
import iphone2 from "../image/iphone2.jpg";
// import Maskgroup from "../image/Mask group.svg";
import gotlogo from "../image/gotlogo.jpg";

function HomePage() {
  // const navigate = useNavigate();
  return (
    <div className="">
      <nav class="bg-red-500  ">
        <div class="container  ">
          <div class="flex ml-2 text-lg items-left   justify-between h-16">
            <div class=" md:flex md:items-center ">
              <a href="#" class="text-white mx-4">
                Home
              </a>
              <a href="#" class="text-white mx-4">
                About
              </a>
              <a href="#" class="text-white mx-4">
                Services
              </a>
              <a href="#" class="text-white mx-4">
                Contact
              </a>
            </div>

            <img className="  " src={gotlogo}></img>
          </div>
        </div>
      </nav>
      <div className="">
        {/* <div class="grid grid-cols-2 gap-4">
          <div className="col-md-6 pt-lg-0  p-10 d-flex justify-content-center ">
            <h1 className=" font-Raleway text-6xl font-bold ml-1">
              Nothing Is More
            </h1>
            <h2 className="my-3 font-Raleway  font-bold text-6xl">
              Important Than
              <strong className="brand-name  font-bold font-Raleway p-2 text-6xl text-red">
                Truth
              </strong>
            </h2>
            <h2 className="my-3 font-Raleway font-bold  text-6xl">
              <strong className="brand-name font-bold text-red ">
                {" "}
                In a World
              </strong>{" "}
              That Lies
            </h2>
          </div>
          <div className="col-md-6 pt-lg-0  p-10  justify-content-center flex-column">
            <img className=" mt-0 ml-0 " src={pic1} />
          </div>
        </div> */}

        <div class="grid grid-cols-2 gap-4 bg-gradient-to-b from-red-100 to-white">
          <div class="bg-gray-200">
            <div class="col-md-6 mt p-10 mt-56 justify-content-center">
              <h1 class="font-Raleway text-6xl font-bold ml-1">
                Nothing Is More
              </h1>
              <h2 class="my-3 font-Raleway font-bold text-6xl">
                Important Than
                <strong class="brand-name font-bold font-Raleway p-2 text-6xl text-red-500">
                  Truth
                </strong>
              </h2>
              <h2 class="my-3 font-Raleway font-bold text-6xl">
                <strong class="brand-name font-bold text-red-500">
                  In a World
                </strong>
                That Lies
              </h2>
            </div>
          </div>
          {/* <div class="grid grid-cols-2 md:grid-cols-1 gap-2">
            <div class="col-lg-6">
              <img src={pic1} className="max-w-full h-auto"></img>
            </div>
          </div> */}
          <div class="grid grid-cols-2 md:grid-cols-1 gap-2">
            <div class="col-lg-6">
              <img src={pic1} className="max-w-full h-auto "></img>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1  md:grid-cols-2 gap-4">
          <div className=" p-1 mt-16  ">
            <img className="  ml-20 w-72 mt-1" src={Group9} />
          </div>
          <div className=" p-9 mt-2 ">
            <div className="col-md-6 pt-5 pt-lg-0  justify-content-center ">
              <h2 className="font-inter text-6xl font-semi-bold ml-3">
                Our{" "}
                <strong className="text-red-500 font-semi-bold">mission</strong>
              </h2>
              <h2 className="my-1 p-5">
                We bring truth and transparency to a world filled with lies. Use
                our app as your tool for knowledge and equip yourself with the
                information you need to make wise decisions in any aspect of
                your life as relationships,business etc.
              </h2>
              <div className="mt-3">
                <button className="ml-5 text-white bg-red-500 rounded-full w-20 h-8">
                  Join Us
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1  mt-[-48px]  md:grid-cols-2 gap-4">
          <div className=" p-9 mt-6  ">
            <div className="col-md-6 pt-5 pt-lg-0 mt-16 justify-content-center  ">
              <h2 className="font-inter text-6xl font-semi-bold ml-3">
                How it{" "}
                <strong className="text-red-500 font-semi-bold">work</strong>
              </h2>
              <h2 className="my-1 p-5">
                We bring truth and transparency to a world filled with lies. Use
                our app as your tool for knowledge and equip yourself with the
                information you need to make wise decisions in any aspect of
                your life as relationships,business etc.
              </h2>
            </div>
            <div className="mt-3">
              <button className="ml-5 text-white bg-red-500 rounded-full w-20 h-8">
                Join Us
              </button>
            </div>
          </div>
          <div className=" mt-16   p-9 mb-12">
            <img className="  ml-18 w-96 h-full " src={Frame} />
          </div>
        </div>
      </div>
      <div className="mt-0 mt-[-48px] h-2/5">
        <div className="ml-2 text-black bg-redLight text-center p-14 font-inter text-4xl font-semi-bold ">
          Video How <strong className="text-red-500 font-xl">App work</strong>
          <div class="flex justify-center mt-16 ml-0">
            <img
              src="https://growthbusiness-production.s3.amazonaws.com/uploads/2022/10/Screen-Shot-2017-10-26-at-16.36.01.png"
              alt=" Image"
              class="w-2/4 h-70 sm:max-w-none sm:mx-lg border-solid border-4 border-offwhite"
            ></img>
          </div>
        </div>
      </div>
      <div className=" grid-lg-12 text-white font-Raleway text-4xl bg-black p-20 pt-14 font-bold mt-20 text-center ">
        <h2 className="">Download the App</h2>
        <p className="font-medium text-sm p-6">
          {" "}
          The Gate of Truth is a metaphysical structure which floats in an
          endless white expanse, with two doors that <br />
          appear like a pair of giant stone tablets with a mural engraved on
          them.
          <div class="flex justify-center mt-11 ml-18">
            <img
              src={googleplaywhite}
              alt=" Image"
              class="w-48  sm:max-w-none sm:mx-lg border-solid border-4 border-offwhite"
            ></img>
            <img
              src={appstore}
              alt=" Image"
              class="w-48 ml-6 sm:max-w-none sm:mx-lg border-solid border-4 border-offwhite"
            ></img>
          </div>
        </p>
      </div>
      <div className="col-md-5 pt-5 pt-lg-0 mt-[-48px]  justify-content-center   ">
        <h2 className="font-inter mt-24 text-center text-6xl font-semi-bold ml-3">
          User <strong className="text-red-500 font-semi-old">Stories</strong>
        </h2>
        <div class="grid grid-cols-1  mt-[-150px]  md:grid-cols-2 gap-4">
          <div className=" p-9 mt-2  ">
            <div className="col-md-6 pt-5 pt-lg-0 mt-48 justify-content-center  ">
              <h2 className="font-inter text-6xl font-semi-bold ml-3">
                Gate Of{" "}
                <strong className="text-red-500 font-semi-bold">Truths</strong>
              </h2>
              <h2 className="my-1 p-5">
                We bring truth and transparency to a world filled with lies. Use
                our app as your tool for knowledge and equip yourself with the
                information you need to make wise decisions in any aspect of
                your life as relationships,business etc.
              </h2>
            </div>
          </div>
          <div className="  p-9 mb-12 mt-[-96px">
            <img className="  ml-18 w-5/6 h-full " src={Group11} />
          </div>
        </div>
        <div class="grid grid-cols-1  md:grid-cols-2 gap-4 ">
          <div className=" p-1 mt-0  ">
            <img className=" ml-20 w-5/6 " src={Group12} />
          </div>
          <div className=" p-9 mt-24 mt-[-4px] ">
            <div className="col-md-6 pt-5 pt-lg-0  justify-content-center ">
              <h2 className="font-inter text-6xl font-semi-bold ml-3">
                Gate Of{" "}
                <strong className="text-red-500 font-semi-bold">Truths</strong>
              </h2>
              <h2 className="my-1 p-5">
                We bring truth and transparency to a world filled with lies. Use
                our app as your tool for knowledge and equip yourself with the
                information you need to make wise decisions in any aspect of
                your life as relationships,business etc.
              </h2>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1  mt-[-160px] md:grid-cols-2 gap-4">
          <div className=" p-9 mt-2  ">
            <div className="col-md-6 pt-5 pt-lg-0   mt-48 justify-content-center  ">
              <h2 className="font-inter text-6xl font-semi-bold ml-3">
                Gate Of{" "}
                <strong className="text-red-500 font-semi-bold">Truths</strong>
              </h2>
              <h2 className="my-1 p-5">
                We bring truth and transparency to a world filled with lies. Use
                our app as your tool for knowledge and equip yourself with the
                information you need to make wise decisions in any aspect of
                your life as relationships,business etc.
              </h2>
            </div>
          </div>
          <div className=" mt-8 mt-[-48px]  p-9 mb-12">
            <img className="  ml-18 w-5/6 h-full " src={Group11} />
          </div>

          <div className="   font-Inter p-12 ml-12 mt-[-56px]">
            <h2 className="font-inter text-6xl font-semi-bold ml-3">
              Create Your <br />
              <strong className="text-red-500">Own Story</strong>
            </h2>
            <h2 className="my-1 p-5">
              The Gate of Truth is a metaphysical structure which floats in an
              <br />
              endless white expanse, with two doors that appear like a pair of
              <br />
              giant stone tablets with a mural engraved on them.
            </h2>
            <h3 className="text-red ml-5 font-bold">Download the App</h3>
            <div class="flex  bg-black mt-4 ml-6 w-52">
              <img
                src={googleplaywhite}
                alt=" Image"
                class="w-24  sm:max-w-none sm:mx-lg border-solid border-2 border-offwhite"
              ></img>
              <img
                src={appstore}
                alt=" Image"
                class="w-24 ml-6 -2 sm:max-w-none sm:mx-lg border-solid border-4 border-offwhite"
              ></img>
            </div>
          </div>

          {/* </div> */}

          {/* <div className=" mt-24 p-4   relative">
            <img
              class="absolute  top-0 left-8 h-screen overflow-hidden  w-3/4 mt-[-186px] "
              src={iphone2}
            />
          </div> */}
          <div className="mt-0 p-4 relative">
            <img
              class=" top-0 ml-16 h-[calc(100vh-188px)] max-w-[75%] overflow-hidden"
              src={iphone2}
            />
          </div>
        </div>

        {/* <div className="fluid grid grid-rows-4  p-14   grid grid-cols-1 md:grid-cols-2 gap-4 ">
          <div className=" p-9 mt-2  ">
            <div className="col-md-6 pt-5 pt-lg-0 mt-2 justify-content-center  ">
              <h2 className="font-inter text-6xl font-semi-bold ml-3">
                Gate Of{" "}
                <strong className="text-red font-semi-bold">Truths</strong>
              </h2>
              <h2 className="my-1 p-5">
                The Gate of Truth is a metaphysical structure which floats in an
                endless white expanse, with two doors that appear like a pair of
                giant stone tablets with a mural engraved on them. There doesn|
                appear to be anything behind the structure, but when the doors
                open it reveals a dimension of information behind them.
              </h2>
            </div>
          </div>
          <div className=" text-white ml-1   py-1 ">
            <img className="  ml-2 w-5/6 " src={Group11} />
          </div>

          <div className="p-5   ml-3">
            <img className="  ml-2 w-5/6 py-1 " src={Group12} />
          </div>

          <div className=" p-12 ml-3">
            <div className=" p-9 mt-24  ">
              <div className="col-md-6 pt-5 pt-lg-0 mt-2 justify-content-center  ">
                <h2 className="font-inter text-6xl font-semi-bold ml-3">
                  Gate Of{" "}
                  <strong className="text-red font-semi-bold">Truths</strong>
                </h2>
                <h2 className="my-1 p-5">
                  The Gate of Truth is a metaphysical structure which floats in
                  an endless white expanse, with two doors that appear like a
                  pair of giant stone tablets with a mural engraved on them.
                  There doesn| appear to be anything behind the structure, but
                  when the doors open it reveals a dimension of information
                  behind them.
                </h2>
              </div>
            </div>
          </div>
          <div className="bg-yellow p-12 ml-3">t3</div>
          <div className="bg-green p-12 ml-3">i3</div>
          <div className="bg-green p-12 ml-3">c1</div>
          <div className="bg-yellow p-12 ml-3">m1</div>
        </div>  */}
      </div>

      <div class="  p-12 mt-32 bg-cream-500  ">
        <h2 className="p-4 ml-18 bg-cream p-6 mt-[-64px] font-Inter text-6xl">
          <strong className="text-red-500 font-semi-bold "> Still Have</strong>{" "}
          Questions ?
        </h2>

        <div className="">
          <h2 className="p-9 mt-12 ml-6 mr-5 rounded-3xl  shadow-white bg-white font-Inter text-4xl text-red-500">
            why do you need an FAQ page ?
            <p className="text-black text-xl p-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
          </h2>
          <h2 className="p-9 mt-12 ml-6 mr-5 rounded-3xl  shadow-white bg-white font-Inter text-4xl text-red-500">
            why do you need an FAQ page ?
            {/* <p className="text-black text-xl p-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p> */}
          </h2>
          <h2 className="p-9 mt-12 ml-6 mr-5 rounded-3xl  shadow-white bg-white font-Inter text-4xl text-red-500">
            why do you need an FAQ page ?
            {/* <p className="text-black text-xl p-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p> */}
          </h2>
        </div>
      </div>
      {/* footer  */}
      <footer>
        <div className="bg-red-500 p-12 flex items-center justify-center mt-1 pt-2">
          <img className=" " src={gotlogo}></img>
        </div>
        <div className="bg-red-500">
          <p>
            <ul class=" ml-12  flex list-none flex-row flex-wrap border-b-5   ">
              <li role="present">
                <a class=" ml-18  grid grid-cols-1 md:grid-cols-1 text-white  gap-4 disabled pointer-events-none my-2 block border-x-0 border-b-1 border-t-0 border-transparent  px-1 pb-3.5 pt-4 text-lg font-Inter font-medium  ml-32 leading-tight text-black hover:border-transparent hover:text-white  focus:isolate focus:border-transparent dark:text-neutral-400">
                  why us
                </a>
              </li>
              <li role="present">
                <a class=" grid grid-cols-1 md:grid-cols-1 text-white  gap-4 disabled pointer-events-none my-2 block border-x-0 border-b-1 border-t-0 border-transparent  px-1 pb-3.5 pt-4 text-lg font-Inter font-medium  ml-32 leading-tight text-black hover:border-transparent hover:text-white  focus:isolate focus:border-transparent dark:text-neutral-400">
                  services
                </a>
              </li>
              <li role="present">
                <a class=" grid grid-cols-1 md:grid-cols-1 text-white  gap-4 disabled pointer-events-none my-2 block border-x-0 border-b-1 border-t-0 border-transparent  px-1 pb-3.5 pt-4 text-lg font-Inter font-medium ml-32 leading-tight text-black hover:border-transparent hover:text-white  focus:isolate focus:border-transparent dark:text-neutral-400">
                  portfolio
                </a>
              </li>
              <li role="present">
                <a class=" grid grid-cols-1 md:grid-cols-1 text-white  gap-4 disabled pointer-events-none my-2 block border-x-0 border-b-1 border-t-0 border-transparent  px-1 pb-3.5 pt-4 text-lg font-Inter font-medium  ml-32 leading-tight text-black hover:border-transparent hover:text-white  focus:isolate focus:border-transparent dark:text-neutral-400">
                  careers
                </a>
              </li>
              <li role="present">
                <a class=" grid grid-cols-1 md:grid-cols-1 text-white  gap-4 disabled pointer-events-none my-2 block border-x-0 border-b-1 border-t-0 border-transparent  px-1 pb-3.5 pt-4 text-lg font-Inter font-medium ml-32 leading-tight text-black hover:border-transparent hover:text-white  focus:isolate focus:border-transparent dark:text-neutral-400">
                  contact
                </a>
              </li>
            </ul>
          </p>
        </div>
        <hr class="h-px my-0 bg-gray-200 border-0 dark:bg-gray-700"></hr>

        <div class="bg-red-500 text-white ">
          <ul
            class="mb-5 flex list-none flex-row flex-wrap border-b-0 pl-0 text-right"
            role="navlist"
          >
            <li role="present">
              <svg
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-9 ml-20 mt-5"
              >
                <path
                  fill="white"
                  d="M288 896h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"
                ></path>
                <path
                  fill="white"
                  d="M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"
                ></path>
                <path
                  fill="white"
                  d="M544 384h96a32 32 0 1 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64h96v-96a32 32 0 0 1 64 0v96z"
                ></path>
              </svg>
              Address
            </li>
            <li role="present">
              <svg
                width="45"
                height="45"
                viewBox="0 0 48 48"
                class="w-5 h-9 ml-20 mt-5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M44 24V9H24H4V24V39H24"
                  stroke="#333"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  fill="white"
                ></path>
              </svg>
              mail
            </li>
            <li role="present">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="w-5 h-9 ml-20 mt-5"
                viewBox="0 0 16 16"
              >
                {" "}
                <path
                  fill-rule="evenodd"
                  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM15.854.146a.5.5 0 0 1 0 .708L11.707 5H14.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v2.793L15.146.146a.5.5 0 0 1 .708 0z"
                  fill="white"
                ></path>{" "}
              </svg>
              Phone
            </li>
          </ul>
          <hr class="h-px my-2 bg-gray-200 border-1 dark:bg-gray-700"></hr>
          <div className="flex items-center justify-end mr-32 mt-12 ">
            <ul class="flex space-x-4 mb-5 flex list-none flex-row flex-wrap border-b-0 pl-0">
              <li className="bg-white rounded-full   ">
                <a href="#" class="text-gray-500  hover:text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="24"
                    fill="currentColor"
                    class="bi bi-twitter color white "
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path
                      d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
                      fill="red"
                    ></path>{" "}
                  </svg>
                </a>
              </li>
              <li className=" bg-white rounded-full ">
                <a href="#" class="text-gray-500 hover:text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="24"
                    fill="currentColor"
                    class="bi bi-facebook color white "
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path
                      d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
                      fill="red"
                    ></path>{" "}
                  </svg>
                </a>
              </li>
              <li className=" bg-white rounded-full  ">
                <a href="#" class="text-gray-500 hover:text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="18"
                    fill="currentColor"
                    class="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path
                      d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                      fill="red"
                    ></path>{" "}
                  </svg>
                </a>
              </li>

              <li className=" bg-white rounded-full  ">
                <a href="#" class="text-gray-500 hover:text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="24"
                    fill="currentColor"
                    class="bi bi-google"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path
                      d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"
                      fill="red"
                    ></path>{" "}
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default HomePage;
