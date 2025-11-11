import React from 'react';
import './FacturaModal.css'; // reutilizamos el mismo estilo

const DocumentoTransporteModal = ({ onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Documento de transporte guardado correctamente 🚛');
    onClose();
  };

  return (
    <div className="factura-overlay">
      <div className="factura-box">
        <div className="factura-header">
          <h2>🚛 Documento de Transporte</h2>
          <button className="close-btn" onClick={onClose}>✖</button>
        </div>

        <form className="factura-form" onSubmit={handleSubmit}>
          <label>
            Número de guía:
            <input type="text" placeholder="Ej: GT-4521" required />
          </label>

          <label>
            Transportista:
            <input type="text" placeholder="Nombre de la empresa" required />
          </label>

          <label>
            Placa del vehículo:
            <input type="text" placeholder="Ej: ABC-123" required />
          </label>

          <label>
            Total Bultos:
            <input type="number" placeholder="0.00" required />
          </label>     

          <label>
            Fecha de retiro:
            <input type="date" required />
          </label>

          <button type="submit" className="guardar-btn">Guardar</button>
        </form>
      </div>
    </div>
  );
};

export default DocumentoTransporteModal;