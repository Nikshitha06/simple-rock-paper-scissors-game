const gameContainer = document.querySelector(".container"),
youResult = document.querySelector(".you_result img"),
botResult = document.querySelector(".bot_result img"),
result = document.querySelector(".result"),
optionImages = document.querySelectorAll(".option_image");


//loop
optionImages.forEach((image, index) => {
    image.addEventListener("click", (e) => {
        image.classList.add("active");

        youResult.src = botResult.src = "images/rock.png";
        result.textContent = "Playing...."
        //loop again
        optionImages.forEach((image2, index2) => {
            //doesn't match remove it
            index !== index2 && image2.classList.remove("active");
        });

        gameContainer.classList.add("start");
           
        let time = setTimeout(() => {
           gameContainer.classList.remove("start");

            //getting clicked option
        let imageSrc = e.target.querySelector("img").src;
        youResult.src = imageSrc;

        //generating random number b/w 0-2
         let randomNumber = Math.floor(Math.random() * 3);
         //creating an array
         let botImages = ["images/rock.png","images/paper.png","images/scissors.png"];
         botResult.src = botImages[randomNumber];
         let botValue = ["R","P","S"][randomNumber];
         let youValue = ["R","P","S"][index];

         let outcomes = {
            RR: "Draw",
            RP: "Bot",
            RS: "You",
            PP: "Draw",
            PR: "You",
            PS: "Bot",
            SS: "Draw",
            SR: "Bot",
            SP: "You",
        
         };

         let outComeValue = outcomes[youValue + botValue];
            
         result.textContent = youValue === botValue ? "Match Draw" : `${outComeValue} WON!!!`
         
         
         function confettii() {
            const start = () => {
                setTimeout(function(){
                    confetti.start();
                },1000);
            };
            const stop = () => {
                setTimeout(function(){
                    confetti.stop();
                },5000);
            };

        start();
        stop();
    }
    if(outComeValue === "You")
        {
     confettii();
        }
         console.log(outComeValue); 

        },2500)
    
    });
});

