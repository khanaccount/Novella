import React, { useState } from "react";
import { FixedHeader } from "./FixedHeader";
import { ModalForm } from "./ModalForm";
import { BurgerMenu } from "./BurgerMenu";
import { Header } from "./Header";

export const MainHeader: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const toggleBurgerMenu = () => setIsBurgerMenuOpen((prevState) => !prevState);

  return (
    <>
      <FixedHeader />
      <ModalForm isModalOpen={isModalOpen} closeModal={closeModal} />
      <Header
        openModal={openModal}
        toggleBurgerMenu={toggleBurgerMenu}
        isBurgerMenuOpen={isBurgerMenuOpen}
      />
      <BurgerMenu isBurgerMenuOpen={isBurgerMenuOpen} toggleBurgerMenu={toggleBurgerMenu} />
    </>
  );
};
