function Player() {
  this.sprite = new Sprite();  

  //Mapa das teclas pressionadas
  this.up = false;
  this.down = false;
  this.right = false;
  this.left = false;
}

Player.prototype.mover = function(dt){
  this.sprite.mover(dt);
}

Player.prototype.desenhar = function(ctx){
  this.sprite.desenhar(ctx);
}
