"use client";

import { Button } from "antd";
import { useState } from "react";
import GenericModal from "../genericModal";
import FormDespesa from "../formDespesa";

export default function AddNewDespesa() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setIsModalOpen(true)}>
        Adicionar Nova Despesa
      </Button>
      <GenericModal
        handleClose={() => setIsModalOpen(false)}
        isModalOpen={isModalOpen}
        title="Criar Nova Despesa"
        footer
      >
        <FormDespesa
          onSuccess={() => {
            setIsModalOpen(false);
          }}
        />
      </GenericModal>
    </>
  );
}
