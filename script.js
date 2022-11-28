const openBtn1 = document.getElementById("pred");
const closeBtn1 = document.getElementById("closebtn-pr");
const modalContainerPr = document.getElementById("pr-modal-container");
const openBtn2 = document.getElementById("spd");
const modalContainerSp = document.getElementById("sp-modal-container");
const closeBtn2 = document.getElementById("closebtn-sp");
openBtn1.addEventListener('click', ()=>{
    modalContainerPr.classList.add('showpr');
});
closeBtn1.addEventListener('click', ()=>{
    modalContainerPr.classList.remove('showpr');
});
openBtn2.addEventListener('click', ()=>{
    modalContainerSp.classList.add('showpr');
});
function prup() {
    alert('Chỉ dành cho tài khoản Premium.');
}
