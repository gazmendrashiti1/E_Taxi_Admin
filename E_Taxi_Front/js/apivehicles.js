class ApiVehicles{
    url = 'http://localhost:8080/api/vehicles';

    async findAll() {
        const response = await fetch(this.url+"/all"); 
        return await response.json();

       

    }

    async findById(vehicleId) {
        const response = await fetch(this.url + "/" + vehicleId); 
        return await response.json();

  
    }

    async deleteById(vehicleId) {
        const response = await fetch(this.url + "/" + vehicleId, {
            method: 'DELETE'
        });
        return await response.text();

       
    }


    async register(vehicle) {
        const response = await fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(vehicle),
            headers: {
                "Content-Type": "application/json"
            }
        });
        return await response.text();

    }

    async modify(vehicleId, vehicle) {
        const response = await fetch(this.url + '/' + vehicleId, {
            method: 'PUT',
            body: JSON.stringify(vehicle),
            headers: {
                "Content-Type": "application/json"
            }
        });
        return await response.text();
      
}}