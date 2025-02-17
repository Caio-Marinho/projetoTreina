package com.curriculo.springapi.image;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Base64;

public class Image {
    public static String saveImageFromBase64(String base64Data){
        try{
        // Remove o prefixo, se presente
        if (base64Data.contains(",")) {
            base64Data = base64Data.split(",")[1];
        }
        
        // Decodifica a string Base64 para um array de bytes
        byte[] imageBytes = Base64.getDecoder().decode(base64Data);
        
        // Define um nome único para o arquivo (você pode ajustar a extensão conforme necessário)
        String fileName = "image_" + System.currentTimeMillis() + ".png";
        
        // Define o caminho onde o arquivo será salvo (ex.: pasta "uploads" na raiz do projeto)
        Path destinationPath = Paths.get("frontend\\public\\img").resolve(fileName).toAbsolutePath();
        // Cria as pastas necessárias, se não existirem
        Files.createDirectories(destinationPath.getParent());

        // Escreve os bytes no arquivo
        Files.write(destinationPath, imageBytes);
        
        return destinationPath.toString();
        } catch (IOException e) {
            return "ERRO AO SALVAR IMAGEM";
        }

    }
}
