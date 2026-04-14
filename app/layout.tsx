import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";


export const metadata = {
  title: "Noventra Technologies",
  description: "IT Consultancy, System Development & Networking Solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-black via-blue-950 to-black text-white">
        <Navbar />
        <main className="pt-24">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}