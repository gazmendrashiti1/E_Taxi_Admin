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
        const vehicleId = window.location.search.split("=")[1].trim();
        const model = inputModel.value;
        const manufacturer = inputManufacturer.value;
        const vin = inputVin.value;
        const yearOfProduction = inputYearOfProduction.value;
        const licensePlate = inputLicensePlate.value;
        const isServiced = inputIsServiced.value;
        const nextService = inputNextService.value; 
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
        const apiVehicle = new ApiVehicles(); 
        await apiVehicle.modify(vehicleId, vehicle);
        window.location.href = "./../vehicles.html";
    }

    btnSave.addEventListener("click", function (event) {
        event.preventDefault();
        onSubmit();
    });

    const loadData = async () => {
        const vehicleId = window.location.search.split("=")[1].trim();
        const apiVehicle = new ApiVehicles();
        const result = await apiVehicle.findById(vehicleId);

        if (result && result.id) {
            inputModel.value = result.model;
            inputManufacturer.value = result.manufacturer;
            inputVin.value = result.vin;
            inputYearOfProduction.value = result.yearOfProduction;
            inputLicensePlate.value = result.licensePlate;
            inputIsServiced.value = result.isServiced;
            
            inputNextService.value = result.nextService ? result.nextService.toISOString().split('T')[0] : '';

            inputIsActive.value = result.isActive;
        }
    };

    loadData();
});
