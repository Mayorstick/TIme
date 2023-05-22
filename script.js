const clock=document.querySelector('.clock')


const time=()=>{
    const date=new Date();
    const hour=date.getHours();
    const minute=date.getMinutes();
    const seconds=date.getSeconds();




    const html=`

    <span>${hour}</span>:
    <span>${minute}</span>:
    <span>${seconds}</span>
    
    `

    clock.innerHTML=html

}


setInterval(time, 1000)
time();;