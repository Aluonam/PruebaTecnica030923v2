import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'antd';

const ModalDetalles = ({nombrePokemon}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    llamadaAPIHabilidades();
}, [])

    const [datosHabilidades, setDatosHabilidades] = useState({})

  const llamadaAPIHabilidades = async () => {
    try{
    const llamada = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`);
    const datos = await llamada.json();
    console.log(datos)
    setDatosHabilidades(datos);
    } catch (error){"error", error}
}

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal title="Detalles" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <img src={datosHabilidades.sprites?.front_default}></img>
        <p>{datosHabilidades.abilities?.[0].ability.name}</p>
      </Modal>
    </>
  );
};
export default ModalDetalles;