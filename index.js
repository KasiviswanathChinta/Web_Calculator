(function() {
    let screen = document.querySelector("#screen");
    let buttons = document.querySelectorAll(".btn");
    let equal = document.querySelector(".btn-equal");
    let clear = document.querySelector(".btn-clear");

    buttons.forEach(function(buttons){
        buttons.addEventListener("click", function(e) {
            let value = e.target.dataset.num;
            screen.value += value;
        })
    })

    equal.addEventListener("click", function(e) {
        if(screen.value === ""){
            screen.value = "";
        }
        else {
            let solution = eval(screen.value);
            screen.value = solution;
        }
    })

    clear.addEventListener("click", function(e) {
        screen.value = "";
    })
})();