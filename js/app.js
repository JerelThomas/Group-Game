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
 
    document.addEventListener("keydown",(event)=>
    {
        
        if(event.key ===" ")
        {   

            luanch_flag= true; 
       
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
            
            }
            }, 100);

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

    const playtheme = new Audio("");


    PlayButton.addEventListener("click",()=>
    {

        PlayScreen.classList.remove("gridAlign");
        PlayScreen.classList.add("hide")

        mainScreen.classList.remove("hide");


    });

    RulesButton.addEventListener("click",()=>
    {
       rulesContainer.classList.remove(hide);
       
    });
    

})();
