export default function Home() {
  const skills = ["C", "Arduino", "ESP32", "IoT", "MATLAB", "KiCad", "GitHub", "Linux", "HTML", "CSS", "JavaScript", "Automatisation"];

  const projects = [
    ["Pilulier intelligent connecté", "ESP32, RTC, LCD, moteur pas à pas, buzzer, LED et application mobile."],
    ["Robot suiveur de ligne", "Robot avec capteurs infrarouges, moteurs et logique de contrôle."],
    ["Arrosage automatique", "Arduino, capteur d’humidité et pompe automatique."],
    ["Tri automatisé", "Convoyeur, capteurs, bras robotique et automatisation industrielle."],
  ];

  return (
    <main style={{ background: "linear-gradient(135deg,#050816,#0f1b4d,#06111f)", color: "white", minHeight: "100vh", fontFamily: "Arial, sans-serif" }}>
      <nav style={{ display: "flex", justifyContent: "space-between", padding: "25px 8%", position: "sticky", top: 0, background: "rgba(5,8,22,.8)", backdropFilter: "blur(12px)", zIndex: 10 }}>
        <h2 style={{ color: "#60a5fa" }}>Youness</h2>
        <div style={{ display: "flex", gap: "25px" }}>
          {["À propos", "Formation", "Projets", "Compétences", "Contact"].map((x) => (
            <a key={x} href={"#" + x.toLowerCase().replace("à ", "").replace("é", "e")} style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}>{x}</a>
          ))}
        </div>
      </nav>

      <section style={{ minHeight: "90vh", display: "grid", gridTemplateColumns: "1.2fr .8fr", alignItems: "center", gap: "40px", padding: "60px 8%" }}>
        <div>
          <p style={{ color: "#60a5fa", fontWeight: "bold", letterSpacing: "3px" }}>PORTFOLIO EEA</p>
          <h1 style={{ fontSize: "75px", margin: "15px 0", lineHeight: 1 }}>Youness El Mourid</h1>
          <h2 style={{ fontSize: "34px", color: "#dbeafe", maxWidth: "900px" }}>
            Étudiant en Électronique, Énergie Électrique et Automatique
          </h2>
          <p style={{ fontSize: "20px", color: "#cbd5e1", lineHeight: 1.8, maxWidth: "750px" }}>
            Passionné par l’automatisation industrielle, la robotique, l’IoT, les systèmes embarqués et le contrôle-commande.
          </p>
          <div style={{ marginTop: "35px", display: "flex", gap: "15px" }}>
            <a href="#projets" style={btn}>Voir mes projets</a>
            <a href="#contact" style={btn2}>Me contacter</a>
          </div>
        </div>

        <div style={{ background: "rgba(255,255,255,.08)", border: "1px solid rgba(96,165,250,.4)", borderRadius: "30px", padding: "35px", boxShadow: "0 0 60px rgba(37,99,235,.35)" }}>
          <h3 style={{ color: "#60a5fa", fontSize: "26px" }}>Objectif</h3>
          <p style={{ color: "#cbd5e1", lineHeight: 1.8 }}>
            Devenir ingénieur en automatisation industrielle et développer des solutions intelligentes pour l’industrie 4.0.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px", marginTop: "25px" }}>
            <Stat n="4+" t="Projets" />
            <Stat n="EEA" t="Parcours" />
            <Stat n="IoT" t="Domaine" />
            <Stat n="OCP" t="Objectif" />
          </div>
        </div>
      </section>

      <section id="propos" style={section}>
        <h2 style={title}>À propos de moi</h2>
        <p style={text}>
          Étudiant en EEA, je construis des projets techniques autour de l’électronique, l’automatisation, les capteurs, les actionneurs et les systèmes intelligents. Mon objectif est de progresser vers l’ingénierie en automatisme industriel.
        </p>
      </section>

      <section id="formation" style={section}>
        <h2 style={title}>Formation</h2>
        <div style={timeline}>
          <Item year="2026 - 2027" name="L2 EEA" place="Université Grenoble Alpes" />
          <Item year="2025 - 2026" name="L1 Électronique" place="Université de Bretagne Occidentale" />
          <Item year="2024" name="Baccalauréat" place="Sciences Mathématiques" />
        </div>
      </section>

      <section id="projets" style={section}>
        <h2 style={title}>Mes Projets</h2>
        <div style={grid}>
          {projects.map(([p, d]) => (
            <div key={p} style={card}>
              <h3 style={{ fontSize: "24px", color: "#93c5fd" }}>{p}</h3>
              <p style={text}>{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="competences" style={section}>
        <h2 style={title}>Compétences</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
          {skills.map((s) => (
            <span key={s} style={{ padding: "14px 20px", border: "1px solid #3b82f6", borderRadius: "999px", background: "rgba(59,130,246,.15)", fontWeight: "bold" }}>{s}</span>
          ))}
        </div>
      </section>

      <section id="contact" style={{ ...section, textAlign: "center" }}>
        <h2 style={title}>Contact</h2>
        <p style={text}>Email : elmouridyouness58@gmail.com</p>
        <p style={text}>GitHub : Y00NSS</p>
        <p style={text}>LinkedIn : Youness El Mourid</p>
      </section>

      <footer style={{ textAlign: "center", padding: "30px", color: "#94a3b8", borderTop: "1px solid rgba(255,255,255,.1)" }}>
        © 2026 Youness El Mourid — Portfolio
      </footer>
    </main>
  );
}

function Stat({ n, t }: { n: string; t: string }) {
  return (
    <div style={{ background: "rgba(15,23,42,.8)", borderRadius: "18px", padding: "20px", textAlign: "center" }}>
      <h2 style={{ color: "#60a5fa", margin: 0 }}>{n}</h2>
      <p style={{ color: "#cbd5e1", margin: 0 }}>{t}</p>
    </div>
  );
}

function Item({ year, name, place }: { year: string; name: string; place: string }) {
  return (
    <div style={card}>
      <p style={{ color: "#60a5fa", fontWeight: "bold" }}>{year}</p>
      <h3>{name}</h3>
      <p style={text}>{place}</p>
    </div>
  );
}

const btn = { background: "#60a5fa", color: "#020617", padding: "16px 28px", borderRadius: "14px", textDecoration: "none", fontWeight: "bold" };
const btn2 = { border: "2px solid #60a5fa", color: "white", padding: "16px 28px", borderRadius: "14px", textDecoration: "none", fontWeight: "bold" };
const section = { padding: "90px 8%", maxWidth: "1200px", margin: "auto" };
const title = { fontSize: "45px", marginBottom: "25px", color: "white" };
const text = { color: "#cbd5e1", lineHeight: 1.8, fontSize: "18px" };
const grid = { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "25px" };
const card = { background: "rgba(15,23,42,.75)", border: "1px solid rgba(96,165,250,.35)", borderRadius: "24px", padding: "28px", boxShadow: "0 20px 50px rgba(0,0,0,.3)" };
const timeline = { display: "grid", gap: "20px" };