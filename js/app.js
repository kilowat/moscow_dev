_app = function(){
  return{
    setLeftPos:function(){
      var w = innerWidth/2;
      var w2 = $('.wrapper').first().width()/2
      var res = w-w2;
      var curLeft;
       $('.slider-left-pos').each(function(key,value){
          curLeft = $(value).position().left;
          $(value).css("left",res+"px");
        });
    }
  }
};
$(document).ready(function(){
   _app().setLeftPos();

  window.onresize = function(){

    _app().setLeftPos();

  }
})



