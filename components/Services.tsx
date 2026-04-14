"use client";

import { FaNetworkWired, FaCode, FaShieldAlt, FaCloud, FaLaptopCode, FaDatabase } from "react-icons/fa";
import Reveal from "@/components/Reveal";

export default function Services() {

  const services = [
    {
      icon: <FaNetworkWired size={30} />,
      title: "Networking Solutions",
      description:
        "Design, installation and maintenance of secure and scalable network infrastructure for businesses.",
    },
    {
      icon: <FaCode size={30} />,
      title: "Software Development",
      description:
        "Custom web and system development tailored to meet specific business needs and workflows.",
    },
    {
      icon: <FaShieldAlt size={30} />,
      title: "Cybersecurity",
      description:
        "Protect your digital assets with modern security solutions, monitoring and threat prevention.",
    },
    {
      icon: <FaCloud size={30} />,
      title: "Cloud Solutions",
      description:
        "Cloud infrastructure setup, migration, and management for scalable and flexible operations.",
    },
    {
      icon: <FaLaptopCode size={30} />,
      title: "IT Consultancy",
      description:
        "Strategic IT advisory services to help organizations leverage technology for growth.",
    },
    {
      icon: <FaDatabase size={30} />,
      title: "Data & System Management",
      description:
        "Database design, optimization and management to ensure efficient and secure data handling.",
    },
  ];

  return (
   <section id="services" className="py-20 px-6 bg-brandDark">

      <div className="max-w-7xl mx-auto text-center mb-16">

        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Our <span className="text-brandBlue">Services</span>
        </h2>

        <p className="text-brandGrey max-w-2xl mx-auto">
          At Noventra Technologies we provide innovative IT solutions designed
          to help organizations operate efficiently, securely and digitally.
        </p>

      </div>
       <Reveal>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-900 p-8 rounded-xl border border-gray-800 transition transform hover:-translate-y-2 hover:border-brandBlue hover:shadow-[0_0_25px_rgba(30,64,175,0.5)]"
          >

            <div className="text-brandBlue mb-4">
              {service.icon}
            </div>

            <h3 className="text-xl font-semibold mb-3">
              {service.title}
            </h3>

            <p className="text-brandGrey text-sm leading-relaxed">
              {service.description}
            </p>

          </div>
        ))}

      </div>
      </Reveal>

    </section>
  );
}