package com.example.etaxifinal.services.impls;

import com.example.etaxifinal.dtos.DriverDto;
import com.example.etaxifinal.mappers.DriverMapper;
import com.example.etaxifinal.mappers.VehicleMapper;
import com.example.etaxifinal.models.Driver;
import com.example.etaxifinal.models.Vehicle;
import com.example.etaxifinal.repositories.DriverRepository;
import com.example.etaxifinal.repositories.VehicleRepository;
import com.example.etaxifinal.services.DriverService;
import com.example.etaxifinal.services.VehicleService;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class DriverServiceImpl implements DriverService {
    private final DriverRepository repository;
    private final VehicleMapper vehicleMapper;
    private final DriverMapper driverMapper;
    private final VehicleService vehicleService;
    private final VehicleRepository vehicleRepository;

    public DriverServiceImpl(DriverRepository repository, VehicleMapper vehicleMapper, DriverMapper driverMapper, VehicleService vehicleService, VehicleRepository vehicleRepository) {
        this.repository = repository;
        this.vehicleMapper = vehicleMapper;
        this.driverMapper = driverMapper;
        this.vehicleService = vehicleService;
        this.vehicleRepository = vehicleRepository;
    }

    @Override
    public void add(DriverDto dto) {
        var entity = driverMapper.toEntity(dto);

        List<Vehicle> vehicles = vehicleService.findAllVehicles();
        if (vehicles.isEmpty()) {
            System.out.println("You might want to add a vehicle first so that the driver has something to use. Add a vehicle and then add a driver, please.");
        } else {
            boolean vehicleFound = false;
            for (Vehicle vehicleModel : vehicles) {
                if (!vehicleModel.getIsActive()) {
                    entity.setVehicle(vehicleModel);
                    vehicleModel.setIsActive(true);
                    vehicleFound = true;
                    break;
                }
            }

            if (!vehicleFound) {
                System.out.println("No free vehicles are available. Add a new vehicle or activate an existing one before adding a driver.");
                return;
            }
        }

        repository.save(entity);
    }

    @Override
    public List<DriverDto> findAllDrivers() {
        return repository.findAll().stream().map(driverMapper::toDto).toList();
    }

    @Override
    public void removeById(long id) {
        var driver = repository.findById(id).map(driverMapper::toDto).orElseThrow(() -> new RuntimeException("Driver not found!"));
        var secondId = driver.getVehicle();
        secondId.setDriver(null);
        var setFalse = vehicleRepository.findById(secondId.getId());
        var optional = setFalse.get();
        optional.setIsActive(false);
        repository.deleteById(id);
    }

    @Override
    public void modifyDriver(long id, DriverDto updatedDriver) {
        var optionalEntity = repository.findById(id);
        if (optionalEntity.isEmpty()) throw new RuntimeException("Driver not found, please try again.");

        Driver driverEntity = optionalEntity.get();
        driverEntity.setId(driverEntity.getId());
        driverEntity.setSurname(updatedDriver.getSurname());
        driverEntity.setLicenceCategory(updatedDriver.getLicenceCategory());
        driverEntity.setBirthdate(updatedDriver.getBirthdate());
        driverEntity.setEmail(updatedDriver.getEmail());
        driverEntity.setActive(updatedDriver.isActive());
        driverEntity.setName(updatedDriver.getName());
        repository.save(driverEntity);
    }

    @Override
    public DriverDto findDriverById(long id) {
        return repository.findById(id).map(driverMapper::toDto).orElseThrow(() -> new RuntimeException("Driver not found!"));

    }
}