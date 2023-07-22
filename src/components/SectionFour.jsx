const SectionFour = () => {
  return (
    <div className="flex justify-center items-center py-7">
      <div className="w-full">
        <div className="flex flex-row py-0 justify-center">
          <div className="self-center px-5 py-7">
            <h1 className="font-semibold text-xl mb-5">
              Now or never! Let's work together.
            </h1>
            <p>
              I will do my best! to learn, to add value and to have a profitable
              long term relationship.
            </p>
          </div>
          <div id="contacto" className="px-5 py-7">
            <h3 className="text-lg font-serif font-semibold">Email:</h3>
            <p className="font-serif mb-4"> leandropintos162@gmail.com</p>
            <h3 className="text-lg font-serif font-semibold">LinkedIn:</h3>
            <p className="font-serif">Leandro Pintos Chelli</p>
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
