module.exports = {
  apps: [{
    name: "doc-docusaurus",
    script: "npm",
    args: "run serve -- --host 0.0.0.0 --port 3000",
    interpreter: "none"
  }]
}