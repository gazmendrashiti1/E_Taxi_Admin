package com.example.etaxifinal.mappers;
import com.example.etaxifinal.dtos.VehicleDto;
import com.example.etaxifinal.models.Vehicle;
import org.springframework.stereotype.Component;

@Component
public class VehicleMapper {
    private final DriverMapper driverMapper;


    public VehicleMapper(DriverMapper driverMapper) {
        this.driverMapper = driverMapper;
    }

    public VehicleDto toDto(Vehicle vehicle) {
        VehicleDto dto = new VehicleDto();
        dto.setId(vehicle.getId());
        dto.setManufacturer(vehicle.getManufacturer());
        dto.setModel(vehicle.getModel());
        dto.setVin(vehicle.getVin());
        dto.setYearOfProduction(vehicle.getYearOfProduction());
        dto.setLicensePlate(vehicle.getLicensePlate());
        dto.setIsServiced(vehicle.getIsServiced());
        dto.setNextService(vehicle.getNextService());
        dto.setIsActive(vehicle.getIsActive());
        return dto;
    }

    public Vehicle toEntity(VehicleDto dto) {
        Vehicle entity = new Vehicle();
        entity.setId(dto.getId());
        entity.setManufacturer(dto.getManufacturer());
        entity.setModel(dto.getModel());
        entity.setVin(dto.getVin());
        entity.setYearOfProduction(dto.getYearOfProduction());
        entity.setLicensePlate(dto.getLicensePlate());
        entity.setIsServiced(dto.getIsServiced());
        entity.setNextService(dto.getNextService());
        entity.setIsActive(dto.getIsActive());
        return entity;
    }
}
