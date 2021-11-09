var chance = 0;
   let s1 = document.getElementById("s1");
   let s2 = document.getElementById("s2");
   let w = document.getElementById("winner");
   let v1 , v2;
   let win1=document.getElementById("w1");
    let win2 =document.getElementById("w2");
   const Start=function(){
       s1.innerHTML=100;
       s2.innerHTML=100;
       win1.innerHTML=0;
       win2.innerHTML=0;
   }
   const Shoot1 = function(){
    //    alert("HEllp");
       if(win1.innerHTML < 3){
            v1 = Math.floor(Math.random()*5);
            console.log(v1);
            s2.innerHTML = Math.max(0, s2.innerHTML - v1);
            console.log(s2.innerHTML);
            if(s2.innerHTML == 0){
                win1.innerHTML++;
                s1.innerHTML=100;
                s2.innerHTML=100;
            }
       }
       else{
           w.innerHTML="Player 1 won the match!";
       }
   }
   const Shoot2 = function(){
    // alert("HEllp");
    if(win2.innerHTML < 3){
        v2 = Math.floor(Math.random()*5);
        s1.innerHTML = Math.max(0, s1.innerHTML - v2);
        if(s1.innerHTML==0){
            win2.innerHTML++;
            s1.innerHTML=100;
            s2.innerHTML=100;
        }
    }
    else{
        w.innerHTML="Player 2 won the match!";
    }
  }
    