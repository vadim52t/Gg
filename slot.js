
const app = new PIXI.Application({ width: 720, height: 1280 });
document.body.appendChild(app.view);

// Фон
const bg = PIXI.Sprite.from('bg.jpg');
bg.width = 720;
bg.height = 1280;
app.stage.addChild(bg);

// Тор
const tor = PIXI.Sprite.from('tor.png');
tor.width = 200;
tor.height = 400;
tor.x = 500;
tor.y = 50;
app.stage.addChild(tor);

// Символы
const symbols = ['symbol1.png', 'symbol2.png', 'symbol3.png'];
for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 5; j++) {
        const s = PIXI.Sprite.from(symbols[Math.floor(Math.random() * symbols.length)]);
        s.width = s.height = 80;
        s.x = 60 + i * 90;
        s.y = 200 + j * 90;
        app.stage.addChild(s);
    }
}
