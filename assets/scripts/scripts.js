/* DISPLAY MODAL FOR GALLERY CARDS AND JOIN US LINK IN THE PAGE HEADER */

$(function () {
  $("#load-header").load("components/header/header-component.html");
});
$(function () {
  $("#load-footer").load("components/footer/footer-component.html");
});
$(function () {
  $("#join-form").append("components/modals/modal-component.html");
});

$(function () {
  $("#popModal").on("click", function () {
    $("#joinModal").modal("show");
  });
});

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
