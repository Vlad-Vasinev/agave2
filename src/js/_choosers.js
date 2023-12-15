
document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
  document.querySelector('.choosers .choosers__el.choosers__el-one button').classList.add('choosers__el-one_active')
  document.querySelector('.choosers .choosers__el.choosers__el-one button').querySelector('span').classList.add('choosers__el_show')
  document.querySelector('.choosers .choosers__el.choosers__el-two button').classList.add('choosers__el-two_active')
})

let selectedTd
let selectedTd_1
let selectedTd_2
function highlight(node) {
  document.querySelector('.choosers .choosers__el.choosers__el-two button').classList.remove('choosers__el-two_active')
  if (selectedTd) {
    selectedTd.classList.remove('choosers__el-two_active');
  }
  selectedTd = node;
  selectedTd.classList.add('choosers__el-two_active');
}
function highlightSecond(node_1, node_2) {
  document.querySelector('.choosers .choosers__el.choosers__el-one button').classList.remove('choosers__el-one_active')
  document.querySelector('.choosers .choosers__el.choosers__el-one button').querySelector('span').classList.remove('choosers__el_show')
  if (selectedTd_1, selectedTd_1) {
    selectedTd_1.classList.remove('choosers__el-one_active')
    selectedTd_2.classList.remove('choosers__el_show')
  }
  selectedTd_1 = node_1;
  selectedTd_1.classList.add('choosers__el-one_active');

  selectedTd_2 = node_2;
  selectedTd_2.classList.add('choosers__el_show');
}

document.querySelectorAll('.choosers .choosers__el.choosers__el-two button').forEach((el) => {
  
  el.addEventListener('click', (e) => {
    highlightSecond(document.querySelectorAll('.choosers .choosers__el.choosers__el-one button')[el.getAttribute("data-id")], document.querySelectorAll('.choosers .choosers__el.choosers__el-one button')[el.getAttribute("data-id")].querySelector('span'))
    highlight(el)
  })
})

document.querySelectorAll('.choosers .choosers__el.choosers__el-one button').forEach((el) => {
  el.addEventListener('click', (e) => {
    highlight(document.querySelectorAll('.choosers .choosers__el.choosers__el-two button')[el.getAttribute("data-id")])
    highlightSecond(el, el.querySelector('span'))
  })
})