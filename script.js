const items = document.getElementsByClassName("item");
const leftBox = document.getElementById("left");

const rightBox = document.getElementById("right");

let selected = null;

for(let item of items) {
    item.addEventListener("dragstart", function(e) {
        selected = e.target;
    })
}

rightBox.addEventListener("dragover", function(e) {
    e.preventDefault();
})

rightBox.addEventListener("drop", function(e) {
    if(selected) {
        rightBox.appendChild(selected);
        selected = null;
    }
})

leftBox.addEventListener("dragover", function(e) {
    e.preventDefault();
})

leftBox.addEventListener("drop", function(e) {
    if(selected) {
        leftBox.appendChild(selected);
        selected = null;
    }
})