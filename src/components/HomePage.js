import React from "react";
// import { useNavigate } from "react-router-dom";
import pic1 from "../image/pic1.svg";

function HomePage() {
  // const navigate = useNavigate();
  return (
    <div className="offwhite">
      <nav class="bg-red  ">
        <div class="container  ">
          <div class="flex ml-2 text-lg items-left justify-between h-16">
            <div class=" md:flex md:items-center">
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
          </div>
        </div>
      </nav>

      <div className="bg-offwhite">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="bg-offwhite  font-Raleway p-9 lg:text-xl   sm:px-16 lg:px-24 ">
            <div className="col-md-6 pt-5 pt-lg-0  d-flex justify-content-center flex-column">
              <h1 className=" font-Raleway text-5xl mt-48  font-bold ml-1">
                Nothing Is More
              </h1>
              <h2 className="my-3 font-Raleway  font-bold text-5xl">
                Important Than
                <strong className="brand-name  font-bold font-Raleway p-2 text-4xl text-red">
                  Truth
                </strong>
              </h2>
              <h2 className="my-3 font-Raleway font-bold  text-5xl">
                <strong className="brand-name font-bold text-red ">
                  {" "}
                  In a World
                </strong>{" "}
                That Lies
              </h2>
            </div>
          </div>
          <div class="  p-2 mt-0 mt-0 ">
            <img
              className="w-auto h-auto ml-20 mt-0 bg-offwhite"
              src={pic1}
            ></img>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 bg-offwhite">
          <div className="bg-yellow p-9 mt-6 ">03</div>
          <div className=" p-9 mt-6 ">
            <div className="col-md-6 pt-5 pt-lg-0  justify-content-center ">
              <h2 className="font-inter text-4xl font-semi-bold ml-3">
                Our <strong className="text-red font-semi-bold">mission</strong>
              </h2>
              <h2 className="my-1 p-5">
                We bring truth and transparency to a world filled with lies. Use
                our app as your tool for knowledge and equip yourself with the
                information you need to make wise decisions in any aspect of
                your life as relationships,business etc.
              </h2>
              <div className="mt-3">
                <button className="ml-5 text-white bg-red rounded-full w-20 h-8">
                  Join Us
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 bg-offwhite">
          <div className=" p-9 mt-5  ">
            <div className="col-md-6 pt-5 pt-lg-0  justify-content-center  ">
              <h2 className="font-inter text-4xl font-semi-bold ml-3">
                How it <strong className="text-red font-semi-bold">work</strong>
              </h2>
              <h2 className="my-1 p-5">
                We bring truth and transparency to a world filled with lies. Use
                our app as your tool for knowledge and equip yourself with the
                information you need to make wise decisions in any aspect of
                your life as relationships,business etc.
              </h2>
            </div>
            <div className="mt-3">
              <button className="ml-5 text-white bg-red rounded-full w-20 h-8">
                Join Us
              </button>
            </div>
          </div>
          <div className="bg-brown mt-8 p-9 ">06</div>
        </div>
      </div>
      <div className="mt-0 h-2/5">
        <div className="ml-2 text-black bg-red3 text-center p-14 font-inter text-4xl font-semi-bold ">
          Video How <strong className="text-red font-xl">App work</strong>
          <div class="flex justify-center mt-16 ml-0">
            <img
              src="https://growthbusiness-production.s3.amazonaws.com/uploads/2022/10/Screen-Shot-2017-10-26-at-16.36.01.png"
              alt=" Image"
              class="w-2/4 h-70 sm:max-w-none sm:mx-lg border-solid border-4 border-offwhite"
            ></img>
          </div>
        </div>
      </div>
      <div className=" grid-lg-12 bg-yellow p-20 pt-32 mt-15 text-center ">
        app
      </div>
      <div className="col-md-6 pt-5 pt-lg-0 bg-offwhite justify-content-center  ">
        <h2 className="font-inter text-center text-4xl font-semi-bold ml-3">
          User <strong className="text-red font-semi-old">Stories</strong>
        </h2>

        <div className="fluid grid grid-rows-4  p-14 h-4/5  grid grid-cols-1 md:grid-cols-2 gap-4 ">
          <div className=" p-5 mt-0 py-1  ">
            <div className="col-md-6 pt-5 pt-lg-0  justify-content-center  ">
              <h2 className="font-inter text-4xl font-semi-bold ml-3">
                Gate of{" "}
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
          <div className="bg-black text-white ml-3">i1</div>
          <div className="bg-green p-12 ml-3">i2</div>
          <div className="bg-brown p-12 ml-3">t2</div>
          <div className="bg-yellow p-12 ml-3">t3</div>
          <div className="bg-green p-12 ml-3">i3</div>
          <div className="bg-green p-12 ml-3">c1</div>
          <div className="bg-yellow p-12 ml-3">m1</div>
        </div>
      </div>
      <div class="bg-yellow  p-8  ">
        <h2 className="p-4 ml-32 ">still have</h2>

        <div className="bg-yellow ">
          {/* <div className="grid grid-rows-3 ml-48 bg-red w-3/4"> */}
          <h2 className="p-9 mt-12 ml-5 mr-5 rounded-lg bg-green">Why need</h2>
          <h2 className="p-9 mt-12 ml-5 mr-5 rounded-lg bg-green">Why need</h2>
          <h2 className="p-9 mt-12 ml-5 mr-5 mb-9 rounded-lg bg-green">
            Why need
          </h2>
        </div>
      </div>
      {/* </div> */}

      {/* footer  */}
      <div className="bg-green  p-2 ">
        <div className="bg-brown p-12 text-center mt-1 pt-2">
          <h2 className="ml-28">logo</h2>
          <p>
            <ul
              class="mb-5 flex list-none flex-row flex-wrap border-b-5   "
              role="navlist"
            >
              <li role="present">
                <a class=" grid grid-cols-1 md:grid-cols-1 gap-4 disabled pointer-events-none my-2 block border-x-0 border-b-1 border-t-0 border-transparent  px-1 pb-3.5 pt-4 text-sm font-serif  ml-32 leading-tight text-black hover:border-transparent hover:text-white  focus:isolate focus:border-transparent dark:text-neutral-400">
                  why us
                </a>
              </li>
              <li role="present">
                <a class=" grid grid-cols-1 md:grid-cols-1 gap-4 disabled pointer-events-none my-2 block border-x-0 border-b-1 border-t-0 border-transparent  px-1 pb-3.5 pt-4 text-sm font-serif  ml-32 leading-tight text-black hover:border-transparent hover:text-white  focus:isolate focus:border-transparent dark:text-neutral-400">
                  services
                </a>
              </li>
              <li role="present">
                <a class=" grid grid-cols-1 md:grid-cols-1 gap-4 disabled pointer-events-none my-2 block border-x-0 border-b-1 border-t-0 border-transparent  px-1 pb-3.5 pt-4 text-sm font-serif  ml-32 leading-tight text-black hover:border-transparent hover:text-white  focus:isolate focus:border-transparent dark:text-neutral-400">
                  portfolio
                </a>
              </li>
              <li role="present">
                <a class=" grid grid-cols-1 md:grid-cols-1 gap-4 disabled pointer-events-none my-2 block border-x-0 border-b-1 border-t-0 border-transparent  px-1 pb-3.5 pt-4 text-sm font-serif  ml-32 leading-tight text-black hover:border-transparent hover:text-white  focus:isolate focus:border-transparent dark:text-neutral-400">
                  careers
                </a>
              </li>
              <li role="present">
                <a class=" grid grid-cols-1 md:grid-cols-1 gap-4 disabled pointer-events-none my-2 block border-x-0 border-b-1 border-t-0 border-transparent  px-1 pb-3.5 pt-4 text-sm font-serif  ml-32 leading-tight text-black hover:border-transparent hover:text-white  focus:isolate focus:border-transparent dark:text-neutral-400">
                  contact
                </a>
              </li>
            </ul>
          </p>
        </div>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
        {/* <div class="bg-red p-4">Row 1, Column 1</div>
        <div class="bg-green p-4">Row 1, Column 2</div> */}
        <div class="bg-black text-white p-4">
          <ul
            class="mb-5 flex list-none flex-row flex-wrap border-b-0 pl-0 text-right"
            role="navlist"
          >
            <li role="present">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                class="w-5 h-9 ml-28 mt-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                ></path>
              </svg>
              Address
            </li>
            <li role="present">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                class="w-5 h-9 ml-24 mt-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
                ></path>
              </svg>
              mail
            </li>
          </ul>
        </div>
        <div class="bg-blue p-4 flex flex-row-reverse ...">
          <ul
            class="mb-5 flex list-none flex-row flex-wrap border-b-0 pl-0  text-right"
            role="navlist"
          >
            <li role="present">
              <svg
                class="w-6 h-6 mt-8 mr-12 text-blue-500 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
              </svg>
            </li>
            <li role="present">
              <svg
                class="w-6 h-6 mt-8 mr-12 text-blue-300 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default HomePage;
