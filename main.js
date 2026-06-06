// FUNCTION OPEN LINK
function openLink(url){

  window.open(url, "_blank");

}

// ANIMATION BUTTON CLICK
const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {

  button.addEventListener("click", () => {

    button.style.transform = "scale(0.96)";

    setTimeout(() => {

      button.style.transform = "";

    }, 150);

  });

});

console.log("LINKCLEV READY");