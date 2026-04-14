import Contact from "@/components/Contact";

export const metadata = {
  title: "Contact Us | Noventra Technologies",
  description:
    "Get in touch with Noventra Technologies for IT consultancy and digital solutions.",
};

export default function ContactPage() {
  return (
    <div className="pt-32 bg-black text-white min-h-screen">
      <Contact />
    </div>
  );
}