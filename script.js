tl = gsap.timeline();
tl.from("#input-container", {
    y: -300,
    duration: 1,
    delay: 1,
})
tl.from(".btns", {
    scale: 0,
    duration: 0.7,
})
window.addEventListener("load", function() {
    inputField.focus();
});

const inputField = document.querySelector("#input");
function solve(val) {
    inputField.value +=  val;
};
function result() {
    try{
        const expression = inputField.value; 
        if(expression.trim() === ""){
            inputField.value = "";
        }
        else{
            let result = eval(expression);
            inputField.value = result;
        }
    }
    catch{
        inputField.value = "Error";
    }

}
function clearInput(){
    inputField.value = '';
}

function handleKeys(event) {
    let key = event.key;
    if(key.match(/[0-9+\-*/.=]/)){
        solve(key)
    }
    else if(key === "Enter"){
        result();
    }
    else if(key === "Backspace"){
        clearInput();
    }
}

const btns = document.querySelectorAll(".btns");

btns.forEach((btn) => {
    btn.addEventListener("mousedown", () => {
        btn.style.transform = "scale(0.9)";
    });

    btn.addEventListener("mouseup", () => {
        btn.style.transform = "scale(1)";
    });
});
function changeTheme() {
    let theme = document.querySelector(".theme");
    let appColor = document.querySelectorAll(".app-color");
    let appShadow = document.querySelectorAll(".app-shadow");
    let inputContainer = document.querySelector(".input-container-dark");
    let inputDark = document.querySelector(".input-dark");

    theme.classList.toggle("theme-light");
    inputContainer.classList.toggle("input-container-light");
    inputDark.classList.toggle("input-light");

    appColor.forEach((color) => {
        color.classList.toggle("app-color-light")
    });
    appShadow.forEach((color) => {
        color.classList.toggle("app-shadow-light")
    });
}

inputField.addEventListener("keydown", handleKeys)
