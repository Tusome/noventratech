import Services from "@/components/Services";

export const metadata = {
  title: "Our Services | Noventra Technologies",
  description:
    "Explore our IT consultancy, system development, networking, cybersecurity and enterprise solutions.",
};

export default function ServicesPage() {
  return (
    <div className="pt-32 bg-black text-white min-h-screen">
      <Services />
    </div>
  );
}