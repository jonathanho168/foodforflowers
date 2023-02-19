import { Button, Flex, Link, Modal, useDisclosure } from "@chakra-ui/react";
import { FFFGREEN } from "../constants/Colors";
import * as Routes from "../constants/Routes";

const RewardModal = (isOpen: boolean, onClose: () => void) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <Flex>
                <h2>You've earned a new seed!</h2>
                <p>Congratulations on doing well this month! You were consistent in working toward your goals and being proactive about eating consistently and healthily.</p>
                {/* <Button color={FFFGREEN} variant='link' to={Routes.HOME_PAGE}>Plant seed in garden</Button> */}
                <Button as='a' href={Routes.HOME_PAGE}></Button>
                <Link href={Routes.HOME_PAGE} color={FFFGREEN}>Keep seed in inventory</Link>
            </Flex>
        </Modal>
    );
}

export default RewardModal;