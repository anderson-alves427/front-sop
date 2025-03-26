"use client";

import { Button } from "antd";
import { useState } from "react";
import GenericModal from "../genericModal";
import FormDespesa from "../formDespesa";

interface ButtonOpenGenericModalProps {
  buttonLabel: string;
  titleModal: string;
}

export default function AddNewDespesa({
  buttonLabel,
  titleModal,
}: ButtonOpenGenericModalProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setIsModalOpen(true)}>{buttonLabel}</Button>
      <GenericModal
        handleClose={() => setIsModalOpen(false)}
        isModalOpen={isModalOpen}
        title={titleModal}
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
