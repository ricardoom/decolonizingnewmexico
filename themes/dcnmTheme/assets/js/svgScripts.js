//
// Scripts only related to working the SVGs
//

const heroDimension = document.querySelector('.hero-svg');

function heroSvg() {
  const width = heroDimension.clientWidth;
  const height = heroDimension.clientHeight;
  // console.log(`${width} X ${height}`);
  heroDimension.setAttribute('width', width);
  heroDimension.setAttribute('height', height);
  // console.log(heroDimension.attributes);
  // heroDimension.attributes["viewBox"].value = `0 0 ${width} ${height}`;
  // heroDimension.setAttribute(`viewBox`, `0 0 ${width} ${height}`);
} 

export { heroSvg }