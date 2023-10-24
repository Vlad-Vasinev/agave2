import vars from '../_vars';

// export const disableScroll = () => {
//   // console.log('disableScroll')
//   const fixBlocks = document?.querySelectorAll('.fixed-block');
//   const pagePosition = window.scrollY;
//   const paddingOffset = window.innerWidth - vars.bodyEl.offsetWidth;

//   vars.htmlEl.style.scrollBehavior = 'none';
//   fixBlocks.forEach(el => {
//     el.style.paddingRight =
//       (+window.getComputedStyle(el).paddingRight.replace(/px/g, '') + paddingOffset) + 'px';
//   });
//   vars.bodyEl.style.paddingRight = paddingOffset + 'px';
//   vars.bodyEl.classList.add('dis-scroll');  
// }

export const disableScroll = () => {

  console.log("disable header")

  const fixBlocks = document?.querySelectorAll('.fixed-block');
  const pagePosition = window.scrollY;
  const paddingOffset = window.innerWidth - vars.bodyEl.offsetWidth;

  vars.htmlEl.style.scrollBehavior = 'none';
  fixBlocks.forEach(el => {
    el.style.paddingRight =
      ((+window.getComputedStyle(el).paddingRight.replace(/px/g, '')) + paddingOffset) + 'px';
  });
  vars.bodyEl.style.paddingRight = paddingOffset + 'px';
  vars.bodyEl.classList.add('dis-scroll');
  vars.bodyEl.dataset.position = pagePosition;
  vars.bodyEl.style.top = `-${pagePosition}px`;
}