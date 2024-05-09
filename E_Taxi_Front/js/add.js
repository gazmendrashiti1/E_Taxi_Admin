document.addEventListener("DOMContentLoaded", function () {
    const inputName = document.getElementById('Name');
    const inputSurname = document.getElementById('Surname');
    const inputlicense = document.getElementById('LicenceCategory');
    const inputBirthdate = document.getElementById('Birthdate');
    const inputEmail = document.getElementById('Email');
    const inputActive = document.getElementById('Active');
    const btnSubmit = document.getElementById('btnSave');


    async function onSubmit() {
        const name = inputName.value;
        const surname = inputSurname.value;
        const license = inputlicense.value;
        const birthadte = inputBirthdate.value;
        const email = inputEmail.value;

        const active = inputActive.value;

        const model = new Driver(0,name,surname,license,birthadte,email,active);
        console.log(model)
        const apiDriver = new ApiDriver();
        await apiDriver.register(model);
         window.location.href = "./../drivers.html"

    }
    btnSubmit.addEventListener("click", function (event) {
        event.preventDefault();
        onSubmit();
      
    })
});