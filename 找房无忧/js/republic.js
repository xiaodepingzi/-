window.onload = function(){
    function setRem(){
    var width_ = 320;
    var width_1 = document.documentElement.clientWidth || document.body.clientWidth;
    if(width_1>=320){
      document.documentElement.style.fontSize = (width_1 / width_) * 100 +'px'; 
    }else{
      document.documentElement.style.fontSize = 100 +'px'; 
    }   
  }
  setRem();
  window.onresize = setRem;
}