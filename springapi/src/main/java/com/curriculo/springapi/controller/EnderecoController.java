package com.curriculo.springapi.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.curriculo.springapi.model.Endereco;
import com.curriculo.springapi.repository.EnderecoRepository;
import com.curriculo.springapi.Service.Service;

@RestController
@RequestMapping("/endereco")
public class EnderecoController {

    @PostMapping
    public ResponseEntity<Endereco> criarEndereco(@RequestBody Endereco endereco) {
        
        return Service.cadastrarEndereco(endereco, enderecoRepository);
    }

    @Autowired
    private EnderecoRepository enderecoRepository;
}
