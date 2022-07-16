import Head from "next/head";
import { useState } from "react";
import { ActionBox } from "./components/ActionBox";
import { Navbar } from "./components/Navbar";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>ILOS 💜</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen transition-colors md:h-screen dark:bg-gray-900 dark:text-white">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <main className="flex flex-col items-center px-4 md:flex-row md:justify-between md:h-4/6 lg:px-32 xl:px-48">
          <div className="h-full my-4 md:w-1/2 md:mr-8 md:flex md:flex-col md:justify-around lg:justify-between">
            <h1 className="mb-8 font-mono md:mb-16 text-7xl">
              I LOVE OPEN SOURCE &#60;3
            </h1>
            <p className="font-mono leading-loose">
              ILOS Token is built for the love of Open Source. If you are an
              open source maintainer, than you can mint ILOS token on the
              Polygon Mainnet.
            </p>
          </div>
          <ActionBox />
        </main>
      </div>
    </div>
  );
}
