document.addEventListener('DOMContentLoaded', () => {
  const { Engine, Render, Bodies, Composite } = Matter;
  
  const engine = Engine.create();
  const render = Render.create({
    element: document.getElementById('sketch-container'),
    engine: engine,
    options: { width: 400, height: 400 }
  });

  const box = Bodies.rectangle(200, 200, 80, 80);
  Composite.add(engine.world, [box]);
  
  Engine.run(engine);
  Render.run(render);
});