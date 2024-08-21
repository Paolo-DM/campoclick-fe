// NextUI
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";

const CustomModal = ({
  isOpen,
  onClose,
  title,
  children,
  footerActions,
  size,
  minHeight,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onClose}
      size={size || "md"}
      scrollBehavior="inside"
      placement="center"
      backdrop="blur"
    >
      <ModalContent>
        {() => (
          <>
            {title && (
              <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
            )}
            <ModalBody>{children}</ModalBody>
            <ModalFooter>
              {footerActions || (
                <>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Chiudi
                  </Button>
                  <Button color="primary" onPress={onClose}>
                    Conferma
                  </Button>
                </>
              )}
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default CustomModal;
