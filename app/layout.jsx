export const metadata = {
  title: "Flumi Fútbol Club",
  description: "Sitio oficial de Flumi Fútbol Club",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        style={{
          margin: 0,
          padding: 0,
          background: "#111",
        }}
      >
        {children}
      </body>
    </html>
  );
}