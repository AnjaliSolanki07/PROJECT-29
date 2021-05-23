class GreenBox extends Box{
    constructor(x,y){
        super(x,y,20,30);
    }

    display(){
        fill(0,255,0);
        super.display();
    }
}