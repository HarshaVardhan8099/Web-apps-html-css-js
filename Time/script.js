const timeContainer=document.getElementById('timeContainer');

setInterval(()=>{
    let time=new Date();
    timeContainer.innerText = time.toLocaleTimeString();
}, 1000);



//console.log(time.toLocaleTimeString());
