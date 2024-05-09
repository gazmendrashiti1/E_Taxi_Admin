document.addEventListener("DOMContentLoaded", function () {
    const driver = document.getElementById("driver");
    const btnDeleteDriver = document.getElementById("btnDeleteDriver");
  
    async function loadData() {
        driver.innerHTML = ``;
      console.log(window.location.search);
      const driverId = window.location.search.split("=")[1].trim();
      const apiDriver = new ApiDriver();
  
      const data = await apiDriver.findById(driverId);
  console.log(data)
      
      driver.innerHTML =`<hr style="color: black;">
      <p><b>Id: </b> <i>${data.id}</i></p>
      <hr style="color: black;">
          <p><b>Name: </b> <i>${data.name}</i></p>
          <hr style="color: black;">
          <p><b>Surname: </b> <i>${data.surname}</i></p>
          <hr style="color: black;">
          <p><b>LicenceCategory: </b> <i>${data.licenceCategory}</i></p>
          <hr style="color: black;">
          <p><b>Birthdate: </b> <i>${data.birthdate}</i></p>
          <hr style="color: black;">
          <p><b>Email: </b> <i>${data.email}</i></p>
          <hr style="color: black;">
          <p><b>RegisterDate: </b> <i>${data.registerDate}</i></p>
          <hr style="color: black;">
          <p><b>Active: </b> <i>${data.active}</i></p>
          <hr style="color: black;">
          <p><b>Vehicle Id: </b> <i>${data.vehicle.id}</i></p>
          <hr style="color: black;">
          `;
    }
  
    loadData();
 
  });
  