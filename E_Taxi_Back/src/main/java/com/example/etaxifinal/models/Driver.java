package com.example.etaxifinal.models;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDate;
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "drivers")
public class Driver {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private long id;
        private String name;
        private String surname;
        private String licenceCategory;
        private LocalDate birthdate;
        private String email;
        private LocalDate registerDate;
        private boolean active;
        @OneToOne
        @JoinColumn(name = "vehicle_id")
        @JsonIgnore
        private Vehicle vehicle;
}
