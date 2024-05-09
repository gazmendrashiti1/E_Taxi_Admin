document.addEventListener("DOMContentLoaded", function () {
    const vehicle = document.getElementById("vehicle");  
    async function loadData() {
        vehicle.innerHTML = ``;
      console.log(window.location.search);
      const vehicleId = window.location.search.split("=")[1].trim();
      const apiVehicle = new ApiVehicles();
  
      const data = await apiVehicle.findById(vehicleId);
  console.log(data)
      
      vehicle.innerHTML =`<hr style="color: black;">
      <p><b>Id: </b> <i>${data.id}</i></p>
      <hr style="color: black;">
          <p><b>Manufacturer: </b> <i>${data.manufacturer}</i></p>
          <hr style="color: black;">
          <p><b>Model: </b> <i>${data.model}</i></p>
          <hr style="color: black;">
          <p><b>Vin: </b> <i>${data.vin}</i></p>
          <hr style="color: black;">
          <p><b>Year of Prodcution: </b> <i>${data.yearOfProduction}</i></p>
          <hr style="color: black;">
          <p><b>License Plate: </b> <i>${data.licensePlate}</i></p>
          <hr style="color: black;">
          <p><b>Serviced: </b> <i>${data.isServiced}</i></p>
          <hr style="color: black;">
          <p><b>Next Service: </b> <i>${data.nextService}</i></p>
          <hr style="color: black;">
          <p><b>Is Active: </b> <i>${data.isActive}</i></p>
          <hr style="color: black;">
          `;
    }
  
    loadData();
 
  });
  