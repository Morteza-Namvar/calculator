// Print input value in display area
const button = document.querySelectorAll('.btn');
for (let i = 0; i < button.length; i++){
    button[i].addEventListener("click", () => {
        calculate.display.value += button[i].value
    })
};

// Clear input value from display area
const ac = document.querySelector(".AC");
ac.addEventListener("click", () => {
    calculate.display.value = "";
});

// Clear last digit
const c = document.querySelector(".C");
c.addEventListener("click", ()=> {
    calculate.display.value = calculate.display.value.slice(0, -1);
});

// Calculate the data in display area
const equal = document.querySelector(".equal");
equal.addEventListener("click", () => {
    calculate.display.value = eval(calculate.display.value)
});