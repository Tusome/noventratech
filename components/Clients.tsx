export default function Clients() {
  const clients = [
    "/logo.png",
    "/logo.png",
    "/logo.png",
    "/logo.png",
  ];

  return (
    <section className="py-20 px-6 bg-black">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Trusted By <span className="text-blue-500">Leading Organizations</span>
        </h2>

        <p className="text-gray-400 mb-12">
          We partner with forward-thinking businesses to deliver impactful IT solutions.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 items-center">
          {clients.map((logo, index) => (
            <div
              key={index}
              className="flex justify-center items-center grayscale hover:grayscale-0 transition duration-300"
            >
              <img
                src={logo}
                alt="Client Logo"
                className="h-16 md:h-28 object-contain opacity-80 hover:opacity-100 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}