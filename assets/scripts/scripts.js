/* DISPLAY MODAL FOR GALLERY CARDS AND JOIN US LINK IN THE PAGE HEADER */

$("#load-header").load("components/header/header-component.html");
$("#load-footer").load("components/footer/footer-component.html");

function loadModalComponent() {
  $("#joinUsHeaderModal").load("components/modals/join-form-modal.html");
  $("#joinUsFooterModal").load("components/modals/join-form-modal.html");
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

var formSerializedArray = {};
var inputDetails = {};

$(document).on("submit", "form", function (event) {
  var formID = event.target.id;
  formSerializedArray = {};
  event.preventDefault();
  if (formID === "join-form-modal") {
    formSerializedArray = serializeFormArray(formID);
    displayJoinUsResponse(deconstructFormArray(formSerializedArray));
  } else if (formID === "join-form-footer") {
    formSerializedArray = serializeFormArray(formID);
    displayJoinUsResponse(deconstructFormArray(formSerializedArray));
  } else if (formID === "booking-form") {
    formSerializedArray = serializeFormArray(formID);
    displayBookingResponse(deconstructFormArray(formSerializedArray));
  } else if (formID === "contact-form") {
    formSerializedArray = serializeFormArray(formID);
    displayContactResponse(deconstructFormArray(formSerializedArray));
  }
  $("#" + formID)
    .get(0)
    .reset();
  inputDetails = {};
});

function serializeFormArray(formID) {
  const formArray = $("#" + formID).serializeArray();
  return formArray;
}

function deconstructFormArray(formSerializedArray) {
  const keys = Object.values(formSerializedArray);

  for (const key of keys) {
    inputDetails[key.name] = key.value;
  }
  //alert(JSON.stringify(inputDetails));
  return inputDetails;
}

function displayJoinUsResponse(userDetails) {
  $("#formResponseModal").load("components/modals/form-response-modal.html");
  $(".joinUs").modal("hide");
  setTimeout(() => {
    $("#responseMessage").append(
      "Thank you, for signing up with us! You will receive our newsletter to this email: ",
      userDetails.joinEmail
    );
    $("#userResponse").modal("show");
  }, 1000);
}

function displayBookingResponse(userDetails) {
  $("#formResponseModal").load("components/modals/form-response-modal.html");
  setTimeout(() => {
    $("#responseMessage").append(
      "Thank you ",
      userDetails.firstName,
      ", for booking with us! We can confirm your booking for the ",
      userDetails.bookingDate,
      " at ",
      userDetails.bookingTime,
      " for ",
      userDetails.peopleQuantity,
      " people."
    );
    $("#userResponse").modal("show");
  }, 1000);
}

function displayContactResponse(userDetails) {
  $("#spinnerResponseModal").load("components/modals/spinner-modal.html");
  $("#formResponseModal").load("components/modals/form-response-modal.html");
  //display spinner in 100ms, to give enough time for spinner modal and response modal to load.
  setTimeout(() => {
    $("#spinnerResponse").modal({
      backdrop: "static",
      keyboard: false,
      show: true,
    });
  }, 500);
  //set spinner to hide 0.5s before response modal
  setTimeout(() => {
    $("#spinnerResponse").modal("hide");
  }, 5500);
  //append dynamic text to response modal and display it
  setTimeout(() => {
    $("#responseTitle").append("Thank you!");
    $("#responseMessage").append(
      "Thank you ",
      userDetails.fullName,
      ", for getting in contact with us! You will receive a response to your message as soon as possible to: ",
      userDetails.contactEmail
    );
    $("#userResponse").modal("show");
  }, 6000);
}

$("#timepicker").timepicker({
  timeFormat: "h:mm p",
  interval: 60,
  minTime: "10:00am",
  maxTime: "8:00pm",
  startTime: "10:00",
  dynamic: false,
  dropdown: true,
  scrollbar: true,
});

$(function () {
  $("#datepicker").datepicker({
    minDate: 1,
    maxDate: "+1M",
    dateFormat: "DD', 'dd' 'MM",
  });
});
