export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#0d3b26 0%, #111111 50%, #6b1220 100%)",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div>
        <h1
          style={{
            fontSize: "64px",
            marginBottom: "10px",
            color: "#d4af37",
          }}
        >
          FLUMI FÚTBOL CLUB
        </h1>

        <p
          style={{
            fontSize: "22px",
            maxWidth: "800px",
            margin: "20px auto",
          }}
        >
          Más que un equipo, una familia.
          <br />
          Más que una camiseta, un orgullo.
        </p>

        <div style={{ marginTop: "40px" }}>
          <a
            href="https://www.instagram.com/flumifutbol"
            target="_blank"
            style={{
              background: "#ffffff",
              color: "#111",
              padding: "15px 30px",
              margin: "10px",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Instagram
          </a>

          <a
            href="https://www.tiktok.com/@flumi.futbol"
            target="_blank"
            style={{
              background: "#d4af37",
              color: "#111",
              padding: "15px 30px",
              margin: "10px",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            TikTok
          </a>
        </div>

        <p style={{ marginTop: "60px", opacity: 0.8 }}>
          Entrenamientos
          <br />
          Miércoles y Viernes
          <br />
          22:00 a 23:30 hs
          <br />
          Pampa Fútbol
        </p>
      </div>
    </main>
  );
}