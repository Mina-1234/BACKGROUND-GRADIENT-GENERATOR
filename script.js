let btn1=document.querySelector(".btn1");
    let btn2=document.querySelector(".btn2");
    let btn3=document.querySelector(".btn3");
    let btn4=document.querySelector(".btn4");
    let btn5=document.querySelector(".btn5");
    let copydiv=document.querySelector(".copyCode");
    let heading=document.querySelector("h2");
    const hexValue = () =>{
       let hex="0123456789ABCDEF";
       let colors="#";
       for (let i=0;i<6;i++){
       colors=colors+hex[Math.floor(Math.random()*16)];
       }
       return colors;
    };

     function getRandomDirection(){
const directions = [
  "to right",
  "to left",
  "to top",
  "to bottom"
//   `${Math.floor(Math.random() * 360)}deg` // random angle (0–359 degrees)
];
return directions[Math.floor(Math.random() * directions.length)];
  }


    const handleBtn1 = ()=>{
        let rgb1=hexValue();
        let rgb2=hexValue();
        
        const direction = getRandomDirection();
        console.log(rgb1);
        document.body.style.backgroundImage=
        `linear-gradient(${direction}, ${rgb1},${rgb2})`;
        btn1.textContent=`${rgb1}`;
        copydiv.innerHTML=`Background-image: linear-gradient(${direction},${rgb1},${rgb2})`;

        
    }
    const handleBtn2 = ()=>{
        let rgb1=hexValue();
        let rgb2=hexValue();
        let rgb3=hexValue();
        const direction = getRandomDirection();
        console.log(rgb2);
         document.body.style.backgroundImage=
        `linear-gradient(${direction}, ${rgb2},${rgb1},${rgb3})`;
         btn2.textContent=`${rgb2}`;
         copydiv.innerHTML=`Background-image: linear-gradient(${direction},${rgb1},${rgb2},${rgb3})`;
        
    };
    const handleBtn3 = ()=>{
        let rgb1=hexValue();    
        let rgb2=hexValue();
        let rgb3=hexValue();
        
        document.body.style.backgroundImage=`radial-gradient(${rgb1},${rgb2},${rgb3})`;
        btn3.textContent=`${rgb3}`;
        copydiv.innerHTML=`Background-image: radial-gradient(${rgb1},${rgb2},${rgb3})`;
    }

    const handleBtn4 = ()=>{
        let rgb1=hexValue();    
        let rgb2=hexValue();
        let rgb3=hexValue();
        let degrees=Math.floor(Math.random()*360);
        
        document.body.style.backgroundImage=`linear-gradient(${degrees}deg,${rgb1},${rgb2},${rgb3})`;
        btn4.textContent=`${degrees}deg,${rgb2}`;
        copydiv.innerHTML=`Background-image: linear-gradient(${degrees}deg,${rgb1},${rgb2},${rgb3})`;

    }

    const handleBtn5 = ()=>{
        let rgb1=hexValue();    
        let rgb2=hexValue();
        let rgb3=hexValue();
        const positions = [
            "center","top","bottom","left","right",
            "top left","top right","bottom left","bottom right"];
        const position = positions[Math.floor(Math.random() * positions.length)];
        
        document.body.style.backgroundImage=`radial-gradient(circle at ${position},${rgb1},${rgb2},${rgb3})`;
        btn4.textContent=`${position}deg,${rgb2}`;
        copydiv.innerHTML=`Background-image: radial-gradient(circle at ${position},${rgb1},${rgb2},${rgb3})`;

    }
    function copyCodeToClipboard() {
        const code = copydiv.textContent;
        navigator.clipboard.writeText(code).then(() => {
            alert("Code copied to clipboard!");
        }).catch(err => {
            console.error("Failed to copy code: ", err);
        });
    }
    heading.addEventListener("click",copyCodeToClipboard);  
    btn1.addEventListener("click",handleBtn1);
    btn2.addEventListener("click",handleBtn2);
    btn3.addEventListener("click",handleBtn3);
    btn4.addEventListener("click",handleBtn4);
    btn5.addEventListener("click",handleBtn5);

