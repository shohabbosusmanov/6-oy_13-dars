let display = document.querySelector("#screen");
let res = document.querySelector("#res");
let grid = document.querySelector("#grid");

grid.addEventListener("click", (event) => {
    let button = event.target;

    console.log(button);

    if (button.id == "grid") {
        return;
    } else if (
        button.id == "div" ||
        button.id == "mul" ||
        button.id == "sub" ||
        button.id == "add"
    ) {
        if (
            button.id == "div" ||
            (button.id == "mul" && display.textContent.trim() == "")
        ) {
            return;
        }
        display.textContent += button.textContent.trim();
    } else if (button.id == "clear") {
        display.textContent = "";
        res.textContent = "";
    } else if (button.id == "delete") {
        display.textContent = display.textContent.slice(0, -1) || "";
    } else if (button.id == "eq") {
        res.textContent = `= ${eval(display.textContent.trim())}`;
        display.textContent = eval(display.textContent.trim());
    } else {
        display.textContent += button.textContent.trim();
    }
});
