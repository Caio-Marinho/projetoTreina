package com.curriculo.springapi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.curriculo.springapi.model.Usuario;
import com.curriculo.springapi.repository.UsuarioRepository;
import com.curriculo.springapi.Service.Service;

@RestController
@RequestMapping("/")
public class UsuarioController {
    
    @PostMapping
    public ResponseEntity<Usuario> criaUsuario(@RequestBody Usuario usuario) {
        
        return Service.verificaEmail(usuario, usuarioRepository);
    }

    @Autowired
    private UsuarioRepository usuarioRepository;
    
}
