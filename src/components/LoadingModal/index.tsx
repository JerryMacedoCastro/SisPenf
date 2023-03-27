import { Heading, HStack, Modal, Spinner, View } from "native-base";

interface IModalLoading {
  isOpen: boolean;
  message: string;
  onClose: VoidFunction;
}

export const LoadingModal = ({ isOpen, message, onClose }: IModalLoading) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.Content>
        <HStack
          space={2}
          alignItems="center"
          justifyContent="center"
          height="16"
        >
          <Spinner accessibilityLabel="Loading posts" size="lg" />
          <Heading color="primary.500" fontSize="2xl">
            {message}
          </Heading>
        </HStack>
      </Modal.Content>
    </Modal>
  );
};
