export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "40px",
      }}
    >
      <h1 style={{ fontSize: "3rem" }}>
        Youness El Mourid
      </h1>

      <h2 style={{ marginTop: "10px" }}>
        Étudiant en Électronique, Énergie Électrique et Automatique (EEA)
      </h2>

      <p style={{ maxWidth: "700px", marginTop: "20px" }}>
        Passionné par l'automatisation industrielle, la robotique,
        l'embarqué et l'IoT. Je développe des projets innovants
        autour de l'ESP32, Arduino et des systèmes intelligents.
      </p>
    </main>
  );
}