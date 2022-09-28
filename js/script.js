let input = document.querySelector("input");
let changer = document.querySelector(".switch");
let views = document.getElementById("views");
let price = document.getElementById("price");
let shower = document.querySelector("small");

let rates = [2, 9, 16, 70, 120];
let yearly = [];
let products = ["5k", "50k", "100k", "500k", "1M"];
let yearly_pricing = false;
input.addEventListener("input", (e) => {
    if (yearly_pricing) {

        change(yearly);
    } else {
        change(rates)
    }

});
rates.forEach((e, i) => {

    let to_minus = ((e * 12) / 100) * 25;
    let total_25_percent = (e * 12) - to_minus;

    yearly.push(total_25_percent);
})

changer.addEventListener("click", (e) => {
    if (changer.classList.contains("active")) {
        yearly_pricing = false;
        shower.innerHTML = "/month";
        changer.classList.remove("active");
        change(rates);


    } else {
        yearly_pricing = true;
        shower.innerHTML = "/year";


        changer.classList.add("active");
        change(yearly);


    }

});

function change(arr) {
    let value = document.querySelector("input").value;
    let prate = arr[value];
    let white = 100 - (value * 25);
    console.log(white);


    let pproduct = products[value];
    views.innerHTML = `${pproduct}  `;
    price.innerHTML = `$${prate}.00`;
    input.style.background = `linear-gradient(to left, var(--LightGrayishBlue) ${100 -(value*25)}%, var(--SoftCyan) ${value*25}%)`;

}