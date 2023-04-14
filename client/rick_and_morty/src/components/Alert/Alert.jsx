import React, { useState, useEffect } from 'react';
import style from './Alert.module.css';

function Alert({ message, onClose }) {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(false);
      onClose();
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [onClose]);

  return (
    isOpen && (
      <div className={style.alert}>
        {message}
      </div>
    )
  );
}

export default Alert;