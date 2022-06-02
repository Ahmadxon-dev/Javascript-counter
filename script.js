let h1 = document.querySelector(".h");
let int = 0;
let inc = document.querySelector(".green");
let dec = document.querySelector(".red");
inc.addEventListener("click", function () {
    int++;
    h1.innerHTML = int;
});
dec.addEventListener("click", function () {
    int--;
    h1.innerHTML = int;
});
