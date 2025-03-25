"use client";

import { Button } from "antd";
import { ReactNode, useState } from "react";
import GenericModal from "../genericModal";

interface ButtonOpenGenericModalProps {
  buttonLabel: string;
  titleModal: string;
  children: ReactNode;
}

export default function ButtonOpenGenericModal({
  buttonLabel,
  titleModal,
  children,
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
        {children}
      </GenericModal>
    </>
  );
}
