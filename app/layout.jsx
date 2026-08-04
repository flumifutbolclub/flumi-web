import "./globals.css";

export const metadata = {
  title: "Flumi Fútbol Club",
  description: "Sitio Oficial de Flumi Fútbol Club",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}