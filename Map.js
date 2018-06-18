function Map(w,h,s){
  this.w = w;
  this.h = h;
  this.s = s;
  this.cell = [];
  for (var l = 0; l < h; l++) {
    this.cell[l] = [];
    for (var c = 0; c < w; c++) {
      this.cell[l][c] = 0;
    }
  }
}

Map.prototype.desenhar = function (ctx) {
  for (var l = 0; l < this.h; l++) {
    for (var c = 0; c < this.w; c++) {
      if(this.cell[l][c] === 0){                  //Vazio
        ctx.fillStyle = "black";
        //ctx.strokeStyle = "grey";
        ctx.fillRect(c*this.s, l*this.s, this.s, this.s);
        //ctx.strokeRect(c*this.s, l*this.s, this.s, this.s);
      } else if(this.cell[l][c] === 1){          //Bloqueado
        //ctx.strokeStyle = "grey";
        imageLibrary.drawSize(ctx, "brickRed", c*this.s, l*this.s, this.s, this.s);
        //ctx.strokeRect(c*this.s, l*this.s, this.s, this.s);
      } else if(this.cell[l][c] === 2){           //Terreno a desbravar
        ctx.fillStyle = "lightBlue";
        ctx.strokeStyle = "grey";
        ctx.fillRect(c*this.s, l*this.s, this.s, this.s);
        ctx.strokeRect(c*this.s, l*this.s, this.s, this.s);
      } else if(this.cell[l][c] === 3){           //Terreno a desbravar com mina embaixo
        ctx.fillStyle = "darkgrey";
        ctx.strokeStyle = "grey";
        ctx.fillRect(c*this.s + this.s/3, l*this.s + this.s/3, this.s/3, this.s/3);
        ctx.strokeRect(c*this.s + this.s/3, l*this.s + this.s/3, this.s/3, this.s/3);
        ctx.fillStyle = "lightBlue";
        ctx.strokeStyle = "grey";
        ctx.fillRect(c*this.s, l*this.s, this.s, this.s);
        ctx.strokeRect(c*this.s, l*this.s, this.s, this.s);
      } else if(this.cell[l][c] === 4){           //Terreno a desbravar com tesouro embaixo
        ctx.fillStyle = "lightBlue";
        ctx.strokeStyle = "grey";
        ctx.fillRect(c*this.s, l*this.s, this.s, this.s);
        ctx.strokeRect(c*this.s, l*this.s, this.s, this.s);
      } else if(this.cell[l][c] === 5){             //Mina
        ctx.fillStyle = "darkgrey";
        ctx.strokeStyle = "grey";
        ctx.fillRect(c*this.s + this.s/3, l*this.s + this.s/3, this.s/3, this.s/3);
        ctx.strokeRect(c*this.s + this.s/3, l*this.s + this.s/3, this.s/3, this.s/3);
      } else if(this.cell[l][c] === 6){             //Tesouro
        ctx.fillStyle = "yellow";
        ctx.strokeStyle = "grey";
        ctx.fillRect(c*this.s + this.s/3, l*this.s + this.s/3, this.s/3, this.s/3);
        ctx.strokeRect(c*this.s + this.s/3, l*this.s + this.s/3, this.s/3, this.s/3);
      }
    }
  }
};

/*var MAPA1 = [
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1],
  [1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1],
  [1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1],
  [1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1],
  [1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
];*/

var MAPA1 = [
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,1,1,1,1,1,1,1,0,0,0,0,5,0,0,1],
  [1,0,2,2,2,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,2,2,2,0,0,0,0,0,0,0,0,3,0,1],
  [1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1],
  [1,0,0,6,0,0,0,1,1,1,1,1,0,0,0,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
];
