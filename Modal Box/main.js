//height adjust
function adjust() {
    var slant =  document.getElementById('slant');
    slant.style.height = (window.innerHeight / 2) + 'px';
}
adjust();
setInterval(adjust,500);

//modal
var modal = document.getElementById('modal');
var btn = document.getElementById('modalBtn');
var close = document.getElementById('closeBtn');

btn.addEventListener('click', showModal);
function showModal() {
    modal.style.display = 'block';
}
close.addEventListener('click', closeModal);
function closeModal() {
    modal.style.display = 'none';
}
//outside click
window.addEventListener('click', outsideClick);
function outsideClick(e){
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}










