function clearForm() {
    document.getElementById('userInfoForm').reset();
  }
  
  
  $(document).ready(function() {
    $("#userInfoForm").submit(function(event) {
      event.preventDefault();
      var firstName = $("#firstName").val();
      var lastName = $("#lastName").val();
      var email = $("#email").val();
      var phone = $("#phone").val();
      var dob = $("#dob").val();
      var gender = $("#gender").val();
      var address = $("#address").val();
  
      var fullName = firstName + " " + lastName;
      var userInfoCard = `
        <div class="col-md-4 mb-3">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">${fullName}</h5>
              <p class="card-text">Email: ${email}</p>
              <p class="card-text">Phone: ${phone}</p>
              <p class="card-text">Date of Birth: ${dob}</p>
              <p class="card-text">Gender: ${gender}</p>
              <p class="card-text">Address: ${address}</p>
            </div>
          </div>
        </div>
      `;
      
      $("#userInfoDisplay").append(userInfoCard);
      clearForm();
    });
  });