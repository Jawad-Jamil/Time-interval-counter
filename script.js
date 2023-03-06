let sub = document.getElementById("sub");
let clr = document.getElementById("clr");
let cont = document.getElementById("cont");
let uTimeEl = document.getElementById("uTime");

sub.addEventListener("click", ()=>{
 let uTime = uTimeEl.value;
 let uMilli = new Date(uTime).getTime();
 localStorage.setItem("uMilli",uMilli)
 localStorage.setItem("uTime",uTime)
})



setInterval(() => {
        let guMilli = localStorage.getItem("uMilli");

        if (guMilli) {
            let now = new Date().getTime();
            let interval = (now - guMilli)/1000;
        
            let days = Math.floor(interval/(60*60*24));
            let left1 = interval%(60*60*24);
           
            let hours = Math.floor(left1/(60*60));
            let left2 = left1%(60*60);
           
            let minutes = Math.floor(left2/60);
            let seconds = Math.floor(left1%60);  
            
            if (interval>0) {
             cont.style.display="block";
             cont.innerHTML= `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;  
            } else if(interval<0){
              cont.style.display="block";
              cont.innerHTML="The day will come in future...."
            } else{
              cont.style.display="none";
            }
            
        }

}, 1000);


let guTime = localStorage.getItem("uTime");
if (guTime) {
 uTimeEl.value = guTime;
}


clr.addEventListener("click", ()=>{
    localStorage.clear();
    cont.innerHTML="";
    uTimeEl.value="";
    cont.style.display="none";
})
