import profilePicture from "../img/headshot.jpeg";
import ReactTextTransition, {presets} from "react-text-transition";

import { useState } from "react";
import { useEffect } from "react";

function getRandomNumber(max) {
  return Math.floor(Math.random() * max)
}

function HomePage() {

  const helloInDifferentLanguage = [
    "Bonjour!",
    "Hallo!",
    "नमस्ते!",
    "Ciao!",
    "こんにちは!",
    "안녕하세요!",
    "Привет!",
    "Hola!",
    "你好!",
  ]

  const [randomIndex, setRandomIndex] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setRandomIndex(getRandomNumber(helloInDifferentLanguage.length));
    }, 2000)

    return () => {
      clearInterval(interval)
    }
  }, [])


  const paddingLeftValue = (word) => {
    
    switch (word) {
      case "Bonjour!":
        return "4.8rem"
      case "Hallo!":
        return "6rem"
      case "नमस्ते!":
        return "7.5rem"
      case "Ciao!":
        return "7rem"
      case "こんにちは!":
        return "3.5rem"
      case "안녕하세요!":
        return "3.5rem"
      case "Привет!":
        return "5rem"
      case "Hola!":
        return "7rem"
      case "你好!":
        return "7.5rem"
      default:
        return "5rem"
    }
  }


  return (
    <div id="homepage" className="flex-grow">
      <div id="introductionDiv" className="max-w-5xl mx-auto">
        <div
          id="introductionName"
          className="text-5xl text-start py-2 font-semibold tracking-wider"
        >
          <ReactTextTransition style={{paddingLeft: paddingLeftValue(helloInDifferentLanguage[randomIndex])}}>
            {helloInDifferentLanguage[randomIndex]}
          </ReactTextTransition>
      
          {/* Hello! */}
        </div>
        <div className="flex">
          <img
            className="rounded-full scale-75 size-2/6"
            src={profilePicture}
          ></img>
          <div className="flex flex-col justify-center text-xl gap-5">
            <p className="">
              I&apos;m{" "}
              <span className="font-semibold underline">Jiho Park</span>, a
              graduate from the University of Alberta&apos;s Computing Science
              Program.{" "}
            </p>

            <p>
              I&apos;m a software developer interested in web development,
              creating games and mobile applications. I am currently looking for
              work opportunities to further develop my skills as a software
              developer.
            </p>

            <p>
              While I&apos;m not programming, I spend my time fencing or playing
              the guitar!
            </p>
          </div>
        </div>

        <div
          id="skills-display"
          className="grid grid-cols-3 gap-7 text-center mx-w-6xl pl-5"
        >
          <div>JavaScript</div>
          <div>Java</div>
          <div>Python</div>
          <div>C#</div>
          <div>HTML</div>
          <div>CSS</div>
          <div>TailwindCSS</div>
          <div>ReactJS</div>
          <div>Android Studio</div>
          <div>Unity</div>
          <div>NodeJS</div>
          <div>SQLite</div>
          <div>Firebase</div>
          <div>Git</div>
          <div>Github</div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
