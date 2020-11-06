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

  if (formID === "join-form-modal") {
    formSerializedArray = serializeFormArray(formID);
    deconstructFormArray(formSerializedArray);
  } else if (formID === "join-form-footer") {
    formSerializedArray = serializeFormArray(formID);
    deconstructFormArray(formSerializedArray);
  } else if (formID === "booking-form") {
    formSerializedArray = serializeFormArray(formID);
    deconstructFormArray(formSerializedArray);
  } else if (formID === "contact-form") {
    formSerializedArray = serializeFormArray(formID);
    deconstructFormArray(formSerializedArray);
  }
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
  console.log(inputDetails);
  displayUserResponse(inputDetails);
}

function displayUserResponse(userDetails) {
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

$("#userResponse").on("hidden.bs.modal", function (e) {
  location.reload();
});
