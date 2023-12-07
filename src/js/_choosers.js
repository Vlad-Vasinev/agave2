

document.querySelectorAll('.choosers .choosers__el.choosers__el-two button').forEach((el) => {
  el.addEventListener('click', (e) => {
    console.log(e)
    el.classList.toggle('choosers__el-two_active')
  })
})

document.querySelectorAll('.choosers .choosers__el.choosers__el-one button').forEach((el) => {
  el.addEventListener('click', () => {
    el.querySelector('span').classList.toggle('choosers__el_show')
    el.classList.toggle('choosers__el-one_active')
  })
})