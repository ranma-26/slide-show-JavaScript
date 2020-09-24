'use strict';

{
  const open = document.getElementById('p-header__icon');
  const close_menu = document.getElementById('p-hidden__closeicon');
  const overlay = document.querySelector('.p-hidden');
  const close = document.querySelector('.p-header__top');
  const leave = document.querySelector('.p-header__title');

  open.addEventListener('click',() =>{
      // メニュー押すと開く
    overlay.classList.add('p-hidden__show');
      // メニュー押すとヘッダー消える
    close.classList.add("p-header__hide");
      // メニュー押してタイトルだけ残す
    leave.classList.add("p-header__leave");
  }); 
  close_menu.addEventListener('click',() =>{
      // メニュー押すと閉じる
    overlay.classList.remove('p-hidden__show');
      // メニュー押すとヘッダー戻す
    close.classList.remove("p-header__hide");
      // メニュー押すとタイトル戻す
    leave.classList.remove("p-header__leave"); 
  }); 
}



var pics_src = new Array("css/img/header.png","css/img/images2.png","css/img/images3.png","css/img/images4.png","css/img/images5.png","css/img/images6.png");
var mini_png = new Array("css/img/header-mini.png","css/img/images-mini2.png","css/img/images-mini3.png","css/img/images-mini4.png");
var num = -1;
var numb = -1;
             slideshow_timer();
            function slideshow_timer(){
                if (num == 5){
                    num = 0;
                } 
                else {
                    num ++;
                }
                document.getElementById("mypng").src=pics_src[num];
                
                setTimeout("slideshow_timer()",1000); 
            }
          

            // var numb = -1;
 
            // slideshow_timer();
 
            // function slideshow_timer(){
            //     if (numb == 3){
            //         numb = 0;
            //     } 
            //     else {
            //         numb ++;
            //     }
            //     document.getElementById("mypng-smh").src=mini_png[numb];
            //     setTimeout("slideshow_timer()",1000); 
            // }            