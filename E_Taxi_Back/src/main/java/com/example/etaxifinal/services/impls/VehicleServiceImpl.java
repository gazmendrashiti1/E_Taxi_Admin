package com.example.etaxifinal.services.impls;

import com.example.etaxifinal.dtos.VehicleDto;
import com.example.etaxifinal.mappers.VehicleMapper;
import com.example.etaxifinal.models.Driver;
import com.example.etaxifinal.models.Vehicle;
import com.example.etaxifinal.repositories.DriverRepository;
import com.example.etaxifinal.repositories.VehicleRepository;
import com.example.etaxifinal.services.VehicleService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class VehicleServiceImpl implements VehicleService {
    private final VehicleRepository repository;
    private final DriverRepository driverRepository;
    private final VehicleMapper mapper;

    public VehicleServiceImpl(VehicleRepository repository, DriverRepository driverRepository, VehicleMapper mapper) {
        this.repository = repository;
        this.driverRepository = driverRepository;
        this.mapper = mapper;
    }

    @Override
    public void add(VehicleDto dto) {
        var entity = mapper.toEntity(dto);
        repository.save(entity);
    }

    @Override
    public List<Vehicle> findAllVehicles() {
        return repository.findAll()
                .stream()
                .toList();
    }

    @Override
    public List<VehicleDto> findAllVehiclesDto() {
        return repository.findAll()
                .stream().map(mapper::toDto)
                .toList();
    }

    @Override
    public VehicleDto findVehicleById(long id) {
        Optional<Vehicle> optionalVehicle = repository.findById(id);
        if (optionalVehicle.isEmpty()) {
            throw new RuntimeException("Vehicle not found!");
        }

        Vehicle entity = optionalVehicle.get();
        return mapper.toDto(entity);
    }

    @Override
    public void modifyVehicle(long id, VehicleDto updatedVehicle) {
        var optionalEntity = repository.findById(id);
        if (optionalEntity.isEmpty()) throw new RuntimeException("Driver not found, please try again.");
        Vehicle vehicleEntity = optionalEntity.get();
        vehicleEntity.setManufacturer(updatedVehicle.getManufacturer());
        vehicleEntity.setModel(updatedVehicle.getModel());
        vehicleEntity.setYearOfProduction(updatedVehicle.getYearOfProduction());
        vehicleEntity.setLicensePlate(updatedVehicle.getLicensePlate());
        vehicleEntity.setIsServiced(updatedVehicle.getIsServiced());
        vehicleEntity.setNextService(updatedVehicle.getNextService());

        repository.save(vehicleEntity);
    }

    @Override
    public void deleteVehicle(long id) {
        List<Driver> drivers = driverRepository.findAll();
        var vehicle = repository.findById(id);
        var optionalVehicle = vehicle.get();
        long secondId = optionalVehicle.getId();
        for (Driver driverModel : drivers) {
            var vid = driverModel.getVehicle();
            long its = vid.getId();
            if (secondId == its) {
                driverModel.setVehicle(null);
            }
        }
        repository.deleteById(id);
    }
}

