"use client";
import Head from "next/head";
import { BsFillMoonFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import Image from "next/image";
import me from "../../public/me.jpg";
import code from "../../public/code.png";
import design from "../../public/design.png";
import consulting from "../../public/consulting.png";

import web1 from "../../public/web1.png";
import web2 from "../../public/web2.png";
import web3 from "../../public/web3.png";
import web4 from "../../public/web4.png";
import web5 from "../../public/web5.png";
import web6 from "../../public/web6.png";

import { useState } from "react";
export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="made by neil" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900 dark:text-sky-50">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-2xl font-bold font-daddy">developedbyneil</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-t from-sky-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Neil Campos
            </h2>
            <h3 className="text-2xl py-2">Developer and designer</h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-pink-200">
              Freelancer providing services for programming and design content
              needs. Join me down and let's get cracking!
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>
          <div className="relative mx-auto rounded-full w-60 h-60 mt-10 overflow-hidden md:h-64 md:w-64">
            <Image src={me} alt="me" />
          </div>
        </section>
        <section>
          <div className="dark:text-white">
            <h3 className="text-3xl py-1">Services I offer</h3>
            <p className="text-md text-gray-800 leading-8 md:text-xl max-w-xl mx-auto dark:text-white">
              Since the beginning of my journey as a frelance designes and
              develope, I've done remote work for{" "}
              <span className="text-teal-500">agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talented people to create apps for both
              business and consumer use.
            </p>
          </div>
          <div className="lg:flex gap-10 ">
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image
                src={design}
                alt="design"
                width={"100%"}
                height={"100%"}
                className="mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beatiful designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your next design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1 dark:text-white">Photoshop</p>
              <p className="text-gray-800 py-1 dark:text-white">Kafka</p>
              <p className="text-gray-800 py-1 dark:text-white">Frontend</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image
                src={consulting}
                alt="design"
                width={"100%"}
                height={"100%"}
                className="mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beatiful designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your next design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1 dark:text-white">Databases</p>
              <p className="text-gray-800 py-1 dark:text-white">API's</p>
              <p className="text-gray-800 py-1 dark:text-white">Docker</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image
                src={code}
                alt="design"
                width={"100%"}
                height={"100%"}
                className="mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beatiful designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your next design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1 dark:text-white">Photoshop</p>
              <p className="text-gray-800 py-1 dark:text-white">Linux</p>
              <p className="text-gray-800 py-1 dark:text-white">Databases</p>
            </div>
          </div>
        </section>

        <section className="dark:text-white">
          <div>
            <h3 className="text-3xl py-1">Portfolio</h3>
            <p className="text-md text-gray-800 leading-8 dark:text-white">
              Since the beginning of my journey as a frelance designes and
              develope, I've done remote work for{" "}
              <span className="text-teal-500">agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talented people to create apps for both
              business and consumer use.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image
                src={design}
                alt="design"
                width={"100%"}
                height={"100%"}
                className="mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beatiful designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your next design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1 dark:text-white">Photoshop</p>
              <p className="text-gray-800 py-1 dark:text-white">Linux</p>
              <p className="text-gray-800 py-1 dark:text-white">Databases</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image
                src={consulting}
                alt="design"
                width={"100%"}
                height={"100%"}
                className="mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beatiful designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your next design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1 dark:text-white">Photoshop</p>
              <p className="text-gray-800 py-1 dark:text-white">Linux</p>
              <p className="text-gray-800 py-1 dark:text-white">Databases</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image
                src={code}
                alt="design"
                width={"100%"}
                height={"100%"}
                className="mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beatiful designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your next design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1 dark:text-white">Photoshop</p>
              <p className="text-gray-800 py-1 dark:text-white">Linux</p>
              <p className="text-gray-800 py-1 dark:text-white">Databases</p>
            </div>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                src={web1}
                alt="web"
              />{" "}
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                src={web2}
                alt="web"
              />{" "}
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                src={web3}
                alt="web"
              />{" "}
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                src={web4}
                alt="web"
              />{" "}
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                src={web5}
                alt="web"
              />{" "}
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                src={web6}
                alt="web"
              />
              {""}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
