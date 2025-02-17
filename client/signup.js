const signupBtn = (event) => {
  event.preventDefault();
  let url = "https://shippingsite.onrender.com/register";

  const firstName = document.getElementById("fName").value;
  const lastName = document.getElementById("lName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (firstName == '' || lastName == '' || email == '' || password == '') {
    // alert("Alaye, when you are not blind. Fill in something jor")
    showError.style.display = 'block'
    return; // Return from the function to prevent further execution

}

  const data = {
    firstName,
    lastName,
    email,
    password,
  };

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    })
    .then((data) => {
      // console.log("Successfully registered", data);
      // alert("Signup successful!");
      window.location.href = "/login.html";
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Signup failed: " + error.message);
    });
};



// const signupBtn = (event) => {
//   event.preventDefault();
//   let url = "http://localhost:4000/register";

//   const firstName = document.getElementById("fName").value;
//   const lastName = document.getElementById("lName").value;
//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;

//   const formData = new FormData();
//   formData.append("fName", firstName);
//   formData.append("lName", lastName);
//   formData.append("email", email);
//   formData.append("password", password);

//   fetch(url, {
//     method: "POST",
//     body: formData,
//   })
//     .then((res) => {
//       if (!res.ok) {
//         console.log("Network error");
//       }
//       res.json("Network error");
//     })
//     .then((data) => {
//       if (data.ok) {
//         console.log("Successfully registered");
//       }
//       alert("Signup failed");
//     })
//     .catch((error) => {
//       console.log("Error", error);
//     });
// };
