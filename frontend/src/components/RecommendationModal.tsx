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

type RecommendationModalProps = {
    isOpen: boolean;
    onOpenReward: () => void;
    onClose: () => void;
}

const RecommendationModal = ({ isOpen, onOpenReward, onClose }: RecommendationModalProps): React.ReactElement => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    return (
        <Modal isCentered={true} isOpen={isOpen} onClose={onClose} size={screenWidth < 400 ? 'xs' : 'sm'}>
            <ModalOverlay />
            <ModalContent fontSize="14" margin="2em">
                <ModalHeader padding="1rem"> Update: February 19, 2022</ModalHeader>
                <ModalCloseButton />
                <ModalBody padding="1rem" pl="1.5rem" pr="1.5rem">
                    <p>Congratulations on doing well this month! You were consistent in working toward your goals and being proactive about eating consistently and healthily.</p>
                    <br />
                    <p>It looks like you have been eating a variety of meals throughout the week. To maintain a healthy diet, try to focus on eating more lean proteins, fruits, and vegetables. Make sure to include a variety of colors in your meals to ensure you are getting a wide range of vitamins and minerals. Additionally, try to limit your intake of processed foods and added sugars. Finally, make sure to stay hydrated by drinking plenty of water throughout the day.</p>
                </ModalBody>

                <ModalFooter as={Flex} flexDirection='column' justifyContent='center' pd="1rem">
                    <Button mt={4} onClick={() => {
                        onClose();
                        onOpenReward();
                    }} colorScheme="green">Continue</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}

export default RecommendationModal;