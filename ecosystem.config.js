module.exports = {
  apps: [{
    name: "doc-docusaurus",
    script: "cmd.exe",
    args: "/c npm run serve -- --host 0.0.0.0 --port 3000"
  }]
}