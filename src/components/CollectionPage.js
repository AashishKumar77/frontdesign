import React from "react";
import { useNavigate } from "react-router-dom";
//import n from "../image/n.jpg";

function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="bg-red3">
      <header className="bg-red ">
        <nav>
          <ul
            class="mb-5 flex list-none flex-row flex-wrap border-b-0 pl-0 text-right"
            role="navlist"
          >
            <li role="present">
              <a
                class="disabled pointer-events-none my-2 block border-x-0 border-b-1 border-t-0 border-transparent  px-7 pb-3.5 pt-4 text-sm font-serif uppercase leading-tight text-white hover:border-transparent hover:text-white  focus:isolate focus:border-transparent dark:text-neutral-400"
                data-te-toggle="pill"
                data-te-target="#tabs-home"
                data-te-nav-active
                role="tab"
                aria-controls="tabs-home"
                aria-selected="true"
              >
                Home
              </a>
            </li>
            <li role="present">
              <a
                href="#"
                class="focus:border-transparent my-2 block border-x-0 border-b-1 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-sm font-serif uppercase leading-tight text-white hover:isolate hover:text-white hover:border-transparent  focus:isolate data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
                data-te-toggle="pill"
                data-te-target="#tabs-profile"
                role="tab"
                aria-controls="tabs-profile"
                aria-selected="false"
              >
                Collections
              </a>
            </li>
            <li role="present">
              <a
                class="my-2 block border-x-0 border-b-1 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-sm font-serif uppercase leading-tight text-white hover:isolate  hover:text-white hover:border-transparent focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
                data-te-toggle="pill"
                data-te-target="#tabs-messages"
                role="tab"
                aria-controls="tabs-messages"
                aria-selected="false"
              >
                Reviews
              </a>
            </li>
            <li role="present">
              <a
                class="my-2 block border-x-0 border-b-1 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-sm font-serif uppercase leading-tight text-white hover:isolate hover:border-transparent hover:text-white focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
                data-te-toggle="pill"
                data-te-target="#tabs-contact"
                role="tab"
                aria-controls="tabs-contact"
                aria-selected="false"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <div>
        {/* <div class="grid grid-rows-2 ">
          <div className="flex row-span-3 col-span-2  text-center justify-center ">
            <h2
              className="decoration-8 body-font  font-raleway not-italic text-6xl font-bold
"
            >
              Nothing Is More Important
              <h3 className="text-red"> Truth In a World</h3> That Lies.
            </h2>
          </div>
          <div>02</div>
        </div> */}
        <div class="grid lg:grid-rows-3 grid-flow-col lg:gap-4 lg:p-2 md:grid-rows-3 grid-flow-col md:gap-4 md:p-2 sm:gap-4 sm:p-2 sm:grid-rows-1 grid-flow-col sm:gap-4 sm:p-2 xs:gap-4 xs:p-2 xs:grid-rows-2 grid-flow-col xs:gap-4 sm:p-2">
          <div class="row-span-3 col-span-7 bg-black">01</div>
          <div class="row-span-3 col-span-5 bg-green-800 ">02</div>
        </div>
        <div class="grid gap-4 grid-cols-2 bg-white">
          <div>03</div>
          <div className=" py-10">
            <h2 className="text-4xl px-6">
              <b>
                Our
                <strong className="text-red text-4xl font-inter font-semi-bold">
                  {" "}
                  mission ----
                </strong>{" "}
              </b>
            </h2>
            <h4 className="p-8 font-inter">
              We bring truth and transparency to a world filled with lies.Use
              our app your tool knowledge and equip yourself with the
              information you need to make wise decisions in any aspect of your
              life as relationships,business etc.
            </h4>
            <button class=" w-15 bg-red hover:bg-transparent-700 text-white font-bold py-3 px-8 ml-5 rounded-full">
              Join us
            </button>
          </div>
        </div>
        <div class="grid gap-4 grid-cols-2 bg-white">
          <div className="bg-white">
            <h2 className="text-4xl  px-9  text-left">
              <b>
                How it
                <strong className="text-red text-4xl font-semi-bold">
                  {" "}
                  Work ----
                </strong>{" "}
              </b>
            </h2>
            <h4 className="p-8 font-inter not-italic">
              We bring truth and transparency to a world filled with lies.Use
              our app your tool knowledge and equip yourself with the
              information you need to make wise decisions in any aspect of your
              life as relationships,business etc.
            </h4>
            <button class=" w-15 bg-red hover:bg-transparent-700 text-white font-bold py-3 px-8 ml-5 rounded-full">
              Join us
            </button>
          </div>
          <div>06</div>
        </div>
      </div>
      <div className="bg-red3">
        <h2 className="text-4xl px-8 py-10 text-center">
          <b>
            Video How
            <strong className="text-red text-4xl font-semi-bold">
              App Work ----
            </strong>
          </b>
        </h2>
        <div className="flex justify-center items-center">
          <img
            className=" ml-50 mr-5 h-2/6 w-2/4 "
            src=" https://growthbusiness-production.s3.amazonaws.com/uploads/2022/10/Screen-Shot-2017-10-26-at-16.36.01.png"
          ></img>
        </div>
      </div>
      <div className="bg-black w-full h-56 mt-40">
        <h3 className=" font-inter text-white text-4xl px-8 py-10 text-center">
          Download the App
        </h3>
      </div>
    </div>

    // <section className="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
    //   <ul
    //     class="mb-5 flex list-none flex-row flex-wrap border-b-0 pl-0"
    //     role="navlist"
    //   >
    //     <li role="present">
    //       <a
    //         class="disabled pointer-events-none my-2 block border-x-0 border-b-2 border-t-0 border-transparent  px-7 pb-3.5 pt-4 text-m font-medium uppercase leading-tight text-Amber hover:border-transparent hover:text-white  focus:isolate focus:border-transparent dark:text-neutral-400"
    //         data-te-toggle="pill"
    //         data-te-target="#tabs-home"
    //         data-te-nav-active
    //         role="tab"
    //         aria-controls="tabs-home"
    //         aria-selected="true"
    //         onClick={navigate("/")}
    //       >
    //         Home
    //       </a>
    //     </li>
    //     <li role="present">
    //       <a
    //         class="focus:border-transparent my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-m font-medium uppercase leading-tight text-Amber hover:isolate hover:text-white hover:border-transparent  focus:isolate data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
    //         data-te-toggle="pill"
    //         data-te-target="#tabs-profile"
    //         role="tab"
    //         aria-controls="tabs-profile"
    //         aria-selected="false"
    //         onClick={navigate("/collection")}
    //       >
    //         Collections
    //       </a>
    //     </li>
    //     <li role="present">
    //       <a
    //         // href="#tabs-messages"
    //         class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-m font-medium uppercase leading-tight text-Amber hover:isolate  hover:text-white hover:border-transparent focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
    //         data-te-toggle="pill"
    //         data-te-target="#tabs-messages"
    //         role="tab"
    //         aria-controls="tabs-messages"
    //         aria-selected="false"
    //       >
    //         Reviews
    //       </a>
    //     </li>
    //     <li role="present">
    //       <a
    //         // href="#tabs-contact"
    //         class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-m font-medium uppercase leading-tight text-Amber hover:isolate hover:border-transparent hover:text-white focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
    //         data-te-toggle="pill"
    //         data-te-target="#tabs-contact"
    //         role="tab"
    //         aria-controls="tabs-contact"
    //         aria-selected="false"
    //       >
    //         Contact
    //       </a>
    //     </li>
    //   </ul>

    //   <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
    //     <h1 className="mb-4 text-2xl font-extrabold tracking-tight leading-none text-white md:text-2xl lg:text-5xl">
    //       Explore Music
    //     </h1>
    //     <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
    //       “Music gives a soul to the universe, wings to the mind, flight to the
    //       imagination, and life to everything.” – Plato
    //     </p>
    //     <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
    //       <a className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
    //         Get started
    //         <svg
    //           aria-hidden="true"
    //           className="ml-2 -mr-1 w-4 h-4"
    //           fill="currentColor"
    //           viewBox="0 0 20 20"
    //         >
    //           <path
    //             fill-rule="evenodd"
    //             d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
    //             clip-rule="evenodd"
    //           ></path>
    //         </svg>
    //       </a>
    //       <a className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
    //         Learn more
    //       </a>
    //     </div>
    //   </div>
    // </section>
  );
}

export default HomePage;
