import { useEffect, useRef } from 'react';
import * as PIXI from 'pixi.js';

const GameStage = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const appRef = useRef<PIXI.Application>(null);

  useEffect(() => {
    const app = new PIXI.Application({
      resizeTo: window,
      backgroundColor: 0x1e1e1e,
      antialias: true,
    });

    appRef.current = app;

    if (canvasRef.current) {
      canvasRef.current.appendChild(app.view as HTMLCanvasElement);
    }

    // Example: Add a rotating square
    const square = new PIXI.Graphics();
    square.beginFill(0x00ffcc);
    square.drawRect(0, 0, 100, 100);
    square.endFill();
    square.x = app.screen.width / 2 - 50;
    square.y = app.screen.height / 2 - 50;
    app.stage.addChild(square);

    app.ticker.add(() => {
      square.rotation += 0.01;
    });

    return () => {
      app.destroy(true, true);
    };
  }, []);

  return (
    <div
      ref={canvasRef}
      className="w-full h-full overflow-hidden"
    />
  );
};

export default GameStage;
