import React, { useState } from 'react';
import styled from 'styled-components';
import IconCross from './IconCross';

interface ModalProps {
  title: string;
  description: string;
}

const Modal: React.FC<ModalProps> = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={openModal}>Show Request</button>

      {isOpen && (
        <ModalWrapper>
          <ModalContent>
            <ModalTitle>{title}</ModalTitle>
            <ModalDescription>{description}</ModalDescription>
            <a onClick={closeModal}><IconCross /></a>
          </ModalContent>
        </ModalWrapper>
      )}
    </>
  );
};

export default Modal;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 4px;
`;

const ModalTitle = styled.h2`
  margin-top: 0;
`;

const ModalDescription = styled.p`
  margin-bottom: 0;
`;