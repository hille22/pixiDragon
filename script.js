const app = new PIXI.Application({ resizeTo: window });
document.body.appendChild(app.view);
const renderer = PIXI.autoDetectRenderer();
app.stop();

const totalMekas = 50;

for (let i = 0; i < totalMekas; i++) {
  const mekas = new Mekas();
  mekas.x = Math.random() * 500;
  mekas.y = Math.random() * 800;
  console.log(mekas);
  app.start();
}
