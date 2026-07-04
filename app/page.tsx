export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #020617, #0f172a, #111827)",
        color: "white",
        fontFamily: "Arial, sans-serif",
        padding: "40px",
      }}
    >
      <section
        style={{
          minHeight: "90vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          maxWidth: "1100px",
          margin: "auto",
        }}
      >
        <p style={{ color: "#38bdf8", fontWeight: "bold", marginBottom: "20px" }}>
          Portfolio EEA • Automatisation • Robotique • IoT
        </p>

        <h1 style={{ fontSize: "72px", marginBottom: "20px" }}>
          Youness El Mourid
        </h1>

        <h2 style={{ fontSize: "30px", color: "#38bdf8", marginBottom: "25px" }}>
          Étudiant en Électronique, Énergie Électrique et Automatique
        </h2>

        <p style={{ fontSize: "20px", lineHeight: "1.8", maxWidth: "800px", color: "#cbd5e1" }}>
          Passionné par l’automatisation industrielle, la robotique, l’IoT,
          les systèmes embarqués et le contrôle-commande.
        </p>

        <div style={{ marginTop: "35px", display: "flex", gap: "15px" }}>
          <a
            href="#projects"
            style={{
              background: "#38bdf8",
              color: "#020617",
              padding: "15px 25px",
              borderRadius: "12px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Voir mes projets
          </a>

          <a
            href="#contact"
            style={{
              border: "1px solid #38bdf8",
              color: "white",
              padding: "15px 25px",
              borderRadius: "12px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Me contacter
          </a>
        </div>
      </section>

      <section id="projects" style={{ maxWidth: "1100px", margin: "auto", padding: "60px 0" }}>
        <h2 style={{ fontSize: "42px", color: "#38bdf8", marginBottom: "30px" }}>
          Projets
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "25px" }}>
          {[
            ["Pilulier intelligent connecté", "ESP32, RTC, LCD, moteur pas à pas, buzzer, LED et application mobile."],
            ["Arrosage automatique", "Système Arduino avec capteur d’humidité et contrôle automatique d’une pompe."],
            ["Robot suiveur de ligne", "Robot avec capteurs infrarouges, moteurs et logique de contrôle."],
          ].map(([title, text]) => (
            <div
              key={title}
              style={{
                background: "rgba(15, 23, 42, 0.9)",
                padding: "25px",
                borderRadius: "20px",
                border: "1px solid rgba(56, 189, 248, 0.35)",
              }}
            >
              <h3 style={{ fontSize: "24px", marginBottom: "15px" }}>{title}</h3>
              <p style={{ color: "#cbd5e1", lineHeight: "1.7" }}>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" style={{ textAlign: "center", padding: "70px 0" }}>
        <h2 style={{ color: "#38bdf8", fontSize: "38px" }}>Contact</h2>
        <p>Email : elmouridyouness58@gmail.com</p>
        <p>GitHub : Y00NSS</p>
        <p>LinkedIn : Youness El Mourid</p>
      </section>
    </main>
  );
}