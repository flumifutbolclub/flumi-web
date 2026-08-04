export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#0d3b26,#6b0f1a)",
        color: "#fff",
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
            fontSize: "56px",
            marginBottom: "10px",
          }}
        >
          FLUMI FÚTBOL CLUB
        </h1>

        <h2
          style={{
            color: "#d4af37",
            marginBottom: "25px",
          }}
        >
          Pasión • Compromiso • Gloria
        </h2>

        <p style={{ fontSize: "20px", maxWidth: "700px" }}>
          Bienvenidos al sitio oficial de Flumi Fútbol Club.
          Actualmente nos encontramos en pretemporada preparando una nueva
          temporada con el objetivo de competir al máximo nivel.
        </p>
      </div>
    </main>
  );
} 
          