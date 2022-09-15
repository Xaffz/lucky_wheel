

document.getElementById('btn-start').addEventListener('click' ,start);

const btn = document.getElementById('wheel-start');
var modal = document.getElementById('myModal');
var span = document.getElementsByClassName ("close")[0];

function start() {
    btn.classList.add('variant-1');
    setTimeout(function () {
    modal.style.display = "block";
    btn.classList.remove('variant-1');
    },4500);
    span.onclick = function() {
        modal.style.display="none";
    }
}

window.onclick =function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}