package com.curriculo.springapi.dto;
import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Experiencia {
    
    private int id;
    private String Tipo;
    private String Atividade;
    private LocalDate inicio;
    private LocalDate fim;
}
