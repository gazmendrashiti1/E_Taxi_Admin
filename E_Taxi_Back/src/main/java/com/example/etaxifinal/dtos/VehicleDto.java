package com.example.etaxifinal.dtos;
import com.example.etaxifinal.models.Driver;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
@Data
@NoArgsConstructor
@AllArgsConstructor
public class VehicleDto {
    private long id;
    private String manufacturer;
    private String model;
    private String vin;
    private int yearOfProduction;
    private String licensePlate;
    private Boolean isServiced;
    private Date nextService;
    private Boolean isActive;
    private Driver driver;
}
