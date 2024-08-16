// Styles
import "./globals.css";

export const metadata = {
  title: "Campo Click",
  description: "Prenota il tuo campo da tennis, padel o calcetto",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
