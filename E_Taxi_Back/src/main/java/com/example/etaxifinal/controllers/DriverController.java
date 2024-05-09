package com.example.etaxifinal.controllers;

import com.example.etaxifinal.dtos.DriverDto;
import com.example.etaxifinal.services.DriverService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/drivers")
@CrossOrigin(origins = "*")
public class DriverController {

    private final DriverService driverService;

    public DriverController(DriverService driverService) {
        this.driverService = driverService;
    }

    @PostMapping
    public void add(@RequestBody DriverDto dto) {
        driverService.add(dto);
    }

    @GetMapping("/all")
    public List<DriverDto> findAllDrivers() {
        return driverService.findAllDrivers();
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable long id) {
        driverService.removeById(id);
    }

    @PutMapping("/{id}")
    public void modify(@PathVariable long id, @RequestBody DriverDto dto) {
        driverService.modifyDriver(id, dto);
    }

    @GetMapping("/{id}")
    public DriverDto findById(@PathVariable long id) {
        return driverService.findDriverById(id);
    }
}
