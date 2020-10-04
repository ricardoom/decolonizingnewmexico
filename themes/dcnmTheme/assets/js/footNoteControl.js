function noteControl() {

const sup = document.querySelectorAll('sup');
const noteHeading = document.querySelector('.footnotes h4');

// First to make this work we need to remove the following hr:
let rule = noteHeading.nextElementSibling;
rule.remove();


  let button = noteHeading.querySelector('button');
  let target = noteHeading.nextElementSibling;
  // button.onclick = () => {
  //   let expanded = button.getAttribute('aria-expanded') === 'true';
  //   button.setAttribute('aria-expanded', !expanded);
  //   target.hidden = expanded;
  // }

  function expando() {
    console.log('expando clicked');
    let expanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', !expanded);
    target.hidden = expanded;
  }
  button.addEventListener('click', expando)
  //button.addEventListener(onclick, expandNotes);
  //  button.onclick = expandNotes();
  // sup.onclick = expandNotes();
};

export { noteControl };