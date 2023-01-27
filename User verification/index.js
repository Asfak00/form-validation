onload = () => {
  main();
};

// global variable

const main = () => {
  // all elements reference here
  const form = document.getElementById("form");
  const input = document.querySelectorAll("input");
  console.log(input);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (input[0].value === "rahiahmed" && input[1].value === "AHMEDrahi") {
      location.href = "home.html";
    } else {
      alert("Not Matched!!");
    }
  });
};
