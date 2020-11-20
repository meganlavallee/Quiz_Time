// Global Variables

var time = "";

const startBtn = document.querySelector("#start");
const startPrompt = document.querySelector("#start-prompt");
const questionContainer = document.querySelector("#modern-photo");
const startTimer = document.querySelector("#timer");

//Click Event Handler
startPrompt.addEventListener("click", function (e){});
startBtn.addEventListener("click", function(){
    //Start Timer
setInterval(() => {
    time -- ;
    console.log(time);
}, 1000);
})


//Hide Start Prompt
startPrompt.style.display = "none";

//Show Question Container
questionContainer.style.display ="block";


    function ShowHidePrompt(value)
    {
        if(parseInt(value) == 0)
            document.getElementById("divPrompt").style.display="block";
        else
        document.getElementById("divPrompt").style.display="none";
    }

