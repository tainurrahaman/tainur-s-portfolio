import project1 from "../assets/pic1.png";
import project2 from "../assets/pic2.png";
import project3 from "../assets/pic3.png";

const Portfolio = () => {
  return (
    <div className="my-8 md:my-14 lg:my-20">
      <h2 className="font-bold text-4xl md:text-5xl text-center">My Work</h2>
      <h4 className="py-5 md:py-12 text-2xl  md:text-3xl text-center px-5">
        Some of the noteworthy projects I have built:
      </h4>
      <div className="space-y-8">
        <div className="flex bg-base-100 shadow-sm mx-10 rounded-2xl">
          <div className="flex-1 p-5 bg-gray-700 rounded-l-2xl">
            <img className="rounded-lg" src={project1} alt="Shoes" />
          </div>
          <div className=" flex-1 card-body">
            <h2 className="card-title mb-3">
              ScholarBeacon
              <div className="badge badge-secondary">Latest</div>
            </h2>
            <p>
              ScholarBeacon is a web platform for easy scholarship applications,
              reviews, and management. It's built with React and Tailwind CSS,
              it offers a responsive UI, secure authentication, and real-time
              updates.
            </p>
            <div className="card-actions justify-start">
              <div className="badge badge-outline">JavaScript</div>
              <div className="badge badge-outline">React</div>
              <div className="badge badge-outline">Tailwind CSS</div>
              <div className="badge badge-outline">Firebase</div>
              <div className="badge badge-outline">MongoDB</div>
              <div className="badge badge-outline">Express.js</div>
            </div>
          </div>
        </div>
        <div className="flex bg-base-100 shadow-sm mx-10 rounded-2xl">
          <div className="flex-1 p-5 bg-gray-700 rounded-l-2xl">
            <img className="rounded-lg" src={project2} alt="Shoes" />
          </div>
          <div className=" flex-1 card-body">
            <h2 className="card-title mb-3">AntiqueArchive</h2>
            <p>
              AntiqueArchive is a web platform for discovering and managing
              antique collections. Built with React and Tailwind CSS, it
              features search, filters, real-time updates, and secure
              authentication for a smooth user experience.
            </p>
            <div className="card-actions justify-start">
              <div className="badge badge-outline">JavaScript</div>
              <div className="badge badge-outline">React</div>
              <div className="badge badge-outline">Tailwind CSS</div>
              <div className="badge badge-outline">Firebase</div>
              <div className="badge badge-outline">MongoDB</div>
              <div className="badge badge-outline">Express.js</div>
            </div>
          </div>
        </div>
        <div className="flex bg-base-100 shadow-sm mx-10 rounded-2xl">
          <div className="flex-1 p-5 bg-gray-700 rounded-l-2xl">
            <img className="rounded-lg" src={project3} alt="Shoes" />
          </div>
          <div className=" flex-1 card-body">
            <h2 className="card-title mb-3">VisaHub</h2>
            <p>
              This visa application platform lets users explore, add, and apply
              for visas with secure authentication. It offers search, filters,
              real-time notifications, and a responsive design for smooth and
              efficient visa management.
            </p>
            <div className="card-actions justify-start">
              <div className="badge badge-outline">JavaScript</div>
              <div className="badge badge-outline">React</div>
              <div className="badge badge-outline">Tailwind CSS</div>
              <div className="badge badge-outline">Firebase</div>
              <div className="badge badge-outline">MongoDB</div>
              <div className="badge badge-outline">Express.js</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
