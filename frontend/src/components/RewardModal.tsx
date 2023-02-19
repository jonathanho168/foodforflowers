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
import { useState } from 'react';
import * as Routes from "../constants/Routes";

type RewardModalProps = {
    isOpen: boolean;
    onClose: () => void;
}

const RewardModal = ({ isOpen, onClose }: RewardModalProps): React.ReactElement => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    return (
        <Modal isCentered={true} isOpen={isOpen} onClose={onClose} size={screenWidth < 400 ? 'xs' : 'sm'}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>You've earned a new seed!</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    Congratulations on doing well this month! You were consistent in working toward your goals and being proactive about eating consistently and healthily.
                </ModalBody>

                <ModalFooter as={Flex} flexDirection='column' justifyContent='center' paddingBottom="6">
                    <Button onClick={onClose} colorScheme='green' mb={2}>Plant seed in garden</Button>
                    <Button onClick={onClose} variant='link' colorScheme='green'>Keep seed in inventory</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}

export default RewardModal;