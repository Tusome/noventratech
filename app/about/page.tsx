import FadeInSection from "@/components/FadeInSection";

export const metadata = {
  title: "About Us | Noventra Technologies",
  description:
    "Learn more about Noventra Technologies and our mission to deliver innovative IT solutions.",
};

export default function AboutPage() {
  return (
    <div className="bg-black text-white min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto space-y-20">

        <FadeInSection>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-blue-500">Noventra Technologies</span>
            </h1>
            <p className="text-gray-400 max-w-3xl mx-auto">
              We are a forward-thinking IT company committed to helping
              businesses transform digitally through innovative,
              secure, and scalable technology solutions.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-blue-500">
                Our Mission
              </h2>
              <p className="text-gray-300">
                To empower businesses with smart IT solutions that enhance
                efficiency, security, and growth in the digital age.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 text-blue-500">
                Our Vision
              </h2>
              <p className="text-gray-300">
                To become a leading IT consultancy and solutions provider
                in Africa, known for innovation, reliability, and excellence.
              </p>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="bg-gray-900 p-10 rounded-2xl shadow-xl">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Why Choose <span className="text-blue-500">Us</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-blue-400">
                  Expertise
                </h3>
                <p className="text-gray-400 text-sm">
                  Skilled professionals with deep industry experience.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-blue-400">
                  Innovation
                </h3>
                <p className="text-gray-400 text-sm">
                  We leverage modern technologies to deliver future-ready solutions.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-blue-400">
                  Reliability
                </h3>
                <p className="text-gray-400 text-sm">
                  Consistent support and dependable service delivery.
                </p>
              </div>
            </div>
          </div>
        </FadeInSection>

      </div>
    </div>
  );
}