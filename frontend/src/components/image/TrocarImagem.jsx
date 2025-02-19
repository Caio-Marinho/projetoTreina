import { useState } from "react";

function Imagem(){
    const [preview, setPreview] = useState("https://cdn-icons-png.flaticon.com/128/3524/3524388.png");

// Atualiza a pré-visualização da imagem
const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };
  return (
    <>
        {/* Campo para anexar imagem */}
        <div className="mb-3">
            <label className="form-label">Foto de Perfil</label>
            <input type="file" id="img-input" onChange={handleImageChange} className="form-control" />
          </div>
  
          {/* Campo para pré-visualização da imagem */}
          <div className="mb-3">
            <p>Pré-visualização:</p>
            <img 
              id="imgPreview"
              src={preview} 
              alt="Pré-visualização" 
              className="img-thumbnail" 
              style={{ maxWidth: '200px' }} 
            />
          </div>
    </>
  )
}
export default Imagem;