
let selectedTd
let selectedTd_1
let selectedTd_2

function highlight(node) {
  if (selectedTd) {
    selectedTd.classList.remove('choosers__el-two_active');
  }
  selectedTd = node;
  selectedTd.classList.add('choosers__el-two_active');
}

function highlightSecond(node_1, node_2) {
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
    console.log(e.target)
    highlight(el)
  })
})

document.querySelectorAll('.choosers .choosers__el.choosers__el-one button').forEach((el) => {
  el.addEventListener('click', (e) => {
    highlightSecond(el, el.querySelector('span'))
  })
})