const imagenesCarousel = $(".carousel-item img");

const exampleModal = $("#exampleModal");

console.log(imagenesCarousel);

imagenesCarousel.on("click", function () {
  console.log("Imagen clickeada:", $(this).attr("src"));
  exampleModal.modal("show");
  const modalImage = $("#modalImage");
  modalImage.attr("src", $(this).attr("src"));
});