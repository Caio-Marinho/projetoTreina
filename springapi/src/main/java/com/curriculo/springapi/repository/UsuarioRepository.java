package com.curriculo.springapi.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.curriculo.springapi.dto.Atributos;
import com.curriculo.springapi.model.Usuario;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario,Integer> {

    Optional<Usuario> findByEmail(@Param("email") String email);

    @Query(value = "SELECT u.id, u.nome, u.email, u.foto_base64, e.cep, e.logradouro, e.bairro, e.numero, e.cidade, e.uf FROM tb_usuario u INNER JOIN tb_usuario_endereco ue ON u.id = ue.id_usuario INNER JOIN tb_endereco e ON ue.id_endereco = e.id WHERE u.id = (SELECT MAX(u.id) FROM tb_usuario u)",nativeQuery = true)
    List<Atributos> buscarPessoa();
}
