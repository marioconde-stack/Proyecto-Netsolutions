import React from 'react';
import './FacturaModal.css';

const FacturaModal = ({ onClose }) => {

  const handleSubmit = (e) => {
    e.preventDefault(); // 🔥 Evita recargar la página
    alert('Factura guardada correctamente ✅');
    onClose(); // 🔒 Cierra el modal después de guardar
  };

  return (
    <div className="factura-overlay">
      <div className="factura-box">
        <div className="factura-header">
          <h2>🧾 Factura</h2>
          <button className="close-btn" onClick={onClose}>✖</button>
        </div>

        <div className="factura-body">
          <form className="factura-form" onSubmit={handleSubmit}>
            <label>
              Número de factura:
              <input type="text" placeholder="Ej: F001-2025" required />
            </label>

            <label>
              Cliente:
              <input type="text" placeholder="Nombre del cliente" required />
            </label>

            <label>
              Fecha:
              <input type="date" required />
            </label>

            <label>
              Total:
              <input type="number" placeholder="0.00" required />
            </label>

            <button type="submit" className="guardar-btn">Guardar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FacturaModal;
