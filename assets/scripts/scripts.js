/* DISPLAY MODAL FOR GALLERY CARDS AND JOIN US LINK IN THE PAGE HEADER */

$(function () {
  $("#load-header").load("components/header/header-component.html");
  $("#load-footer").load("components/footer/footer-component.html");
});

function loadModalComponent() {
  $("#joinUsModal").load("components/modals/join-form-modal.html");
}

$(window).on("load", loadModalComponent);

function displayModal() {
  const clickedLink = $(this).text();
  if (clickedLink === "JOIN US" || clickedLink === "Join Us Now") {
    $("#joinUs").modal("show");
  } else if (clickedLink === "Product Information") {
    alert(clickedLink);
  } else if (clickedLink === "Customer Service") {
    alert(clickedLink);
  } else if (clickedLink === "Privacy Policy and GDPR") {
    alert(clickedLink);
  } else if (clickedLink === "Testimonials") {
    alert(clickedLink);
  }
}

$(document).on("click", ".clickCustomModal", displayModal);

$(function () {
  $(".imgThumbnail").on("click", function () {
    $(".originalImage").attr("src", $(this).find("img").attr("src"));
    $("#imgModal").modal("show");
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
