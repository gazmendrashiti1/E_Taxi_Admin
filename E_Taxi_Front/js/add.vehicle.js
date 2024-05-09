document.addEventListener("DOMContentLoaded", function () {
    const inputModel = document.getElementById('model');
    const inputManufacturer = document.getElementById('manufacturer');
    const inputVin = document.getElementById('vin');
    const inputYearOfProduction = document.getElementById('yearOfProduction');
    const inputLicensePlate = document.getElementById('licensePlate');
    const inputIsServiced = document.getElementById('isServiced');
    const inputNextService = document.getElementById('nextService');
    const inputIsActive = document.getElementById('isActive');
    const btnSave = document.getElementById('btnSave');

    async function onSubmit() {
        const model = inputModel.value;
        const manufacturer = inputManufacturer.value;
        const vin = inputVin.value;
        const yearOfProduction = inputYearOfProduction.value;
        const licensePlate = inputLicensePlate.value;
        const isServiced = inputIsServiced.value;
        const nextService = new Date(inputNextService.value); // Convert to Date object
        const isActive = inputIsActive.value;

        const vehicle = new Vehicle(
           0,
            manufacturer,
            model,
            vin,
            yearOfProduction,
            licensePlate,
            isServiced,
            nextService,
            isActive
        );

        console.log(vehicle);
        const apiVehicle = new ApiVehicles(); // Corrected class name
        await apiVehicle.register(vehicle);
        window.location.href = "./../vehicles.html";
    }

    btnSave.addEventListener("click", function (event) {
        event.preventDefault();
        onSubmit();
    });
});
