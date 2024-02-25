function refresh(){
   const random1=Math.floor(Math.random()*6+1);
   const random2=Math.floor(Math.random()*6+1);
   document.querySelector(".img1").setAttribute("src",`assests/dice-${random1}.svg`);
   document.querySelector(".img2").setAttribute("src",`assests/dice-${random2}.svg`);
   if(random1>random2){
      document.querySelector(".player1Box h2").textContent="Player1 Win!"
      document.querySelector(".player2Box h2").textContent="Loose"
   }
   else if(random2>random1){
      document.querySelector(".player2Box h2").textContent="Player2 Win!"
      document.querySelector(".player1Box h2").textContent="Loose"
   }
   else{
      document.querySelector(".player1Box h2").textContent="Both Win!"
      document.querySelector(".player2Box h2").textContent="Both Win!"
   }
}