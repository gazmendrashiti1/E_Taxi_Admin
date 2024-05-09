class ApiDriver {
    url = 'http://localhost:8080/api/drivers';

    async findAll() {
        const response = await fetch(this.url+"/all"); 
        return await response.json();


    }

    async findById(driverId) {
        const response = await fetch(this.url + "/" + driverId); 
        return await response.json();

    }

    async deleteById(driverId) {
        const response = await fetch(this.url + "/" + driverId, {
            method: 'DELETE'
        });
        return await response.text();

    }


    async register(driver) {
        const response = await fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(driver),
            headers: {
                "Content-Type": "application/json"
            }
        });
        return await response.text();

       
    }

    async modify(driverId, driver) {
        const response = await fetch(this.url + '/' + driverId, {
            method: 'PUT',
            body: JSON.stringify(driver),
            headers: {
                "Content-Type": "application/json"
            }
        });
        return await response.text();
    }

}






