const endpointURL = "http://localhost:3000/vegetables";
const result = document.getElementById("result");
const dinosaurURL = "http://localhost:3000/dinosaurs";

let showData = (data) => {
  data.forEach((item) => {
    result.innerHTML += `
        ${item.name} ${item.colour} <br>
        `;
  });
};

let showDinosaurs = (dinosaurs) => {
    dinosaurs.forEach((item) => {
      result.innerHTML += `
          Name: ${item.name} Height: ${item.height} Lifespan: ${item.lifespan} <br>
          `;
    });
  };

$.ajax({
  type: "GET",
  url: endpointURL,
  success: function (data) {
    console.log(data);
    showData(data);
  },
  error: function (error) {
    console.log(error);
  },
});

$.ajax({
    type: "GET",
    url: dinosaurURL,
    success: function (data) {
      console.log(data);
      showDinosaurs(data);
    },
    error: function (error) {
      console.log(error);
    },
  });
