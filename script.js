
function clock(){
    
    var  hrs=document.getElementById("hours");
    var  min=document.getElementById("mins");
    var  sec=document.getElementById("second");
    var  ampm=document.getElementById("am");
    
    var time=new Date();
    var hrs=time.getHours();
    var min=time.getMinutes();
    var sec=time.getSeconds();
    var ampm=hrs >=12? "PM":"AM";

    ampm.innerHTML = ampm;
    hrs = hrs%12;
    hrs = hrs ? hrs:12;
    hrs.innerHTML = hrs;
    if(hrs>=12){
        ampm.innerHTML = 'PM';

    }
    if(hrs>=12){
        hrs = hrs-12;
    }
    if(hrs == 0){
        hrs =12;
    }
    if(hrs<10){
        hrs = '0' + hrs;
    }
    if(min<10){
        min = '0' + min;
    }
    if(sec<10){
        sec = '0' + sec;
    }
    
    
    hours.innerHTML=hrs;
    mins.innerHTML=min;
    second.innerHTML=sec;
    ampm.innerHTML=ampm;
}
setInterval(clock,1000);
  

function Makediv(){    
    var container=document.getElementById('dynamic-blockk');
    container.style.display='block';

    var invalue1=document.getElementById("wakeuptime");
    var value1=invalue1.options[invalue1.selectedIndex].text;
    document.getElementById("dynamic-blockk").innerHTML="Wakeup time"+":"+" "+value1;
        
    var invalue2=document.getElementById("lunchtime");
    var value2=invalue2.options[invalue2.selectedIndex].text;
    document.getElementById("dynamic-blockk").innerHTML="Lunch time"+":"+" "+value2;
    
    
   
    var invalue3=document.getElementById("naptime");
    var value3=invalue3.options[invalue3.selectedIndex].text;
    document.getElementById("dynamic-blockk").innerHTML="Wakeup Time"+":"+" "+value1+"<br> Lunch Time"+":"+" "+value2+"<br/>Nap Time"+":"+" "+value3;
 }


function settime(){
    
    var i=document.getElementById('wakeuptime').value;
    var hours=new Date().getHours();
    if (i==hours){
        
        document.getElementById('image').style.backgroundImage="url(./wakeup.png)";
        document.getElementById('text').innerHTML='<h2>Wake up!!</h2>';
    }
    
    var i=document.getElementById('lunchtime').value;
    var hours=new Date().getHours();
    if (i==hours){
       
        document.getElementById('image').style.backgroundImage="url(./lunch1.jpeg)";
        document.getElementById('text').innerHTML='<h2>Lets have lunch!!</h2>';
    } 

    var i=document.getElementById('naptime').value;
    var hours=new Date().getHours();
    if (i==hours){
        
        document.getElementById('image').style.backgroundImage="url(./night.jpeg)";
        document.getElementById('text').innerHTML='<h2>Lets have nap.!!</h2>';
    }
    Makediv();
    
    
    
}


