class Box {
    index;
    size = rand(100, 200);
    r = rand(10, 255);
    g = rand(10, 255);
    b = rand(10, 255);
    alpha = rand(1, 10)/10;
    color = `rgba(${this.r},${this.g},${this.b}, ${this.alpha})`
    offsetX = rand(0, cvs1.width - this.size);
    offsetY = rand(0, cvs1.height - this.size);
    maxSpeed = 10;
    speedX = rand(1, this.maxSpeed);
    speedY = rand(1, this.maxSpeed);
    direcX = rand(1, 2) % 2 ? 1 : -1;
    direcY = rand(1, 2) % 2 ? 1 : -1;
    
    constructor(index, offsetX = this.offsetX, offsetY = this.offsetY, size=this.size){
        this.index = index;
        this.offsetX = offsetX ?? this.offsetX;
        this.offsetY = offsetY ?? this.offsetY;
        this.size = size ?? this.size;
        this.draw();
    }

    draw(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.offsetX, this.offsetY, this.size, this.size);
        ctx.save();
        ctx.fillStyle = this.alpha > 0.5 && this.r+this.g+this.b < 380 ? 'white' : 'black';
        ctx.font = 'normal 30px sans-serif';
        ctx.fillText(this.index, this.offsetX+30, this.offsetY+60);
        ctx.restore();
    }

    resetMoveX(){
        this.speedX = rand(1, this.maxSpeed);
        this.direcX = this.offsetX <= 0 ? 1 : -1;
    }

    resetMoveY(){
        this.speedY = rand(1, this.maxSpeed);
        this.direcY = this.offsetY <= 0 ? 1 : -1;
    }
}

class Panel {
    index;
    size = 300;
    color = `#fff000`;
    offsetX = cvs1.width / 2 - this.size / 2;
    offsetY = cvs1.height / 2 - this.size /2 ;

    constructor(index, offsetX = this.offsetX, offsetY = this.offsetY, size=this.size){
        this.index = index;
        this.offsetX = offsetX ?? this.offsetX;
        this.offsetY = offsetY ?? this.offsetY;
        this.size = size ?? this.size;
        this.draw();
    }

    draw(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.offsetX, this.offsetY, this.size, this.size);
        ctx.save();
        ctx.fillStyle = 'black';
        ctx.font = 'normal 30px sans-serif';
        ctx.fillText(this.index, this.offsetX+30, this.offsetY+60);
        ctx.restore();
    }
}