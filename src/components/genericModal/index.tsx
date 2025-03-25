import { Modal } from "antd";
import { ReactNode } from "react";

interface GenericModalProps {
  title: string;
  children: ReactNode;
  isModalOpen: boolean;
  handleClose: () => void;
  footer?: boolean;
  cancelText?: string;
  onOk?: () => void;
  okText?: string;
}

export default function GenericModal({
  title,
  children,
  isModalOpen,
  handleClose,
  footer,
  onOk,
  okText,
  cancelText,
}: GenericModalProps) {
  return (
    <Modal
      title={title}
      open={isModalOpen}
      onCancel={handleClose}
      footer={footer}
      cancelText={cancelText}
      onOk={onOk}
      okText={okText}
    >
      {children}
    </Modal>
  );
}
