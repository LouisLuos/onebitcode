import React, { useState } from 'react';

const FormularioContato = () => {
  // Estado para armazenar os valores do formulário
  const [formData, setFormData] = useState({
    email: '',
    comentario: ''
  });

  // Função para atualizar o estado conforme o usuário digita
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Função para lidar com o envio
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados enviados:', formData);
    alert('Mensagem enviada com sucesso!');
    // Aqui você poderia limpar o form: setFormData({ email: '', comentario: '' });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow p-4">
            <h3 className="card-title mb-4 text-center">Contato</h3>
            
            <form onSubmit={handleSubmit}>
              {/* Campo de E-mail */}
              <div className="mb-3">
                <label htmlFor="email" className="form-label">E-mail</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  required
                />
              </div>

              {/* Campo de Comentário */}
              <div className="mb-3">
                <label htmlFor="comentario" className="form-label">Comentário</label>
                <textarea
                  className="form-control"
                  id="comentario"
                  name="comentario"
                  rows="4"
                  value={formData.comentario}
                  onChange={handleChange}
                  placeholder="Como posso ajudar?"
                  required
                ></textarea>
              </div>

              <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                  Enviar Comentário
                </button>
              </div>
            </form>
          </div>
        </div>
        <div>
            {}
        </div>
      </div>
    </div>
  );
};

export default FormularioContato;