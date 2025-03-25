"use client";

import { Button } from "antd";
import { useState } from "react";
import GenericModal from "../genericModal";
import FormDespesa from "../formDespesa";

export default function AddNewDespesa() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setIsModalOpen(true)}>Adicionar despesa</Button>
      <GenericModal
        handleClose={() => setIsModalOpen(false)}
        isModalOpen={isModalOpen}
        title="Criar despesa"
        footer
      >
        <FormDespesa />
      </GenericModal>
    </>
  );
}
