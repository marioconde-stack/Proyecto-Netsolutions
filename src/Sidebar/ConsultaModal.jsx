import React, { useState } from 'react';
import './FacturaModal.css'; // reutilizamos los estilos de modal

const ConsultaModal = ({ onClose }) => {
  const [criterio, setCriterio] = useState('Estiba');
  const [valor, setValor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!valor.trim()) {
      alert('Por favor ingrese un valor para consultar');
      return;
    }
    alert(`🔍 Consultando por ${criterio}: ${valor}`);
    setValor('');
  };

  return (
    <div className="factura-overlay">
      <div className="factura-box">
        <div className="factura-header">
          <h2>🔍 Consulta</h2>
          <button className="close-btn" onClick={onClose}>✖</button>
        </div>

        <form className="factura-form" onSubmit={handleSubmit}>
          <label>
            Tipo de búsqueda:
            <select 
              value={criterio} 
              onChange={(e) => setCriterio(e.target.value)} 
              required
            >
              <option value="Estiba">Estiba</option>
              <option value="Referencia">Referencia</option>
              <option value="Lote">Lote</option>
              <option value="Ubicación">Ubicación</option>
              <option value="Cliente">Cliente</option>
              <option value="Pedido">Pedido</option>
            </select>
          </label>

          <label>
            Valor:
            <input 
              type="text" 
              placeholder={`Ingrese el ${criterio.toLowerCase()}`} 
              value={valor}
              onChange={(e) => setValor(e.target.value)}
              required 
            />
          </label>

          <div className="factura-buttons">
            <button type="submit" className="btn-consultar">Consultar</button>
            <button type="button" className="btn-cancelar" onClick={onClose}>Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConsultaModal;