import { Modal } from "antd";
import { ReactNode } from "react";

interface GenericModalProps {
  title: string;
  children: ReactNode;
  isModalOpen: boolean;
  handleClose: () => void;
  footer?: boolean;
}

export default function GenericModal({
  title,
  children,
  isModalOpen,
  handleClose,
  footer,
}: GenericModalProps) {
  return (
    <Modal
      title={title}
      open={isModalOpen}
      onCancel={handleClose}
      footer={footer}
    >
      {children}
    </Modal>
  );
}
