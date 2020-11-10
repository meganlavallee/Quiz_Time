const startBtn = document.querySelector("#start");
const startPrompt = document.querySelector("#start-prompt");
const questionContainer = document.querySelector("#modern-photo")

//Click Event Handler
startPrompt.addEventListener("click", function (e){});

//Start Timer
startTimer.addEventListener("click", start (e))

const start = startTimer.now();
setInterval(function() {
    const delta = startTimer.now() - start; 
    output(Math.floor(delta / 1000)); 
    output(startTime().toUTCString());
}, 1000);

//Hide Start Prompt
startPrompt.style.display = "none";

//Show Question Container
questionContainer.style.display ="block";

<input type="start-prompt" name="ShowHide" onclick="ShowHidePrompt(this.value)" value="0" checked /> Show <br/>

<input type="modern-photo" name="ShowHide" onclick="ShowHidePrompt(this.value)" value="1" /> Hide

    function ShowHidePrompt(value)
    {
        if(parseInt(value) == 0)
            document.getElementById("divPrompt").style.display="block";
        else
        document.getElementById("divPrompt").style.display="none";
    }

