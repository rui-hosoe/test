/*global $*/
$(document).ready(function(){
  let timerLog=0;
 $('#start').click(function(){
  timerLog =setInterval(()=>{
     countup();
   },100);
   $(this).attr('disabled',true);
   $('#stop').removeAttr('disabled');
 });
 $('#stop').click(function(){
   clearInterval(timerLog);
   $(this).attr('disabled',true);
   $('#start').removeAttr('disabled');
   $('#reset').removeAttr('disabled');
 });
 $('#reset').click(function(){
   milliSec=0;
   sec=0;
   tenSec=0;
   onehundredSec=0;
   
   $('#timer').html("0:0:0:0");
   clearInterval(timerLog);
   $('#reset').attr('disabled',true);
   $('#stop').attr('disabled',true);
   $('#start').removeAttr('disabled');
   
 });

 let milliSec=0;
 let sec=0;
 let tenSec= 0;
 let onehundredSec=0;
 
 function countup(){
   milliSec++;
   if(milliSec>=10){
     milliSec=0;
     sec++;
   }
   if(sec>=10){
     sec=0;
     tenSec++;
   }
   if(tenSec>=10){
     tenSec=0;
     onehundredSec++;
   }
   $('#timer').html(onehundredSec+":"+tenSec+":"+sec+":"+milliSec);
 }
});