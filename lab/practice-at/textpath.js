const textPath = document.querySelector("#text-path");

const h = document.documentElement, 
      b = document.body,
      st = 'scrollTop',
      sh = 'scrollHeight';

document.addEventListener("scroll", e => {
  let percent = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 150;
  textPath.setAttribute("startOffset", (-percent * 500) + 750)
});

var element = jQuery('.Inner-Div').clone();
element.appendTo('some element');
