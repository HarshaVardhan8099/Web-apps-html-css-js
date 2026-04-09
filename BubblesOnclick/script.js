const body=document.querySelector('body');

body.addEventListener('click', (e)=>{
    console.log(e.clientX, e.clientY);
    
    const circleElement=document.createElement('div');
    circleElement.classList.add('circle');
    circleElement.textContent='hi';

    const color=['red', 'blue', 'yellow', 'green', 'white', 'pink', 'orange'];
    circleElement.style.backgroundColor=color[Math.floor(Math.random()*7)]

    circleElement.style.top=`${e.clientY}px`;
    circleElement.style.left=`${e.clientX}px`;

    body.append(circleElement);
    
    setTimeout(()=>{
        circleElement.remove();
    },3000)
    
})