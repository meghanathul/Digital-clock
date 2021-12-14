function clock(){
    
    var  hours=document.getElementById("hours");
    var  mins=document.getElementById("mins");
    var  second=document.getElementById("second");
    var  am=document.getElementById("am");

    var time=new Date();
    var a=time.getHours();
    var b=time.getMinutes();
    var c=time.getSeconds();
     
    
    hours.innerHTML=a;
    mins.innerHTML=b;
    second.innerHTML=c;
}
setInterval(clock,1000);
  

function Makediv(){
    var container=document.getElementById('dynamic-blockk');
    container.style.display='block';
    
    var invalue=document.getElementById("wakeuptime");
    var value=invalue.options[invalue.selectedIndex].text;
    document.getElementById("dynamic-blockk").innerHTML="Wakeup time"+":"+" "+value;
    
    var invalue=document.getElementById("lunchtime");
    var value=invalue.options[invalue.selectedIndex].text;
    document.getElementById("dynamic-blockk").innerHTML="lunch time"+":"+" "+value;
    

    var invalue=document.getElementById("naptime");
    var value=invalue.options[invalue.selectedIndex].text;
    document.getElementById("dynamic-blockk").innerHTML="Nap time"+":"+" "+value;
}


function settime(){
    
    var i=document.getElementById('wakeuptime').value;
    var hours=new Date().getHours();
    if (i==hours){
        
        document.getElementById('image').style.backgroundImage="url(./wakeup.png)";
        document.getElementById('text').innerHTML='Wake up!!';
    }
    
    var i=document.getElementById('lunchtime').value;
    var hours=new Date().getHours();
    if (i==hours){
       
        document.getElementById('image').style.backgroundImage="url(./lunch1.jpeg)";
        document.getElementById('text').innerHTML='Lets have lunch.';
    } 

    var i=document.getElementById('naptime').value;
    var hours=new Date().getHours();
    if (i==hours){
        
        document.getElementById('image').style.backgroundImage="url(./night.jpeg)";
        document.getElementById('text').innerHTML='Lets have nap.';
    }
    Makediv();
    
}


