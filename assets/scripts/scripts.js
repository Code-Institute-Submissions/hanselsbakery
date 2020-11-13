var formSerializedArray = {};
var inputDetails = {};
var formID;

/* DISPLAY MODAL FOR GALLERY CARDS AND JOIN US LINK IN THE PAGE HEADER */
$("#load-header").load("components/header/header-component.html");
$("#load-footer").load("components/footer/footer-component.html");

function loadModal() {
  $("#joinUsModal").load("components/modals/join-form-modal.html");
  $("#productInformationModal").load(
    "components/modals/product-information-modal.html"
  );
  $("#customerServiceModal").load(
    "components/modals/customer-service-modal.html"
  );
  $("#privacyPolicyModal").load("components/modals/privacy-policy-modal.html");
  $("#testimonialsModal").load("components/modals/testimonials-modal.html");
  $("#spinnerResponseModal").load("components/modals/spinner-modal.html");
}

$(window).on("load", loadModal);

function displayModal() {
  const clickedLink = $(this).text();
  if (clickedLink === "JOIN US" || clickedLink === "Join Us Now") {
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
  $(".imgThumbnail").on("click", function (event) {
    $(".originalImage").attr("src", $(this).find("img").attr("src"));
    $("#imgModal").modal("show");
  });
});

$(document).on("submit", "form", function (event) {
  formID = event.target.id;
  formSerializedArray = {};
  event.preventDefault();
  $("#formResponseModal").load("components/modals/form-response-modal.html");
  $("#responseTitle").append("");
  $("#responseMessage").append("");
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
/**
 *
 * @param {string} userDetails
 */
function displayJoinUsResponse(userDetails) {
  $(".joinUs").modal("hide");
  setTimeout(() => {
    $("#spinnerResponse").modal({
      backdrop: "static",
      keyboard: false,
      show: true,
    });
  }, 200);

  setTimeout(() => {
    $("#spinnerResponse").modal("hide");
  }, 2500);
  setTimeout(() => {
    $("#responseTitle").append("Thank you!");
    $("#responseMessage").append(
      "Thank you, for signing up with us! We will be sending our updates to the following email: ",
      userDetails.joinEmail
    );
    $("#userResponse").modal("show");
  }, 3000);
}

function displayBookingResponse(userDetails) {
  setTimeout(() => {
    $("#spinnerResponse").modal({
      backdrop: "static",
      keyboard: false,
      show: true,
    });
  }, 200);
  setTimeout(() => {
    $("#spinnerResponse").modal("hide");
  }, 2500);
  setTimeout(() => {
    $("#responseTitle").append("Booking Confirmation");
    $("#responseMessage").append(
      "Thank you ",
      userDetails.firstName,
      ", for booking a table with us! We can confirm that you have booked a table for ",
      userDetails.peopleQuantity,
      " people, on ",
      userDetails.bookingDate,
      " at ",
      userDetails.bookingTime,
      "."
    );
    $("#userResponse").modal("show");
  }, 3000);
}

function displayContactResponse(userDetails) {
  setTimeout(() => {
    $("#spinnerResponse").modal({
      backdrop: "static",
      keyboard: false,
      show: true,
    });
  }, 200);
  setTimeout(() => {
    $("#spinnerResponse").modal("hide");
  }, 2500);
  setTimeout(() => {
    $("#responseTitle").append("Confirmation");
    $("#responseMessage").append(
      "Thank you ",
      userDetails.fullName,
      ", for getting in contact with us! You will receive a response to your message as soon as possible to: ",
      userDetails.contactEmail
    );
    $("#userResponse").modal("show");
  }, 3000);
}

$(function () {
  $(document).on("click", ".clickedLink", function (e) {
    const clickedTab = $(this).text();
    e.preventDefault();
    if (clickedTab === "All Cakes") {
      e.preventDefault();
      $("#cupcakes").tab("show");
      $("#one-layer-cakes").tab("show");
      $("#two-layer-cakes").tab("show");
      $("#party-cakes").tab("show");
    } else if (
      clickedTab === "Cupcakes" ||
      clickedTab === "One Tier Cakes" ||
      clickedTab === "Two Tier Cakes" ||
      clickedTab === "Special Event Cakes"
    ) {
      e.preventDefault();
      $("#cupcakes").removeClass("active");
      $("#one-layer-cakes").removeClass("active");
      $("#two-layer-cakes").removeClass("active");
      $("#party-cakes").removeClass("active");
    }
    e.preventDefault();
  });
});

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
