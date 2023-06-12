import { BsFillMoonStarsFill } from "react-icons/bs";
import { TiSocialGithubCircular } from "react-icons/ti";
import { TiSocialInstagramCircular } from "react-icons/ti";
import { MdOpenInNew } from "react-icons/md";

import image from "./asset/image.png";
import design from "./asset/design.png";
import code from "./asset/code.png";
import consulting from "./asset/consulting.png";
import { useState } from "react";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 bg-gradient-to-b from-white to-orange-100 dark:bg-gradient-to-br dark:from-gray-900 dark:to-cyan-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-6 flex justify-between">
            <h1 className="text-3xl font-burtons lg:pl-20 dark:text-yellow-50">
              My Portfolio
            </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  className="cursor-pointer text-2xl dark:fill-white"
                  onClick={() => setDarkMode(!darkMode)}
                />
              </li>
              <li>
                <a
                  href="#"
                  className=" bg-gradient-to-r 
                from-cyan-800 
                to-teal-700 
                text-white 
                px-4 py-2 
                rounded-md 
                ml-8"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          <div className="text-center p-5">
            <h2 className="text-5xl py-2 text-teal-700 dark:text-teal-500 font-medium">
              Ahana Bhattacharjee
            </h2>
            <h3 className="text-2xl py-2 dark:text-white">
              Developer and Designer.
            </h3>
            <p className="text-md py-2 leading-8 text-gray-700 dark:text-gray-300">
              Frontend developer and designer. Bringing forth expertise in
              design, illustration and developement in React. Equipped with a
              diverse and promising skill-set.
            </p>
          </div>

          <div className="flex justify-center">
            <a href="https://github.com/Ahana99" target="_blank">
              <TiSocialGithubCircular className="w-10 h-10 mx-4 fill-cyan-800 dark:fill-teal-500 cursor-pointer" />
            </a>
            <a href="https://www.instagram.com/the_evils_advocate/" target="_blank">
              <TiSocialInstagramCircular className="w-10 h-10 mx-4 fill-cyan-800 dark:fill-teal-500 cursor-pointer" />
            </a>
          </div>

          <div className="relative mx-auto bg-gradient-to-b from-teal-600 rounded-full w-80 h-80 mt-10 items-center overflow-hidden">
            <img src={image} className="px-20"></img>
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">About me</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              In both my academic and professional life, I have been
              consistently praised as detail-oriented by my professors and
              peers. Whether working on academic, extracurricular, or
              professional projects, I apply proven technical, problem-solving
              and critical thinking skills. I have graduated as an engineer from
              Uviversity of Engineering and Management, Kolkata with a 9.12 CGPA
              in Computer Science and Engineering. I am currently working with
              Infogain. I am passionate about U designing and developement, and
              enjoy photography as an hobby.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="shadow-lg p-10 rounded-xl my-10 w-1/3">
              <img
                src={design}
                width={100}
                height={100}
                className="mx-auto motion-safe:animate-bounce"
              ></img>

              <h3 className="text-center text-2xl font-medium pt-8 pb-4 dark:text-white">
                My Experience
              </h3>

              <h4 className="text-center py-2 text-xl text-teal-600 dark:text-teal-300">
                Infogain
              </h4>

              <p className="text-center  text-gray-800 py-1 text-sm dark:text-white">
                March 2023 - Current
              </p>

              <ul className="py-4">
                <li className="text-gray-800 py-1 dark:text-white">
                  - Underwent training on React
                </li>
                <li className="text-gray-800 py-1 dark:text-white">
                  - Developed apps using React JS concepts such as state, hooks,
                  components, React Router, conditional rendering, Axios,
                  context API
                </li>
                <li className="text-gray-800 py-1 dark:text-white">
                  - Attended training imparted by the organization
                </li>
              </ul>

              <h4 className="text-center py-2 text-xl text-teal-600 dark:text-teal-300">
                Cognizant
              </h4>

              <p className="text-center text-gray-800 py-1 text-sm dark:text-white">
                March 2022 - December 2022
              </p>

              <ul className="py-4">
                <li className="text-gray-800 py-1 dark:text-white">
                  - Worked on querying a database for retrieving and modifying
                  data stored
                </li>
                <li className="text-gray-800 py-1 dark:text-white">
                  - Learnt the different concepts related to ETL process
                </li>
                <li className="text-gray-800 py-1 dark:text-white">
                  - Worked with ETL tools such as Informatica PowerCenter, IICS,
                  Talend and DataStage
                </li>
                <li className="text-gray-800 py-1 dark:text-white">
                  - Worked on SCD Type-1 and Type-2 projects for an Accident
                  Record Management System
                </li>
              </ul>
            </div>

            <div className="shadow-lg p-10 rounded-xl my-10 w-1/3">
              <img
                src={code}
                width={100}
                height={100}
                className="mx-auto motion-safe:animate-bounce"
              ></img>

              <h3 className="text-center text-2xl font-medium pt-8 pb-2 dark:text-white">
                My Projects
              </h3>

              <div className="justify-center flex items-center">
                <h4 className="text-center py-2 mr-3 text-xl text-teal-600 dark:text-teal-300">
                  Cryptodom
                </h4>
                <a href="https://cryptodom.ahana99.repl.co" target="_blank">
                  <MdOpenInNew className="dark:fill-white" />
                </a>
              </div>

              <p className="text-center  text-gray-800 py-1 text-sm dark:text-white">
                React App
              </p>

              <ul>
                <li className="text-gray-800 py-1 dark:text-white">
                  - An app to view the latest and top most cryptocurrencies
                </li>
                <li className="text-gray-800 py-1 dark:text-white">
                  - Based on concept of state, hooks, prop-drilling, components,
                  react-router, conditional rendering, contextAPI and API calls
                </li>
              </ul>
              
              <div className="justify-center flex items-center">
                <h4 className="text-center py-2 mr-3 text-xl text-teal-600 dark:text-teal-300">
                  Quiz App
                </h4>
                <a href="https://quizapp.ahana99.repl.co/" target="_blank">
                  <MdOpenInNew className="dark:fill-white" />
                </a>
              </div>

              <p className="text-center  text-gray-800 py-1 text-sm dark:text-white">
                React App
              </p>

              <ul>
                <li className="text-gray-800 py-1 dark:text-white">
                  - An quiz app built with React JS
                </li>
                <li className="text-gray-800 py-1 dark:text-white">
                  - Built on the concepts of reducer hook, state, context API,
                  custom hooks and conditional rendering
                </li>
              </ul>

              <div className="justify-center flex items-center">
                <h4 className="text-center py-2 mr-3 text-xl text-teal-600 dark:text-teal-300">
                  Notes App
                </h4>
                <a href="https://notes-app.ahana99.repl.co/" target="_blank">
                  <MdOpenInNew className="dark:fill-white" />
                </a>
              </div>

              <p className="text-center  text-gray-800 py-1 text-sm dark:text-white">
                React App
              </p>

              <ul>
                <li className="text-gray-800 py-1 dark:text-white">
                  - An app to store notes built with React framework
                </li>
                <li className="text-gray-800 py-1 dark:text-white">
                  - Based on concept of state, components, mapping array,
                  conditional rendering, hooks and custom hooks, context APIs,
                  and manipulating local storage.
                </li>
              </ul>

              <div className="justify-center flex items-center">
                <h4 className="text-center py-2 mr-3 text-xl text-teal-600 dark:text-teal-300">
                  Infosite
                </h4>
                <a href="https://infositeapp.ahana99.repl.co/" target="_blank">
                  <MdOpenInNew className="dark:fill-white" />
                </a>
              </div>

              <p className="text-center  text-gray-800 py-1 text-sm dark:text-white">
                React App
              </p>

              <ul>
                <li className="text-gray-800 py-1 dark:text-white">
                  - An information site built with React JS.
                </li>
                <li className="text-gray-800 py-1 dark:text-white">
                  - Built on the concepts of reducer hook, state, context API,
                  custom hooks, React-router-DOM and conditional rendering.
                </li>
              </ul>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10 w-1/3">
              <img
                src={consulting}
                width={100}
                height={100}
                className="mx-auto motion-safe:animate-bounce"
              ></img>

              <h3 className="text-2xl font-medium pt-8 pb-2 dark:text-white">
                My Certificates
              </h3>

              <h4 className="text-center py-2 text-xl text-teal-600 dark:text-teal-300">
                Get started with React
              </h4>

              <p className="text-center  text-gray-800 py-1 text-sm dark:text-white">
                - Offered by Infogain
              </p>
              <h4 className="text-center py-2 text-xl text-teal-600 dark:text-teal-300">
                User Experience Design & User Interface Design Fundamentals
              </h4>

              <p className="text-center  text-gray-800 py-1 text-sm dark:text-white">
                - Offered by Infogain
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
