let stopflights = 0;

const spaceCraft = document.querySelectorAll(".spaceCraft");
const canon = document.querySelector("#canon_container > div");



const StopSpaceShips=(flySpaceCraft)=>
{
    clearInterval(flySpaceCraft); 
}
 
const flyspaceCraft = (spaceship,flightSpeed)=>
{
    let FLY_DURATION=0 
  
    const flySpaceCraft1 = setInterval(() =>
    {
            
            if(stopflights >= 60)
            {
                StopSpaceShips(flySpaceCraft1); 
            }
            else
            {   
                FLY_DURATION += flightSpeed;

                if(stopflights < FLY_DURATION)
                {
                    stopflights = FLY_DURATION;
                }
            }
        
        spaceship.style.marginTop = `${FLY_DURATION}vh`;
    
    }, 1000);
    return flySpaceCraft1;
}





const main = (()=>
{


    const FULL_DASH_ARRAY = 283;
    const WARNING_THRESHOLD = 10;
    const ALERT_THRESHOLD = 5;
    
    const COLOR_CODES = {
      info: {
        color: "green"
      },
      warning: {
        color: "orange",
        threshold: WARNING_THRESHOLD
      },
      alert: {
        color: "red",
        threshold: ALERT_THRESHOLD
      }
    };
    
    const TIME_LIMIT = 90;
    let timePassed = 0;
    let timeLeft = TIME_LIMIT;
    let timerInterval = null;
    let remainingPathColor = COLOR_CODES.info.color;
    
    document.getElementById("app").innerHTML = `
    <div class="base-timer">
      <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g class="base-timer__circle">
          <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
          <path
            id="base-timer-path-remaining"
            stroke-dasharray="283"
            class="base-timer__path-remaining ${remainingPathColor}"
            d="
              M 50, 50
              m -45, 0
              a 45,45 0 1,0 90,0
              a 45,45 0 1,0 -90,0
            "
          ></path>
        </g>
      </svg>
      <span id="base-timer-label" class="base-timer__label">${formatTime(
        timeLeft
      )}</span>
    </div>
    `;
    
    startTimer();
    
    function onTimesUp() {
      clearInterval(timerInterval);
    }
    
    function startTimer() {
      timerInterval = setInterval(() => {
        timePassed = timePassed += 1;
        timeLeft = TIME_LIMIT - timePassed;
        document.getElementById("base-timer-label").innerHTML = formatTime(
          timeLeft
        );
        setCircleDasharray();
        setRemainingPathColor(timeLeft);
    
        if (timeLeft === 0) {
          onTimesUp();
        }
      }, 1000);
    }
    
    function formatTime(time) {
      const minutes = Math.floor(time / 60);
      let seconds = time % 60;
    
      if (seconds < 10) {
        seconds = `0${seconds}`;
      }
    
      return `${minutes}:${seconds}`;
    }
    
    function setRemainingPathColor(timeLeft) {
      const { alert, warning, info } = COLOR_CODES;
      if (timeLeft <= alert.threshold) {
        document
          .getElementById("base-timer-path-remaining")
          .classList.remove(warning.color);
        document
          .getElementById("base-timer-path-remaining")
          .classList.add(alert.color);
      } else if (timeLeft <= warning.threshold) {
        document
          .getElementById("base-timer-path-remaining")
          .classList.remove(info.color);
        document
          .getElementById("base-timer-path-remaining")
          .classList.add(warning.color);
      }
    }
    
    function calculateTimeFraction() {
      const rawTimeFraction = timeLeft / TIME_LIMIT;
      return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
    }
    
    function setCircleDasharray() {
      const circleDasharray = `${(
        calculateTimeFraction() * FULL_DASH_ARRAY
      ).toFixed(0)} 283`;
      document
        .getElementById("base-timer-path-remaining")
        .setAttribute("stroke-dasharray", circleDasharray);}







        

//Declaration of Variables
const spaceCraft = document.querySelectorAll(".spaceCraft");
const canon = document.querySelector("#canon_container > div:nth-child(2)");
const Luanch = document.querySelector("#canon_container > div:nth-child(1) ");

let spaceCraft1 = spaceCraft[0];
let spaceCraft2 = spaceCraft[1];
let spaceCraft3 = spaceCraft[2];
let spaceCraft4 = spaceCraft[3];
let spaceCraft5 = spaceCraft[4];



const flightSpeed = [1,2,3,4,5,6];

    let random = Math.floor(Math.random()*5);
    let ShipEntity1=flyspaceCraft(spaceCraft1,flightSpeed[random]);

    random = Math.floor(Math.random()*5);
    let ShipEntity2=flyspaceCraft(spaceCraft2,flightSpeed[random]);

    random = Math.floor(Math.random()*5);
    let ShipEntity3=flyspaceCraft(spaceCraft3,flightSpeed[random]);

    random = Math.floor(Math.random()*5);
    let ShipEntity4=flyspaceCraft(spaceCraft4,flightSpeed[random]);

    random = Math.floor(Math.random()*5);
    let ShipEntity5=flyspaceCraft(spaceCraft5,flightSpeed[random]);

    let margin = 0;
    let count=0
    let luanch_flag= false;

    document.addEventListener("keydown",(event)=>{
        
       

        if(event.key == "ArrowLeft")
        {
            if(count>0)
            {
            margin = margin - 20.5;
            count--;
            canon.style.marginLeft = `${margin}%`

            if(luanch_flag===false)
            {
                Luanch.style.marginLeft = `${margin}%`;
            }
            
            }
            console.log(`${count}`)
           
        }
        if (event.key ==="ArrowRight")
        {

            if(count<4)
            {
                count++;

            margin = margin + 20.5;
           
            canon.style.marginLeft = `${margin}%`;

            if(luanch_flag===false)
            {
                Luanch.style.marginLeft = `${margin}%`;
            }
            

            }

        }
        
    })

    let Move=0;
    let Spacebarpressed=0
 
    document.addEventListener("keydown",(event)=>
    {
        
        if(event.key ===" ")
        {   

            luanch_flag= true;

            Spacebarpressed+=1
            console.log(Spacebarpressed)
            
            if(Spacebarpressed===1)
            {
                const canonclock=setInterval(() => 
                {   
                

                    Luanch.innerHTML = "<img src='./img/shipnnew.png' class='bullet' class='cannonimg'>";

                    const bullet = document.querySelector(".bullet");

                    const SpaceShipLocation = spaceCraft[count].getBoundingClientRect();

                    bullet.style.bottom= `${Move+=10}px`;

                    const BulletPosition = bullet.getBoundingClientRect();
                    
                    const TravelDistanceUpdate= BulletPosition.bottom-SpaceShipLocation.bottom;
                    
                    

                    console.log(TravelDistanceUpdate)

                    if(TravelDistanceUpdate<=0)
                {
                    clearInterval(canonclock);
                    StopSpaceShips(ShipEntity1);
                    StopSpaceShips(ShipEntity2);
                    StopSpaceShips(ShipEntity3);
                    StopSpaceShips(ShipEntity4);
                    StopSpaceShips(ShipEntity5);

                    clearInterval(timerInterval);
                    
                    
                }
                }, 100);

            }
        }
                
        
            
    })

    const PlayerName=document.querySelector("#name");
    const WelcomeScreen = document.querySelector("#WelcomeName")
    const PlayScreen = document.querySelector("#RulesPlay");
    const NextButtonName=document.querySelector("#NameButtonNext");

    NextButtonName.addEventListener("click",()=>
    {
        WelcomeScreen.classList.add("hide");
        WelcomeScreen.classList.remove("gridAlign");

        PlayScreen.classList.remove("hide");
        PlayScreen.classList.add("gridAlign")
    });

    const PlayButton=document.querySelector("#PlayButton");

    const RulesButton=document.querySelector("#RulesButton");
    const mainScreen = document.querySelector("main");
    const GameRules = document.querySelector("GameRules");
    const rulesContainer = document.querySelector(".rulesbook")
    const TimerSection= document.querySelector("#TimerSection")


    const playtheme = new Audio("");


    PlayButton.addEventListener("click",()=>
    {

        PlayScreen.classList.remove("gridAlign");
        PlayScreen.classList.add("hide")

        TimerSection.classList.remove("hide");
        mainScreen.classList.remove("hide");


    });

    RulesButton.addEventListener("click",()=>
    {
       rulesContainer.classList.remove(hide);
       
    });






    
    

})();
