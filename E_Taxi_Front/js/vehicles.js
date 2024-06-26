document.addEventListener("DOMContentLoaded", function () {

    const root = document.getElementById('root');

    async function loadData() {
        root.innerHTML = "";
        const apiVehicles = new ApiVehicles();
        const data = await apiVehicles.findAll();
        console.table(data);

        data.forEach(vehicle => {
            const tableRow = `<tr>
                <td>${vehicle.id}</td>
                <td>${vehicle.manufacturer}</td>
                <td>${vehicle.model}</td>
                <td>${vehicle.vin}</td>
                <td>${vehicle.yearOfProduction}</td>
                <td>${vehicle.licensePlate}</td>
                <td>
                <input type="checkbox" class="statusChange" ${vehicle.isServiced ? 'checked' : ''}
                  style="width: 20px; height: 20px;" data-driver="${vehicle.id}" />
              </td>
                <td>${getFormattedNextService(vehicle.nextService)}</td>

    
                <td>
                <input type="checkbox" class="statusChange" ${vehicle.isActive ? 'checked' : ''}
                  style="width: 20px; height: 20px;" data-driver="${vehicle.id}" />
              </td>
              <td>
                <a href="./info.vehicle.html?vehicle.id=${vehicle.id}" class="btn btn-white btn-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-square" viewBox="0 0 16 16">
                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                  </svg>
                </a>
                <a href="./edit.vehicle.html?vehicle.id=${vehicle.id}" class="btn btn-success btn-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                  </svg>
                </a>
                <a href="./delete.vehcile.html?vehicle.id=${vehicle.id}" class="btn btn-danger btn-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square-fill" viewBox="0 0 16 16">
                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 1 1 .708-.708z" />
                  </svg>
                </a>
              </td> 
            </tr>`;
            function getFormattedNextService(nextService) {
                const [datePart] = nextService.split('T');
            
                const formattedDate = datePart;
                return `${formattedDate}`;
            }
            
            root.innerHTML += tableRow;
        });
    }

    loadData();

    root.addEventListener('click', async (event) => {
        window.location.reload();
    });

});
