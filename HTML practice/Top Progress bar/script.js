/* =================== JS : top-progress-bar ==================================== */
window.onscroll = function() { updateProgressBar(); };

function updateProgressBar() {
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop; //documentElement referes to html tag
    let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollPercentage = (scrollTop / scrollHeight) * 100;
    document.querySelector(".top-progress-bar-js").style.width = scrollPercentage + "%";
}