var data=['干锅','串串','炒菜','冒菜','面米线','火锅','鸡公煲','肥宅套餐','食堂','凉面','炒饭','黄焖鸡','寿司','烧烤','锅仔','鱼','饼','鸡排饭','小吃','冰淇淋','饺子','抄手'],
    timer=null,
    flag=0;
    var title=document.getElementById('title'),
        play=document.getElementById('play'),
        stop=document.getElementById('stop');
window.onload=function(){
  var title=document.getElementById('title'),
      play=document.getElementById('play'),
      stop=document.getElementById('stop');
      play.onclick=playFun;
      stop.onclick=stopFun;
      document.onkeyup=function(event){
        event=event||window.event;
        if(event.keyCode==13){
          if(flag==0){
            playFun();
            flag=1;
          }else{
            stopFun();
            flag=0;
          }
        }
      }
      function playFun(){
        clearInterval(timer);
        timer=setInterval(function(){
          var random=Math.floor(Math.random()*data.length);
          title.innerHTML=data[random];
        },50);
        play.style.background='#999';
      }
      function stopFun(){
        clearInterval(timer);
        play.style.background='#036';
      }
}
