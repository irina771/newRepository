import React from 'react';
import  '../styles/Modal.css'; // Asegúrate de crear un archivo CSS para los estilos

const Modal = ({ estado, cambiarEstado, children }) => {
  // Función para cerrar el modal cuando se hace clic fuera de su contenido
  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      cambiarEstado(false);
    }
  };

  return (
    <>
      {estado && (
        <div className='overlay' onClick={handleOutsideClick}>
          <div className='modalContainer'>
            <button
              className='closeButton'
              onClick={() => cambiarEstado(false)}
            >
              &times;
            </button>
            <div className='modalContent'>
              {children} 
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
