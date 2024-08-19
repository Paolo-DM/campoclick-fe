// Components
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

// Styles
import "./globals.css";

export const metadata = {
  title: "Campo Click",
  description:
    "Prenota il tuo campo da tennis, padel, basket o calcio in pochi click",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body className="flex flex-col justify-between items-center font-mono min-h-screen">
        <Header />
        <main className="flex-grow w-full max-w-[1920px] mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
