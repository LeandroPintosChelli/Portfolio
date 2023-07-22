const SectionThird = () => {
  return (
    <div className="flex justify-center px-5 py-7 bg-white">
      <div className="w-full px-5 py-7">
        <div className="px-5 py-7">
          <h1 className="font-serif text-xl text-center font-semibold">Not convinced? look at what I have built.</h1>
        </div>
        <div className="flex justify-center">
          <div className="w-360px m-5 w-60 bg-white border-solid border-2 rounded-md shadow-md px-5 py-7">
            <h3 className="mb-2 font-bold">Citas React</h3>
            <p className="mb-3">
              Citas React is an App where you can manage your patients in a veterinary
            </p>
            <a className="gold" href="https://jovial-lollipop-c8219a.netlify.app">
              Click here!
            </a>
          </div>
          <div className="w-360px w-60 m-5 bg-white border-solid border-2 rounded-md shadow-md px-5 py-7">
            <h3 className="mb-2 font-bold">In Production</h3>
            <p>...</p>
            <a className="gold" href="#">
              Click here!
            </a>
          </div>
          <div className="w-360px w-60 m-5 bg-white border-solid border-2 rounded-md shadow-md px-5 py-7">
            <h3 className="mb-2 font-bold">In Production</h3>
            <p>...</p>
            <a className="gold" href="#">
              Click here!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionThird;
