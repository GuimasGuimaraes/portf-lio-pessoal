$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
  });
});

var typed = new Typed(".typing", {
  strings: [
    "Desenvolvedor",
    "Front-end",
    "Estudante de Engenharia de Software",
    "E estou a procura de uma oportunidade",
  ],
  typeSpeed: 50,
  backSpeed: 60,
  loop: true,
});
var typed = new Typed(".typing-2", {
  strings: ["Desenvolvimento Web", "E Desenvolvimento FullStack"],
  typeSpeed: 50,
  backSpeed: 60,
  loop: true,
});
