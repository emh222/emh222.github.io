var purpleBfly = document.getElementById("purpleBfly");
var yellowBfly = document.getElementById("yellowBfly");
var redStopLight = document.getElementById("redStopLight");
var winningBfly = document.getElementById("winningBfly");
winningBfly.style.display = 'none';
var pFly = Math.random() *100;
var yFly = Math.random() * 100;
var raceStarted = false;


function changeLight()
{
    image.src = "Photos/greenStopLight.PNG";
}

function startRace()
{
    raceStarted = true;

    setTimeout(function () {
        var newPfly = (math.random() * 100) + pFly;
        var newYfly = (math.random() * 100) + yFly;

        purpleBfly.style.marginLeft = newPfly + 'px';

        yellowBfly.style.marginLeft = newYfly + 'px';

        pFly = newPfly;
        yFly = newYfly;

        var purpleDistance = purpleBfly.style.marginLeft.slice(0, -2);
        var yellowDistance = yellowBfly.style.marginLeft.slice(0, -2);

        var width = screen.width;

        if (purpleDistance >= width - 150)
        {
            docment.getElementById("winningBflyID").src = "Photos/purpleButterfly.png";
            winningBfly.style.display = 'inline';
            window.alert("the Purple Buttefly won!");
        }
        else if (yellowDistance >= width - 150)
        {
            document.getElementById("winningBflyID").src = "Photos/yellowButterfly.png";
            winningBfly.style.display = 'inline';
            window.alert("The Yellow Butterfly won!!");
        }
        else{
            raceStarted();
        }
    }, 500);
}

function reset()
{
    image.src = "Photos/redStopLight.PNG";
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