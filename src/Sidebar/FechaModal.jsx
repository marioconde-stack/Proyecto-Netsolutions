import React from 'react';
import './FacturaModal.css';

const FechaModal = ({ onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Fecha registrada correctamente 📅');
    onClose();
  };

  return (
    <div className="factura-overlay">
      <div className="factura-box">
        <div className="factura-header">
          <h2>📅 Registro de Fecha</h2>
          <button className="close-btn" onClick={onClose}>✖</button>
        </div>

        <form className="factura-form" onSubmit={handleSubmit}>
          <label>
            Fecha de ingreso:
            <input type="date" required />
          </label>

          <label>
            Concepto o proceso:
            <input type="text" placeholder="Ej: Recepción de mercancía" required />
          </label>
          
          <label>
            Total Bultos:
            <input type="number" placeholder="0.00" required />
          </label>

          <button type="submit" className="guardar-btn">Guardar</button>
        </form>
      </div>
    </div>
  );
};

export default FechaModal;