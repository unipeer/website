export default function Signup() {
  return (
    <div className="p-6 mb-4" id="signup">
      <div className="relative border border-gray-200 rounded-lg px-4 py-6 shadow sm:px-6 sm:py-8 lg:p-12 xl:p-16">
        <h2 className="text-2xl font-semibold font-display text-gray-900 sm:text-3xl">
          Want to be the first to try us out before the Official release?
        </h2>
        <p className="mt-2 max-w-2xl text-base text-gray-700">
          Join our waitlist to get an early access to our beta release
        </p>
        <form
          method="POST"
          className="py-4"
          name="newsletter"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          {/* Needed for netlify forms */}
          <input type="hidden" name="form-name" value="newsletter" />
          <div className="sm:flex justify-center">
            <input
              name="email"
              type="email"
              required={true}
              placeholder="Enter your email"
              className="block sm:max-w-xs w-full px-4 py-3 text-base appearance-none border border-gray-300 shadow-none bg-white rounded-md placeholder-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
            />
            <button
              type="submit"
              className="mt-4 relative sm:mt-0 sm:h-auto sm:ml-4 block w-full sm:w-auto border border-transparent px-6 py-3 text-base font-semibold leading-snug bg-indigo-600 text-white rounded-md shadow-md hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500 transition ease-in-out duration-150"
            >
              Join Waitlist
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
