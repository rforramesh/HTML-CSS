
const arr = document.getElementsByTagName("figure");
let ptr = -1;
func("Next");    //Initialize with first card

function func(str) {
    if (str === "Next") ptr = (ptr + 1) % arr.length; //forward circular array traversal
    if (str === "Back") ptr = (ptr - 1 + arr.length) % arr.length; //backward circular array traversal
    for (let i = 0; i < arr.length; i++) {
        arr[i].style.display = "none";
    }
    arr[ptr].style.display = "block";
}
