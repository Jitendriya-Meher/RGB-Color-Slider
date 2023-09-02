
const result = document.querySelector(".result input");
const copyBtn = document.querySelector("#copy-btn");

const sliders = document.querySelectorAll(".wrapper input[type='range']");

const red = document.querySelector("#red");
const green = document.querySelector("#green");
const blue = document.querySelector("#blue");

console.log(result, sliders, red, green, blue);


let generateColor = () => {
    let rColor = red.value;
    let gColor = green.value;
    let bColor = blue.value;

    let finalColor = `rgb(${rColor}, ${gColor}, ${bColor})`;

    // console.log(finalColor);
    // console.log(result.value);

    result.value = finalColor;

    document.body.style.backgroundColor = finalColor;
}

sliders.forEach((slider) => {
    slider.addEventListener("input",generateColor);
});

window.addEventListener("load", generateColor);

const copy = ()=>{
    navigator.clipboard.writeText(result.value);
    copyBtn.textContent = "Copied";

    setTimeout(()=>{
        copyBtn.textContent = "Copy Color Code";
    },500);
}

copyBtn.addEventListener("click",copy);