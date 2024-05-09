package com.example.etaxifinal.services;

import com.example.etaxifinal.dtos.DriverDto;

import java.util.List;

public interface DriverService {
    void add(DriverDto dto);

    List<DriverDto> findAllDrivers();

    void removeById(long id);

    void modifyDriver(long id, DriverDto updatedDriver);

    DriverDto findDriverById(long id);
}
