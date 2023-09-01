$(document).ready(function () {
  $("#submitBtn").click(function () {
    let fName = $("#fName").val();
    let lName = $("#lName").val();
    let eMail = $("#eMail").val();
    let phnNum = $("#phnNum").val();
    let dateOfBirth = $("#dateOfBirth").val();

    if (fName.length == 0) {
      $("#firstNameMessage").html("Enter your firstname");
      $("#firstNameMessage").css("color", "red");
    } else {
      $("#firstNameMessage").css("display", "none");
    }

    if (lName.length == 0) {
      $("#lastNameMessage").html("Enter your lastname");
      $("#lastNameMessage").css("color", "red");
    } else {
      $("#lastNameMessage").css("display", "none");
    }

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (eMail.length == 0) {
      $("#mailMessage").html("Enter email");
      $("#mailMessage").css("color", "red");
    } else if (!emailRegex.test(eMail)) {
      $("#mailMessage").html("Invalid email format.");
      $("#mailMessage").css("color", "red");
    } else {
      $("#mailMessage").css("display", "none");
    }

    let phnNumRegex = /^[9]\d{9}$/;
    if (phnNum.length == 0) {
      $("#phoneNumber").html("Enter phone number.");
      $("#phoneNumber").css("color", "red");
    } else if (!phnNumRegex.test(phnNum)) {
      $("#phoneNumber").html("Invalid phone number format.");
      $("#phoneNumber").css("color", "red");
    } else {
      $("#phoneNumber").css("display", "none");
    }
    let dateOfBirthRegex = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    if (dateOfBirth.length == 0) {
      $("#dateofbirth").html("Enter your date of birth");
      $("#dateofbirth").css("color", "red");
    } else if (!dateOfBirthRegex.test(dateOfBirth)) {
      $("#dateofbirth").html("Invalid dob format. please enter in dd/mm/yyyy format");
      $("#dateofbirth").css("color", "red");
    }
    else {
      $("#dateofbirth").css("display", "none");
    }
  });
  
  $.get(
    "https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en",
    function (data, status) {
      if (status == "success") {
        const quotes = data.quoteText;
        console.log(data);

        $("#quotes").append(`      
          <p>${quotes}</p>    
      `);
      } else {
        $("#quotesError").append("<p>failed to get quotes</p>");
      }
    }
  );

  $.get("https://random.imagecdn.app/v1/image?&category=gadget&format=json", function (data, status) {
    if (status == "success") {
      const image = data.url;
      console.log(data);
      $("#images").append(`
          <img src="${image}" class="card-img-top rounded-circle" alt="cannot display img">
      `);
    } else {
      $("#images").text("Failed to get dog image.");
    }
  });

 
});
