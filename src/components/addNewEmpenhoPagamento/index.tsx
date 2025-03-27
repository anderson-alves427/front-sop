"use client";

import { Button } from "antd";
import { useState } from "react";
import GenericModal from "../genericModal";
import FormEmpenhoPagamento from "../formEmpenhoPagamento";

interface AddNewEmpenhoPagamentoProps {
  buttonLabel: string;
  title: string;
  despesaId?: string;
  empenhoId?: string;
  type: "pagamento" | "empenho";
}

export default function AddNewEmpenhoPagamento({
  buttonLabel,
  title,
  despesaId,
  type,
  empenhoId,
}: AddNewEmpenhoPagamentoProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button type="primary" onClick={() => setIsModalOpen(true)}>
        {buttonLabel}
      </Button>
      <GenericModal
        handleClose={() => setIsModalOpen(false)}
        isModalOpen={isModalOpen}
        title={title}
        footer
      >
        <FormEmpenhoPagamento
          onSuccess={() => setIsModalOpen(false)}
          despesaId={despesaId}
          empenhoId={empenhoId}
          type={type}
        />
      </GenericModal>
    </>
  );
}
