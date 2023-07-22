const SectionOne = () => {
  return (
    <div>
      <div className="relative flex bg-white px-5 py-12 justify-center">
        <div className="w-1200px flex flex-row items-center">
          <div className="w-600px items-center justify-center">
            <h1 className="font-serif text-3xl">I am a developer</h1>
            <h1 className="font-serif text-3xl">Leandro Pintos</h1>
            <p className="font-sans mb-10 mt-3">
              Graduated from Holberton School Uruguay, I manage both, Front-end
              and Back-end applications focused on Front-end, using different
              languages.
            </p>
            <a
              href="#contacto"
              className="text-blue-700 bg-yellow-500 hover:bg-blue-700 border-none px-4 py-5 rounded-md"
            >
              Contact me
            </a>
          </div>
          <div>
            <img src="https://www.pngmart.com/files/22/Software-Engineering-PNG-Pic.png" width="600px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
