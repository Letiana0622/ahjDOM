class Game {
  drawImage() {
    this.randomImg();
  }

  randomImg() {
    (() => {
      let playing = true,
        activeCell = 1;

      const stop = () => (playing = true),
        getCell = (index) => document.getElementById(`cell${index}`),
        deactivateCell = (index) => (getCell(index).className = "cell"),
        activateCell = (index) =>
          (getCell(index).className = "cell cell_has-goblin"),
        next = () =>
          setTimeout(() => {
            if (!playing) {
              return;
            }
            deactivateCell(activeCell);
            activeCell = Math.floor(1 + Math.random() * 16);
            activateCell(activeCell);
            next();
          }, 1000);

      next();
    })();
  }
}

const newGame = new Game();
newGame.drawImage();
