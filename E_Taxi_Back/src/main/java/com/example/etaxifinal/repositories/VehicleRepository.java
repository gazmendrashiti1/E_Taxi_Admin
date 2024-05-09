package com.example.etaxifinal.repositories;

import com.example.etaxifinal.models.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VehicleRepository extends JpaRepository<Vehicle, Long> {
}
