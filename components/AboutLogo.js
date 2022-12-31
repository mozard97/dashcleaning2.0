import Image from "next/image";

export default function AboutLogo() {
  return (
    <div className="bg-indigo-200 bg-opacity-25">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <h2 className="mx-auto max-w-md text-center text-3xl font-bold tracking-tight text-indigo-900 lg:max-w-xl lg:text-left">
            {`Featured in The world's most innovative companies`}
          </h2>
          <div className="mt-8 flow-root self-center lg:mt-0">
            <div className="-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4">
              <div className="mt-4 ml-8 flex flex-shrink-0 flex-grow justify-center lg:ml-4 lg:flex-grow-0">
                <img
                  className="h-10 w-32"
                  src="/assets/forbes.png"
                  alt="Forbes"
                />
              </div>
              <div className="mt-4 ml-8 flex flex-shrink-0 flex-grow justify-center lg:ml-4 lg:flex-grow-0">
                <img
                  className="h-10 w-30"
                  src="/assets/techCrunch.png"
                  alt="Tech Crunch"
                />
              </div>
              <div className="mt-4 ml-8 flex flex-shrink-0 flex-grow justify-center lg:ml-4 lg:flex-grow-0">
                <img
                  className="h-10 w-30"
                  src="/assets/obs.png"
                  alt="OBS"
                />
              </div>
              {/* <div className="mt-4 ml-8 flex flex-shrink-0 flex-grow justify-center lg:ml-4 lg:flex-grow-0">
                <img
                  className="h-10 w-24"
                  src="/assets/fast-company.png"
                  alt="Workcation"
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
