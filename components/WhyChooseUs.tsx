"use client";

import { FaLightbulb, FaUsers, FaShieldAlt, FaRocket, FaLaptopCode, FaHeadset 
 } from "react-icons/fa";
 import Reveal from "@/components/Reveal";

export default function WhyChooseUs() {

 const features = [
  {
    icon: <FaLightbulb size={28} />,
    title: "Innovative Solutions",
    description:
      "We leverage modern technologies to deliver smart and scalable IT solutions tailored to your business.",
  },
  {
    icon: <FaUsers size={28} />,
    title: "Expert Team",
    description:
      "Our experienced professionals bring deep industry knowledge and technical expertise.",
  },
  {
    icon: <FaShieldAlt size={28} />,
    title: "Security Focused",
    description:
      "We prioritize cybersecurity and system reliability to ensure your data and infrastructure stay protected.",
  },
  {
    icon: <FaRocket size={28} />,
    title: "Business Growth",
    description:
      "Our technology solutions help organizations increase efficiency, productivity, and digital transformation.",
  },
  {
    icon: <FaLaptopCode size={28} />,
    title: "Digital Transformation",
    description:
      "We help organizations modernize their IT infrastructure and adopt innovative digital solutions.",
  },
  {
    icon: <FaHeadset size={28} />,
    title: "Reliable Support",
    description:
      "Our team provides continuous technical support and system maintenance to ensure smooth operations.",
  },
];
  
return (
    <section id="why"  className="py-20 px-6 bg-black">

     <div className="max-w-7xl mx-auto">

        {/* Left Content */}
        <div>

         <h2 className="text-3xl md:text-4xl font-bold mb-6 whitespace-nowrap">
  Why Choose <span className="text-brandBlue whitespace-nowrap">Noventra Technologies</span>
        </h2>

          <p className="text-brandGrey mb-8">
            At Noventra Technologies we combine innovation, technical expertise,
            and strategic thinking to deliver IT solutions that help businesses
            thrive in the digital era.
          </p>
          <Reveal>
         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">

            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-brandBlue hover:shadow-[0_0_25px_rgba(30,64,175,0.5)] transition transform hover:-translate-y-2"
              >
                <div className="text-brandBlue mb-3">
                  {feature.icon}
                </div>

                <h3 className="font-semibold mb-2">
                  {feature.title}
                </h3>

                <p className="text-sm text-brandGrey">
                  {feature.description}
                </p>
              </div>
            ))}

          </div>
          </Reveal>

        </div>

              </div>

    </section>
  );
}