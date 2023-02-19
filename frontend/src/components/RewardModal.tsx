import {
    Button,
    Flex,
    Link,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import * as Routes from "../constants/Routes";

type RewardModalProps = {
    isOpen: boolean;
    onClose: () => void;
}

const RewardModal = ({ isOpen, onClose }: RewardModalProps): React.ReactElement => {
    return (
        <Modal isCentered={true} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>You've earned a new seed!</ModalHeader>
                {/* <ModalCloseButton /> */}
                <ModalBody>
                    Congratulations on doing well this month! You were consistent in working toward your goals and being proactive about eating consistently and healthily.
                </ModalBody>

                <ModalFooter as={Flex} flexDirection='column' justifyContent='center'>
                    <Button onClick={onClose} colorScheme='green' mb={2}>Plant seed in garden</Button>
                    <Button onClick={onClose} variant='link' colorScheme='green'>Keep seed in inventory</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}

export default RewardModal;