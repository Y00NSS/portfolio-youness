export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", background: "#0f172a", color: "white", minHeight: "100vh" }}>
      <section style={{ padding: "80px 30px", textAlign: "center" }}>
        <h1 style={{ fontSize: "48px", marginBottom: "10px" }}>Youness El Mourid</h1>
        <h2 style={{ fontSize: "24px", color: "#38bdf8" }}>
          Étudiant en Électronique, Énergie Électrique et Automatique
        </h2>
        <p style={{ maxWidth: "800px", margin: "25px auto", fontSize: "18px", lineHeight: "1.7" }}>
          Passionné par l’automatisation industrielle, la robotique, l’IoT et les systèmes intelligents.
          Je développe des projets avec ESP32, Arduino, électronique embarquée et contrôle-commande.
        </p>
      </section>

      <section style={{ padding: "40px 30px", maxWidth: "1000px", margin: "auto" }}>
        <h2 style={{ color: "#38bdf8" }}>À propos</h2>
        <p style={{ lineHeight: "1.7" }}>
          Je suis étudiant en EEA, intéressé par l’automatisation industrielle, la maintenance électrique,
          l’instrumentation et les systèmes embarqués. Mon objectif est de développer des compétences solides
          pour travailler dans l’industrie et les projets techniques innovants.
        </p>

        <h2 style={{ color: "#38bdf8", marginTop: "40px" }}>Compétences</h2>
        <ul style={{ lineHeight: "2" }}>
          <li>Arduino, ESP32, capteurs et actionneurs</li>
          <li>Électronique analogique et numérique</li>
          <li>Automatisation industrielle et contrôle-commande</li>
          <li>IoT, Blynk, MIT App Inventor</li>
          <li>Git, GitHub, HTML, CSS, JavaScript, Next.js</li>
          <li>KiCad, MATLAB, bases de programmation C</li>
        </ul>

        <h2 style={{ color: "#38bdf8", marginTop: "40px" }}>Projets</h2>

        <div style={{ display: "grid", gap: "20px", marginTop: "20px" }}>
          <div style={{ background: "#1e293b", padding: "20px", borderRadius: "12px" }}>
            <h3>Pilulier intelligent connecté</h3>
            <p>
              Projet basé sur ESP32 avec RTC, LCD, moteur pas à pas, buzzer, LED et application mobile.
              Le système permet de programmer des alarmes et distribuer les médicaments automatiquement.
            </p>
          </div>

          <div style={{ background: "#1e293b", padding: "20px", borderRadius: "12px" }}>
            <h3>Système d’arrosage automatique</h3>
            <p>
              Système Arduino utilisant un capteur d’humidité du sol pour contrôler automatiquement une pompe.
            </p>
          </div>

          <div style={{ background: "#1e293b", padding: "20px", borderRadius: "12px" }}>
            <h3>Robot suiveur de ligne</h3>
            <p>
              Participation à un projet robotique avec capteurs infrarouges, moteurs et logique de contrôle.
            </p>
          </div>
        </div>

        <h2 style={{ color: "#38bdf8", marginTop: "40px" }}>Formation</h2>
        <p>
          Licence EEA — Électronique, Énergie Électrique et Automatique.
        </p>

        <h2 style={{ color: "#38bdf8", marginTop: "40px" }}>Contact</h2>
        <p>Email : elmouridyouness58@gmail.com</p>
        <p>GitHub : Y00NSS</p>
        <p>LinkedIn : Youness El Mourid</p>
      </section>

      <footer style={{ textAlign: "center", padding: "30px", color: "#94a3b8" }}>
        © 2026 Youness El Mourid — Portfolio
      </footer>
    </main>
  );
}