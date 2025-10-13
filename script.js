
  const botones = document.querySelectorAll(".btn-tema");
  const temas = ["azul", "cafe", "gris", "claro"];

  botones.forEach((boton) => {
    boton.addEventListener("click", () => {
      document.body.classList.remove(...temas);
      const tema = boton.getAttribute("data-tema");
      if (tema) document.body.classList.add(tema);

  });
});

  if (typeof Swiper !== "undefined") {
    const swiper1 = new Swiper(".myswiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 1,      // 1 slide visible
      loop: true,
      coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 1.0,
      slideShadows: false,
      },
      keyboard: { enabled: true },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

  };
