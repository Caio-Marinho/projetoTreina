package com.curriculo.springapi.Service;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.curriculo.springapi.model.Endereco;
import com.curriculo.springapi.model.Usuario;
import com.curriculo.springapi.repository.UsuarioRepository;
import com.curriculo.springapi.repository.EnderecoRepository;

public class Service {
    
    public static ResponseEntity<Usuario> verificaEmail(Usuario usuario, UsuarioRepository usuarioRepository){
        if(usuarioRepository.findByEmail(usuario.getEmail()).isPresent()) {
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        };
        return ResponseEntity.status(HttpStatus.CREATED).body(usuarioRepository.save(usuario));
    }

    public static ResponseEntity<Endereco>  cadastrarEndereco(Endereco endereco, EnderecoRepository enderecoRepository){
        if(enderecoRepository.buscarEnderecos(endereco.getCep(), endereco.getLogradouro(), endereco.getBairro(), endereco.getNumero(), endereco.getCidade(), endereco.getUf()).size() > 0) {
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        };
        return ResponseEntity.status(HttpStatus.CREATED).body(enderecoRepository.save(endereco));
    }

}
