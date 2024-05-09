package com.example.etaxifinal.mappers;
import com.example.etaxifinal.dtos.DriverDto;
import com.example.etaxifinal.models.Driver;
import org.springframework.stereotype.Component;
import java.time.LocalDate;

@Component
public class DriverMapper {
    public  DriverDto toDto(Driver driver) {
        DriverDto dto = new DriverDto();
        dto.setId(driver.getId());
        dto.setName(driver.getName());
        dto.setSurname(driver.getSurname());
        dto.setLicenceCategory(driver.getLicenceCategory());
        dto.setBirthdate(driver.getBirthdate());
        dto.setEmail(driver.getEmail());
        dto.setRegisterDate(driver.getRegisterDate());
        dto.setActive(driver.isActive());
       dto.setVehicle(driver.getVehicle());
        return dto;
    }

    public Driver toEntity(DriverDto dto) {
        Driver entity = new Driver();
        entity.setId(dto.getId());
        entity.setName(dto.getName());
        entity.setSurname(dto.getSurname());
        entity.setLicenceCategory(dto.getLicenceCategory());
        entity.setBirthdate(dto.getBirthdate());
        entity.setEmail(dto.getEmail());
        entity.setRegisterDate(LocalDate.now());
        entity.setActive(dto.isActive());
        entity.setVehicle(dto.getVehicle());
        return entity;
    }
}
