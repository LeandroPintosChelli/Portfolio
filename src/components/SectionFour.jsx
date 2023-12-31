const SectionFour = () => {
  return (
    <div id="contacto" className="flex justify-center items-center">
      <div className="w-full">
        <div className="flex flex-col py-0 justify-center">
          <div className="self-center px-5 py-7 justify-center">
            <h1 className="text-center font-semibold text-xl mb-5">
              Now or never! Let's work together.
            </h1>
            <p>
              I will do my best! to learn, to add value and to have a profitable
              long term relationship.
            </p>
          </div>
          <div className="flex px-5 py-7 flex-row justify-center">
            <div className="px-5">
              <h3 className="text-lg font-serif font-semibold">Email:</h3>
              <p className="font-serif mb-4"> leandropintos162@gmail.com</p>
            </div>
            <div className="px-5">
              <h3 className="text-lg font-serif font-semibold">LinkedIn:</h3>
              <p className="font-serif">Leandro Pintos Chelli</p>
            </div>
            {/*  <form
          className="contact-form"
          method="post"
          action="{{ url_for('portfolio.mail') }}"
        >
          <input name="name" placeholder="Name" required />
          <input name="email" placeholder="Email" required type="email" />
          <textarea
            placeholder="Message"
            name="message"
            required
            minlength="10"
          ></textarea>
          <button className="btn full-width">Send</button>
        </form>  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
