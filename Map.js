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
  ctx.lineWidth = 2;
  for (var l = 0; l < this.h; l++) {
    for (var c = 0; c < this.w; c++) {
      if(this.cell[l][c] === 0){                  //Vazio
        //ctx.fillStyle = "black";
        //ctx.strokeStyle = "grey";
        imageLibrary.drawSize(ctx, "sandGround", c*this.s, l*this.s, this.s, this.s);
        //ctx.fillRect(c*this.s, l*this.s, this.s, this.s);
        //ctx.strokeRect(c*this.s, l*this.s, this.s, this.s);
      } else if(this.cell[l][c] === 1){          //Bloqueado
        //ctx.strokeStyle = "grey";
        imageLibrary.drawSize(ctx, "brickRed", c*this.s, l*this.s, this.s, this.s);
        //ctx.strokeRect(c*this.s, l*this.s, this.s, this.s);
      } else if(this.cell[l][c] === 2){           //Terreno a desbravar
        ctx.strokeStyle = "rgb(225,223,119)";
        ctx.strokeRect(c*this.s, l*this.s, this.s, this.s);
        imageLibrary.drawClipSize(ctx, "sandBlock", 0, 0, 80, 80, c*this.s, l*this.s, this.s, this.s);
        /*ctx.fillStyle = "lightBlue";
        ctx.strokeStyle = "grey";
        ctx.fillRect(c*this.s, l*this.s, this.s, this.s);
        ctx.strokeRect(c*this.s, l*this.s, this.s, this.s);*/
      } else if(this.cell[l][c] === 3){           //Terreno a desbravar com mina embaixo
        ctx.strokeStyle = "rgb(225,223,119)";
        ctx.strokeRect(c*this.s, l*this.s, this.s, this.s);
        imageLibrary.drawClipSize(ctx, "sandBlock", 0, 0, 80, 80, c*this.s, l*this.s, this.s, this.s);
        /*ctx.fillStyle = "darkgrey";
        ctx.strokeStyle = "grey";
        ctx.fillRect(c*this.s + this.s/3, l*this.s + this.s/3, this.s/3, this.s/3);
        ctx.strokeRect(c*this.s + this.s/3, l*this.s + this.s/3, this.s/3, this.s/3);
        ctx.fillStyle = "lightBlue";
        ctx.strokeStyle = "grey";
        ctx.fillRect(c*this.s, l*this.s, this.s, this.s);
        ctx.strokeRect(c*this.s, l*this.s, this.s, this.s);*/
        //imageLibrary.drawClipSize(ctx, "sandBlock", 0, 0, 80, 80, c*this.s, l*this.s, this.s, this.s);
      } else if(this.cell[l][c] === 4){           //Terreno a desbravar com tesouro embaixo
        //ctx.fillStyle = "lightBlue";

        //ctx.fillRect(c*this.s, l*this.s, this.s, this.s);
        ctx.strokeStyle = "rgb(225,223,119)";
        ctx.strokeRect(c*this.s, l*this.s, this.s, this.s);
        imageLibrary.drawClipSize(ctx, "sandBlock", 0, 0, 80, 80, c*this.s, l*this.s, this.s, this.s);
      } else if(this.cell[l][c] === 5){             //Mina
        imageLibrary.drawSize(ctx, "sandGround", c*this.s, l*this.s, this.s, this.s);
        ctx.fillStyle = "darkgrey";
        ctx.strokeStyle = "grey";
        ctx.fillRect(c*this.s + this.s/3, l*this.s + this.s/3, this.s/3, this.s/3);
        ctx.strokeRect(c*this.s + this.s/3, l*this.s + this.s/3, this.s/3, this.s/3);
      } else if(this.cell[l][c] === 6){             //Tesouro
        imageLibrary.drawSize(ctx, "sandGround", c*this.s, l*this.s, this.s, this.s);
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
