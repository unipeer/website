export default function BuiltWith() {
  return (
    <div className="py-12 bg-white" id="builtwith">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            Built With
          </h3>
        </div>
        <div className="mt-10 u-built-with-images">
          <img src="/assets/images/ethereum.png" />
          <img src="/assets/images/kleros-logo.svg" />
        </div>
      </div>
    </div>
  );
}
