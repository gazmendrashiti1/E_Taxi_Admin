package com.example.etaxifinal.controllers;

import com.example.etaxifinal.dtos.VehicleDto;
import com.example.etaxifinal.mappers.VehicleMapper;
import com.example.etaxifinal.services.VehicleService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/vehicles")
@CrossOrigin(origins = "*")
public class VehicleController {
    private final VehicleService vehicleService;
    private final VehicleMapper mapper;

    public VehicleController(VehicleService vehicleService, VehicleMapper mapper) {
        this.vehicleService = vehicleService;
        this.mapper = mapper;
    }

    @PostMapping
    public void add(@RequestBody VehicleDto dto) {
        vehicleService.add(dto);
    }

    @PutMapping("/{id}")
    public void modify(@PathVariable long id, @RequestBody VehicleDto dto) {
        vehicleService.modifyVehicle(id, dto);
    }

    @GetMapping("/{id}")
    public VehicleDto findById(@PathVariable long id) {
        return vehicleService.findVehicleById(id);
    }

    @GetMapping("/all")
    public List<VehicleDto> findAllVehicles() {
        return vehicleService.findAllVehiclesDto();
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable long id) {
        vehicleService.deleteVehicle(id);
    }
}
