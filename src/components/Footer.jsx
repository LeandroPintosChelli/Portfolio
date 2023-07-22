const Footer = () => {
  return (
    <div className="px-2 bg-gray-500">
      <div className="items-center justify-center flex w-full">
        <div className="flex-row flex p-2 mt-3 font-bold text-white">Contact me {":)"}</div>
      </div>
      <div className="items-center justify-center flex w-full">
        <div className="flex-row flex font-bold text-white p-2">
          <p>Or you can also follow me on my social networks.</p>
        </div>
      </div>
      <div className="justify-center items-center flex w-full p-2">
        <div className="flex-row flex bg-gray-300 rounded-md w-24 justify-between px-2 py-2">
          <a
            className=""
            href="https://www.linkedin.com/in/leandro-pintos-chelli-04691223a/"
          >
            <img className="social" width="30" src="../static/linkedin.png" />
          </a>
          <a href="https://github.com/LeandroPintosChelli">
            <img className="social" width="30" src="../static/github.png" />
          </a>
        </div>
      </div>
      <div className="px-0 mt-4 text-gray-600">
        <div className="flex-row">
          <p>Made with love by Leandro Pintos {"<3"}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
