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

(function () {
  "use strict";
  window.addEventListener(
    "load",
    function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      const forms = document.getElementsByClassName("needs-validation");
      // Loop over them and prevent submission
      const validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add("was-validated");
              $("#customerResponseModal").modal();
              setTimeout(function () {
                location.reload();
              }, 10000);
          },
          false
        );
      });
    },
    false
  );
})();
