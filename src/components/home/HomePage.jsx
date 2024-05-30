import profilePicture from "../img/headshot.jpeg";

function HomePage() {
  return (
    <div id="homepage" className="flex-grow">
      <div id="introductionDiv" className="max-w-5xl mx-auto">
        <div
          id="introductionName"
          className="text-5xl text-center py-2 font-semibold tracking-wider"
        >
          Jiho Park
        </div>
        <div className="flex">
          <img
            className="rounded-full scale-75 size-2/6"
            src={profilePicture}
          ></img>
          <div className="flex flex-col justify-center text-xl gap-5">
            <p className="">
              Hello! I&apos;m{" "}
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
