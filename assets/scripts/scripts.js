/* DISPLAY MODAL FOR GALLERY CARDS AND JOIN US LINK IN THE PAGE HEADER */

$("#load-header").load("components/header/header-component.html");
$("#load-footer").load("components/footer/footer-component.html");

function loadModalComponent() {
  $(".joinUsModal").load("components/modals/join-form-modal.html");
  $("#productInformationModal").load(
    "components/modals/product-information-modal.html"
  );
  $("#customerServiceModal").load(
    "components/modals/customer-service-modal.html"
  );
  $("#privacyPolicyModal").load("components/modals/privacy-policy-modal.html");
  $("#testimonialsModal").load("components/modals/testimonials-modal.html");
}

$(window).on("load", loadModalComponent);

function displayModal() {
  const clickedLink = $(this).text();
  if (clickedLink === "JOIN US") {
    $(".joinUs").modal("show");
  } else if (clickedLink === "Join Us Now") {
    $(".joinUs").modal("show");
  } else if (clickedLink === "Product Information") {
    $("#product-information").modal("show");
  } else if (clickedLink === "Customer Service") {
    $("#customer-service").modal("show");
  } else if (clickedLink === "Privacy Policy and GDPR") {
    $("#privacy-policy").modal("show");
  } else if (clickedLink === "Testimonials") {
    $("#testimonials").modal("show");
  }
}

$(document).on("click", ".clickCustomModal", displayModal);

$(function () {
  $(".imgThumbnail").on("click", function () {
    $(".originalImage").attr("src", $(this).find("img").attr("src"));
    $("#imgModal").modal("show");
  });
});

$(document).ready(function () {
  $("#form-response").submit(function (event) {
    event.preventDefault();
    alert("worked");
  });
});

/*-------------------- DATEPICKER.JS LIBRARY FUNCTION ----------------------*/

$(document).ready(function () {
  var date_input = $('input[name="date"]'); //our date input has the name "date"
  var options = {
    format: "dd/mm/yy",
    startDate: "today",
    maxViewMode: 0,
    todayBtn: true,
    autoclose: true,
    todayHighlight: true,
    toggleActive: true,
  };
  date_input.datepicker(options);
});
