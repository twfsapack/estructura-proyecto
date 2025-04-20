export default function handler(req, res) {
  res.status(200).json({
    estructura: "Flutter + Node.js + PostgreSQL + Firebase",
    carpetas: ["lib", "src", "api", "config"],
    notas: "Estructura recomendada para apps móviles modernas."
  });
}
