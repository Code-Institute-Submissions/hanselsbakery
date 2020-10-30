
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

/*-------------------- ADD MODAL JOIN FORM ----------------------*/
$('#join-form').append(
'<div class="modal fade" id="joinModal" tabindex="-1" role="dialog" aria-labelledby="joinModelLabel" aria-hidden="true">'+
  '<div class="modal-dialog modal-dialog-centered modal-lg">'+
    '<div class="modal-content">'+
      '<div class="modal-body">'+
        '<button type="button" class="close" data-dismiss="modal">'+
          '<span aria-hidden="true">&times;</span>'+
          '<span class="sr-only">Close</span>'+
        '</button>'+
        '<form>'+
              '<div class="form-group">'+
                '<h3>Join Our Newsletter</h3>'+
                '<!-- Join Email -->'+
                '<div class="form-group">'+
                  '<label for="join-email">Email Address</label>'+
                  '<input type="email" class="form-control" id="join-email" placeholder="Enter email" required />'+
                '</div>'+
                '<!-- Join Checkbox -->'+
                '<div class="form-group">'+
                  '<div class="form-check">'+
                    '<input class="form-check-input" type="checkbox" value="" id="join-checkbox" required />'+
                    '<label class="form-check-label" for="join-checkbox">'+
                      'Please, accept our Privacy Policy.'+
                    '</label>'+
                  '</div>'+
                '</div>'+
              '</div>'+
              '<button type="submit" class="btn btn-primary">'+
                'Subscribe!'+
              '</button>'+
            '</form>'+
      '</div>'+
    '</div>'+
  '</div>'+
'</div>');

/* DISPLAY MODAL FOR GALLERY CARDS AND JOIN US LINK IN THE PAGE HEADER */

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
