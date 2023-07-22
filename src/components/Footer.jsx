import { BsLinkedin, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="px-2 bg-black">
      <div className="items-center justify-center flex w-full">
        <div className="flex-row flex p-2 mt-3 font-bold text-white">
          Contact me {":)"}
        </div>
      </div>
      <div className="items-center justify-center flex w-full">
        <div className="flex-row flex font-bold text-white p-2">
          <p>Or you can also follow me on my social networks.</p>
        </div>
      </div>
      <div className="justify-center items-center flex w-full p-2">
        <div className="flex-row flex justify-between w-20 p-1">
          <a
            
            href="https://www.linkedin.com/in/leandro-pintos-chelli-04691223a/"
          >
            <BsLinkedin className="text-3xl"/>
          </a>
          <a href="https://github.com/LeandroPintosChelli">
            <BsGithub className="text-3xl"/>
          </a>
        </div>
      </div>
      <div className="px-0 mt-4 text-gray-900">
        <div className="flex-row">
          <p>Made with love by Leandro Pintos {"<3"}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
