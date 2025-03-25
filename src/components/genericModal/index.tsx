import { Modal } from "antd";
import { ReactNode } from "react";

interface GenericModalProps {
  title: string;
  children: ReactNode;
  isModalOpen: boolean;
  handleClose: () => void;
}

export default function GenericModal({
  title,
  children,
  isModalOpen,
  handleClose,
}: GenericModalProps) {
  return (
    <Modal title={title} open={isModalOpen} onCancel={handleClose} footer>
      {children}
    </Modal>
  );
}
