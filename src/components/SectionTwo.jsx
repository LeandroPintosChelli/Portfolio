const SectionTwo = () => {
  return (
    <div className="flex justify-center">
      <div className="w-1200px">
        <div className="flex flex-col py-5">
          <div className="w-600px items-center px-5 py-7 text-lg">
            <h1 className="font-serif">
              I passionately develop applications and websites.
            </h1>
            <p className="font-serif mb-3 mt-3">
              I am constantly learning new technologies and developing
              applications for pleasure. I built this website from nothing with
              React and TailwindCSS! And I want to learn even more about this
              world.
            </p>
            <h1 className="font-serif">
              We can talk about anything you want!
              <p className="font-serif">
                Just send me an email{" "}
                <a className="gold" href="#contacto">
                  by clicking here.
                </a>
              </p>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
