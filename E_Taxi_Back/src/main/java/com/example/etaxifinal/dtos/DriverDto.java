package com.example.etaxifinal.dtos;
import com.example.etaxifinal.models.Vehicle;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class DriverDto {
    private long id;
    private String name;
    private String surname;
    private String licenceCategory;
    private LocalDate birthdate;
    private String email;
    private LocalDate registerDate;
    private boolean active;
    private Vehicle vehicle;

}
