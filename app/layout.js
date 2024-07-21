import Logo from "./_components/Logo";
import Navigation from "./_components/Navigation";
import Header from "./_components/Header";

import "@/app/_styles/globals.css";

import { Josefin_Sans } from "next/font/google";
import { ReservationProvider } from "./_components/ReservationContext";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s / Serene Haven",
    default: "Welcome / Serene Haven",
  },
  description:
    "Luxurious cabins, located in the heart of Sweden, surrounded by beautiful mountains and lakes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} antialiased bg-primary-800 text-primary-100 min-h-screen flex flex-col relative`}
      >
        <Header />
        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
