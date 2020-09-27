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

// 367px以上の画面スライドショー
var myImage = new Array(	
  "css/img/header.png",
  "css/img/images2.png",		
  "css/img/images3.png",		
  "css/img/images4.png",		
  "css/img/images5.png",		
  "css/img/images6.png",		
  );	

  // 367px以下の画面スライドショー
  var myImagesmh = new Array(	
  "css/img/header-mini.png",
  "css/img/images-mini2.png",		
  "css/img/images-mini3.png",		
  "css/img/images-mini4.png",		
  );	

  var myNowCnt = -1;		/// 367px以上の画面スライドショー
  var myNowCntsmh = -1;	
  var myflg = 0;	
  function myChange(){	// スライドショーメイン関数

    myNowCnt = (myNowCnt<myImage.length-1) ? myNowCnt+1 : 0;	
    myNowCntsmh = (myNowCntsmh<myImagesmh.length-1) ? myNowCntsmh+1 : 0;	
    myflg = (myflg==0) ? 1 : 0;				
 		
    if (myflg == 0){
      document.getElementById("mypng").src = myImage[myNowCnt];		// 367px以上の画面スライドショー
      document.getElementById("mypng-smh").src = myImagesmh[myNowCntsmh];		 // 367px以下の画面スライドショー

      document.getElementById("mypng").className = "p-header__imagesSecond";		// 367px以上の画面スライドショー
      document.getElementById("mypng-smh").className = "p-header--smhSecond";	 // 367px以下の画面スライドショー

      document.getElementById("mypng-second").className = "p-header__images";	// 367px以上の画面スライドショー
      document.getElementById("mypng-smhSecond").className = "p-header--smh";	 // 367px以下の画面スライドショー
    }else{

      document.getElementById("mypng-second").src = myImage[myNowCnt];		// 367px以上の画面スライドショー
      document.getElementById("mypng-smhSecond").src = myImagesmh[myNowCntsmh];		 // 367px以下の画面スライドショー

      document.getElementById("mypng").className = "p-header__images";// 367px以上の画面スライドショー
      document.getElementById("mypng-smh").className = "p-header--smh";	 // 367px以下の画面スライドショー
      document.getElementById("mypng-second").className = "p-header__imagesSecond";		// 367px以上の画面スライドショー
      document.getElementById("mypng-smhSecond").className = "p-header--smhSecond";	 // 367px以下の画面スライドショー
    }
    setTimeout( "myChange()" , 10000 );		
  }	
  myChange(); 
