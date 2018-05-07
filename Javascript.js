var purpleBfly = document.getElementById("purpleBfly");
var yellowBfly = document.getElementById("yellowBfly");
var redStopLight = document.getElementById("redStopLight");
var greenStopLight = document.getElementById("greenStopLight");
var winnersText = document.getElementById("winnersText");
var winningBfly = document.getElementById("winningBfly");
winningBfly.style.display = 'none';

var pFly = 0;
var yFly = 0;


function changeLight(){
    redStopLight.src="Photos/greenStopLight.PNG";
}

function startRace()
{

    setTimeout(function() {
        var newPfly = (Math.random() * 100) + pFly;
        var newYfly = (Math.random() * 100) + yFly;
    
        purpleBfly.style.marginLeft = newPfly + 'px';
    
        yellowBfly.style.marginLeft = newYfly + 'px';
    
        pFly = newPfly;
        yFly = newYfly;
    
        var purpleDistance = purpleBfly.style.marginLeft.slice(0, -2);
        var yellowDistance = yellowBfly.style.marginLeft.slice(0, -2);
    
        var width = screen.width;
    
        if (purpleDistance >= width - 200)
        {
            winningBfly.style.display = "inline";
            winningBfly.src = "Photos/purpleButterfly.PNG";
            winnersText.innerHTML = "PURPLE BUTTERFLY WINS!";
        }
        else if (yellowDistance >= width - 200)
        {
            winningBfly.style.display = "inline";
            winningBfly.src = "Photos/yellowButterfly.PNG";
            winnersText.innerHTML = "YELLOW BUTTERFLY WINS!";
        }
        else 
        {
            startRace();
        }
    }, 500);
}    



function reset()
{
    redStopLight.src = "Photos/redStopLight.PNG";
    winnersText.innerHTML = "The Butterfly Effect";
    winningBfly.style.display = 'none';
    purpleBfly.style.marginLeft = 0;
    yellowBfly.style.marginLeft = 0;
    purpleDistance = 0;
    yellowDistance = 0;
    newPfly = 0;
    newYfly = 0;
    pFly = 0;
    yFly = 0;
}