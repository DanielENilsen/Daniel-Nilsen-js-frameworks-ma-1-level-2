let number = 1;
let numbertwo = -1;
let sliderarray = $('.sliderInner > img').length;

setInterval(function() {
    numbertwo++;
    if(number === sliderarray ) { 
        number = 0;    
    }   
    let newOne2 = $(".sliderInner > img")[numbertwo]; 
    let newOne = $(".sliderInner > img")[number]; 

        $('.sliderInner').find(newOne2).css("display","none");
         
      
        $('.sliderInner').find(newOne).css("display","block");
         
  
        number++;
        if(number === 1) { 
             numbertwo = -1;
    }
  
},3000)




