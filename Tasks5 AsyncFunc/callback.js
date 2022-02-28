

const moveX= (element, amount, delay,callback) =>{
    setTimeout(()=>{
        element.style.transform= `translateX(${amount}px)`
        if(callback) {
            callback()
        }
    },delay)
}
moveX(btn, 300, 4000, ()=>{
    moveX(btn, 600, 5000, ()=>{
        moveX(btn, 900, 6000, ()=>{
            moveX(btn, 1000, 7000, ()=>{
                moveX(btn, 1200, 8000, ()=>{})
            })
        })
        
    })
})