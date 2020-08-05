class Food{
    constructor( ){
       
     this.foodStock=0  
     this.lastFed=0 
        
        this.image = loadImage("images/Milk.png");

      }
      updateFoodStock(foodStock){
       this.foodStock=foodStock
      }

      getFedTime(lastFed){
        this.lastFed=lastFed
      }

      detuctFood(){
        if(this.foodStock>0){
      this.foodStock=this.foodStock-1
        }
      }
      getFoodStock(){
     return this.foodStock
      }
    
    
bedroom(){
  background(Image_bed,550,500) 
}
garden(){
    background(Image_garden,550,500) 
  }
 washroom(){
    background(Image_wash,550,500) 
  }

     
      display(){
      var x=80,y=100;
        imageMode(CENTER);
        image(this.image,720, 220, 70, 70);
   
        if(this.foodStock!=0){
          for (var i=0;i<this.foodStock;i++){
            if(i%10===0)
            x=80;
            y=y+50;
          }
          image(this.image,x, y, 50, 50);
          x=x+30;
        }

      }
}