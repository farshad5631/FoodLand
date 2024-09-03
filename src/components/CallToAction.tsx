import ctaImage from "../assets/Images/burger_sandwich_PNG4135 2.png";

const CallToAction = () => {
  return (
    <section className="ontainer flex flex-row mx-auto pt-4 justify-center w-4/5">
      <div className="bg-black h-80 flex items-center px-5 mx-auto rounded-3xl mt-12 justify-between">
        <img
          src={ctaImage}
          alt="CTA Image"
          className="-mt-20 -mb-10 h-auto w-auto"
        />

        <div className="ml-20 mr-12 pt-20 pb-20 items-center ">
          <h2 className="text-3xl text-center text-white font-semibold mb-2">
            Subcribe To Our Newsletter
          </h2>

          <p className="text-white mb-4">
            Lorem ipsum dolor sit amet, consectetur adipidrscing elit. Purus
            mauris sem sed urna venenatis vivamus. Egestas in velit nulla
            viverra turpis id ac. Amet faucibus tempus.
          </p>

          <div className="relative">
            <input
              type="email"
              placeholder="Type your email"
              className="w-full px-4 py-2 border rounded-xl h-16 focus:outline-none"
            />
            <button
              type="submit"
              className="absolute right-1 top-1 rounded-xl bottom-1 px-10 bg-red-500 text-white hover:bg-red-600"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
