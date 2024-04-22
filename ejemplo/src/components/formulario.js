import React, { useState } from 'react';

function Formulario() {
  // Definimos el estado para almacenar los valores de los campos del formulario
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  // Función para manejar cambios en los campos del formulario
  const handleChange = (e) => {
    // Actualizamos el estado con los nuevos valores del campo
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    // Evitamos que el formulario se envíe de forma predeterminada
    e.preventDefault();
    
    // Aquí puedes hacer lo que quieras con los datos del formulario, como enviarlos a un servidor
    console.log('Datos del formulario:', formData);
  };

  return (
    <div>
      <h2>Formulario de Contacto</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Formulario;