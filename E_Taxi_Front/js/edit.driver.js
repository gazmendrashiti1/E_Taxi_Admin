document.addEventListener("DOMContentLoaded", function () {
const inputName = document.getElementById('Name');
const inputSurname = document.getElementById('Surname');
const inputlicense = document.getElementById('LicenceCategory');
const inputBirthdate = document.getElementById('Birthdate');
const inputEmail = document.getElementById('Email');
const inputActive = document.getElementById('Active');
const btnSubmit = document.getElementById('btnSave');


async function onSubmit() {
    const driverId = window.location.search.split("=")[1].trim();
    const name = inputName.value;
    const surname = inputSurname.value;
    const license = inputlicense.value;
    const birthadte = inputBirthdate.value;
    const email = inputEmail.value;

    const active = inputActive.value;

    const model = new Driver(0,name,surname,license,birthadte,email,active);
    console.log(model)
    const apiDriver = new ApiDriver();
    await apiDriver.modify(driverId, model);
     window.location.href = "./../drivers.html"

}
btnSubmit.addEventListener("click", function (event) {
    event.preventDefault();
    onSubmit();
  
})


const loadData = async () => {
    const driverId = window.location.search.split("=")[1].trim();
    const apiDriver = new ApiDriver();
    const result = await apiDriver.findById(driverId);

    if (result && result.id) {
        inputName.value = result.name;
      inputSurname.value = result.surname;
      inputlicense.value = result.licenceCategory;
      inputBirthdate.value = result.birthdate;
      inputEmail.value = result.email;
      inputActive.value = result.active;
    }
};

loadData();
});