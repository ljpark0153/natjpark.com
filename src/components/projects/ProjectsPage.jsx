import ascensionGameImg from "../img/ascension.png";
import portfolioWebsiteImg from "../img/portfolioWebsite.png";
import spearmintLogo from "../img/spearmintLogo.png";
import spritzAndGiggles from "../img/spritzAndGiggles.png";
function ProjectsPage() {
  return (
    <div id="project-page" className="flex-grow">
      <div className="w-6/12 m-auto">
        <div className="text-5xl text-center my-12">Projects</div>
        <div>
          <div className="flex gap-x-8">
            <div id="ascensionImgContainer" className="max-w-lg max-h-lg flex">
              <img
                src={ascensionGameImg}
                className="w-full h-full object-scale-down"
              ></img>
            </div>
            <div className="flex flex-col flex-1 justify-between py-10">
              <div className="">
                Ascension is a rhythm game created with Unity game engine and
                utulizes C# for the scripts. I worked with the animation side of
                the game and learned how to manipulate animation sprites through
                scripts.
              </div>
              <div className="flex justify-center gap-8 items-end">
                <a href="https://github.com/Gaibryol/LD55">
                  <button className="min-w-28 flex-1 border-solid border-2 border-black rounded-full px-7 py-1 hover:bg-black hover:text-white">
                    Github
                  </button>
                </a>
                <a href="https://zihang.itch.io/ascension">
                  <button className="min-w-28 flex-1 border-solid border-2 border-black rounded-full px-7 py-1 hover:bg-black hover:text-white">
                    Play!
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="flex gap-x-8 mt-10">
            <div id="spearmintImgContainer" className="max-w-lg max-h-lg flex">
              <img
                src={spearmintLogo}
                className="w-full h-full object-scale-down"
              ></img>
            </div>
            <div className="flex flex-col flex-1 justify-between py-10">
              <p>
                Spearmint is a mobile app created using Android Studio. It
                allows the users to publish their experiments and others can
                subscribe to the experiment and participate in different
                experiments. The app uses Java and Firebase for the Backend.
              </p>
              <div className="flex justify-center gap-8 items-end">
                <a href="https://github.com/CMPUT301W21T22/Spearmint">
                  <button className="min-w-28 flex-1 border-solid border-2 border-black rounded-full px-7 py-1 hover:bg-black hover:text-white">
                    Github
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="flex gap-x-8 mt-10">
            <div
              id="spritzAndGigglesContainer"
              className="max-w-lg max-h-lg flex"
            >
              <img
                src={spritzAndGiggles}
                className="h-full w-full object-scale-down"
              ></img>
            </div>

            <div className="flex flex-col flex-1 justify-between py-10">
              <p>
                Spritz & Giggles is a puzzle game created with Unity game engine
                Utulizing C# for the scripts. Worked with the UI side of the
                game.
              </p>
              <div className="flex justify-center gap-8 items-end">
                <a href="https://github.com/Gaibryol/GGJ2024">
                  <button className="min-w-28 flex-1 border-solid border-2 border-black rounded-full px-7 py-1 hover:bg-black hover:text-white">
                    Github
                  </button>
                </a>
                <a href="https://zihang.itch.io/spritz-giggles">
                  <button className="min-w-28 flex-1 border-solid border-2 border-black rounded-full px-7 py-1 hover:bg-black hover:text-white">
                    Play!
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="flex gap-x-8 mt-10">
            <div
              id="spritzAndGigglesContainer"
              className="max-w-lg max-h-lg flex"
            >
              <img
                src={portfolioWebsiteImg}
                className="h-full w-full object-scale-down"
              ></img>
            </div>
            <div className="flex flex-col justify-evenly">
              <p>
                This is my personal porfolio website using Vite + ReactJS and
                TailwindCSS.
              </p>
              <div className="flex justify-center gap-8 items-end">
                <a href="https://github.com/ljpark0153/jihopark.ca">
                  <button className="min-w-28 flex-1 border-solid border-2 border-black rounded-full px-7 py-1 hover:bg-black hover:text-white">
                    Github
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
