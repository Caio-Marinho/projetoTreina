package com.curriculo.springapi.Service;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.curriculo.springapi.model.Usuario;
import com.curriculo.springapi.repository.UsuarioRepository;

public class Service {
    
    public static ResponseEntity<Usuario> verificaEmail(Usuario usuario, UsuarioRepository usuarioRepository){
        if(usuarioRepository.findByEmail(usuario.getEmail()).isPresent()) {
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        };
        return ResponseEntity.status(HttpStatus.CREATED).body(usuarioRepository.save(usuario));
    }

}
