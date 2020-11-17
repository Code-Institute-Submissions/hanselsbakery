/**
 * Global Variables
 */
var formSerializedArray = {};
var inputDetails = {};
var formID;
/**
 * Display header and footer.
 */

$("#load-header").load("components/header/header-component.html");
$("#load-footer").load("components/footer/footer-component.html");


/**
 * Loads all modals when window loads.
 */
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
  $("#galleryImageModal").load("components/modals/gallery-image-modal.html");
}

$(window).on("load", loadModal);


/**
 * This displays modals for Product Information,
 * Customer Service, Testimonials and Privacy Policy.
 * Also, it displays the join modal upon clicking 
 * the designated button.
 */
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

/**
 * Implements a click listener to all gallery images, 
 * and display a modal with full opened image and its name.
 */
$(function () {
  $(".imgThumbnail").on("click", function () {
    const cakeName = $(this).parent().text();
    $(".cake-name").empty();
    $(".cake-name")
      .css({ "font-size": "20px", padding: "3px 6px 3px 6px" })
      .append(cakeName);
    $(".originalImage").attr("src", $(this).find("img").attr("src"));
    $(".originalImage").css("border", "2px solid #fff");
    $("#imgModal").modal("show");
  });
});
/**
 * On form submit get form ID passes it to function to be serialized,
 * deconstruct form array into a JSON object, and display modal
 * using the JSON object with user input.
 */
$(document).on("submit", "form", function (event) {
  formID = event.target.id;
  formSerializedArray = {};
  event.preventDefault();
  $("#formResponseModal").load("components/modals/form-response-modal.html");
  $("#responseTitle").empty();
  $("#responseMessage").empty();
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
/**
 * This function serializes a form using the form
 * id that is taken when a form is submitted.
 * @param {string} formID
 */
function serializeFormArray(formID) {
  const formArray = $("#" + formID).serializeArray();
  return formArray;
}
/**
 * This function receives a serialized form, iterates through it and return
 * the values as a new JSON object.
 * @param {object} formSerializedArray
 */
function deconstructFormArray(formSerializedArray) {
  const keys = Object.values(formSerializedArray);

  for (const key of keys) {
    inputDetails[key.name] = key.value;
  }
  return inputDetails;
}
/**
 * It takes an object with user inputs,
 * call spinner modal, and displays respective modal.
 * Also, it uses setTimeout to simulate as if backend is being accessed.
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
/**
 * It takes an object with user inputs,
 * call spinner modal, and displays respective modal.
 * Also, it uses setTimeout to simulate as if backend is being accessed.
 * @param {string} userDetails
 */
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
/**
 * It takes an object with user inputs,
 * call spinner modal, and displays respective modal.
 * Also, it uses setTimeout to simulate as if backend is being accessed.
 * @param {string} userDetails
 */
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

/**
 * Function to load gallery images to the All Cakes tab.
 * It removes the required tabs if other tabs were clicked.
 */
$(function () {
  $(document).on("click", ".clickedLink", function (e) {
    const clickedTab = $(this).text();
    e.preventDefault();
    if (clickedTab === "All Cakes") {
      $("#cupcakes").tab("show");
      $("#one-layer-cakes").tab("show");
      $("#two-layer-cakes").tab("show");
      $("#party-cakes").tab("show");
    } else if (clickedTab === "Cupcakes") {
      $("#one-layer-cakes").removeClass("active");
      $("#two-layer-cakes").removeClass("active");
      $("#party-cakes").removeClass("active");
      $("#cupcakes").tab("show");
    } else if (clickedTab === "One Tier Cakes") {
      $("#cupcakes").removeClass("active");
      $("#two-layer-cakes").removeClass("active");
      $("#party-cakes").removeClass("active");
      $("#one-layer-cakes").tab("show");
    } else if (clickedTab === "Two Tier Cakes") {
      $("#one-layer-cakes").removeClass("active");
      $("#cupcakes").removeClass("active");
      $("#party-cakes").removeClass("active");
      $("#two-layer-cakes").tab("show");
    } else if (clickedTab === "Special Event Cakes") {
      $("#one-layer-cakes").removeClass("active");
      $("#two-layer-cakes").removeClass("active");
      $("#cupcakes").removeClass("active");
      $("#party-cakes").tab("show");
    }
  });
});

$(window).on("load", function () {
  addFixedTopClass();
});

$(window).on("resize", function () {
  addFixedTopClass();
});

/**
 * This function adds fixed-top class to navbar when it reaches 991px width and
 * it is removed if screen is above that value.
 */
function addFixedTopClass() {
  if ($(window).width() <= 991 && !$(".navbar").hasClass("fixed-top")) {
    $("body").css("padding-top", "70px");
    $(".navbar").addClass("fixed-top");
  } else if ($(window).width() >= 992 && $(".navbar").hasClass("fixed-top")) {
    $(".navbar").removeClass("fixed-top");
    $("body").css("padding-top", "0px");

  }
}

/**
 * Function from the timepicker library.
 */
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

/**
 * Funtion from the datepicker library.
 */
$(function () {
  $("#datepicker").datepicker({
    minDate: 1,
    maxDate: "+1M",
    dateFormat: "DD', 'dd' 'MM",
  });
});
