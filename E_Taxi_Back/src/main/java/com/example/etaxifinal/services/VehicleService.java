package com.example.etaxifinal.services;

import com.example.etaxifinal.dtos.VehicleDto;
import com.example.etaxifinal.models.Vehicle;

import java.util.List;

public interface VehicleService {
    void add(VehicleDto dto);

    List<Vehicle> findAllVehicles();

    List<VehicleDto> findAllVehiclesDto();

    VehicleDto findVehicleById(long id);

    void modifyVehicle(long id, VehicleDto updatedVehicle);

    void deleteVehicle(long id);
}
