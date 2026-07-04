export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #020617, #0f172a, #111827)",
        color: "white",
        fontFamily: "Arial, sans-serif",
        padding: "40px",
      }}
    >
      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          minHeight: "90vh",
        }}
      >
        <p
          style={{
            color: "#38bdf8",
            fontWeight: "bold",
            letterSpacing: "3px",
            marginBottom: "20px",
          }}
        >
          PORTFOLIO
        </p>

        <h1
          style={{
            fontSize: "72px",
            margin: 0,
            fontWeight: "bold",
          }}
        >
          Youness El Mourid
        </h1>

        <h2
          style={{
            fontSize: "30px",
            color: "#cbd5e1",
            marginTop: "20px",
            fontWeight: "normal",
          }}
        >
          Étudiant en Électronique, Énergie Électrique et Automatique (EEA)
        </h2>

        <p
          style={{
            fontSize: "22px",
            lineHeight: "1.8",
            color: "#94a3b8",
            maxWidth: "800px",
            marginTop: "35px",
          }}
        >
          Passionné par l'automatisation industrielle, la robotique,
          l'IoT et les systèmes embarqués. Je développe des projets
          innovants avec ESP32, Arduino et les technologies de
          l'industrie 4.0.
        </p>

        <div
          style={{
            display: "flex",
            gap: "20px",
            marginTop: "50px",
            flexWrap: "wrap",
          }}
        >
          <button
            style={{
              background: "#38bdf8",
              color: "#0f172a",
              border: "none",
              padding: "18px 35px",
              borderRadius: "12px",
              fontSize: "18px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Mes Projets
          </button>

          <button
            style={{
              background: "transparent",
              color: "white",
              border: "2px solid #38bdf8",
              padding: "18px 35px",
              borderRadius: "12px",
              fontSize: "18px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Contact
          </button>
        </div>
      </section>
    </main>
  );
}