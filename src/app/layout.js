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
        <body className="flex min-h-screen flex-col items-center justify-between font-mono">
          <Header />
          <main className="mx-auto w-full max-w-[1920px] flex-grow">
            {children}
          </main>
          <Footer />
        </body>
      </html>
  );
}
