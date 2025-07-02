import React, { useState, useEffect } from 'react';

const Greeting = ({ name }) => {
  const [currentName, setCurrentName] = useState(name);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentName('Alfonsina');
    }, 3000);

    // Limpieza del temporizador
    return () => clearTimeout(timer);
  }, []);

  return <p>Hola {currentName}</p>;
};

export default Greeting;


