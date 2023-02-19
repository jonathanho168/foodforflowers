import { Button, Flex, Icon, IconButton, useDisclosure } from "@chakra-ui/react";
import React from "react";
import Navbar from "../components/Navbar";
import GroupIcon from '@mui/icons-material/Group';
import RewardModal from "../components/RewardModal";
import RecommendationModal from "../components/RecommendationModal";

const HomePage: React.FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { isOpen: isOpenRecommendation, onOpen: onOpenRecommendation, onClose: onCloseRecommendation } = useDisclosure();
    return (
        <>
            <Flex justifyContent={'space-between'} zIndex="1">
                <Button onClick={onOpenRecommendation}> Check Update </Button>
                <IconButton icon={<Icon as={GroupIcon} />} aria-label={""}></IconButton>
            </Flex>
            <RecommendationModal isOpen={isOpenRecommendation} onOpenReward={onOpen} onClose={onCloseRecommendation} />
            <RewardModal isOpen={isOpen} onClose={onClose} />
            <Flex className="container" flexDirection={"column"} h="100vh" zIndex="2">
            <div className="glitch-embed-wrap" style={{ height: "calc(100% - 60px)", width: "100%" }}>
                <iframe
                    src="https://glitch.com/embed/#!/embed/meteor-rune-lyre?path=.env&previewSize=100"
                    title="meteor-rune-lyre on Glitch"
                    allow="geolocation; microphone; camera; midi; encrypted-media; xr-spatial-tracking; fullscreen"
                    allowFullScreen
                    style={{ height: "100%", width: "100%", border: "0" }}>
                </iframe>
            </div>
                <nav className="navbar">
                    <Navbar />
                </nav>
            </Flex>

        </>
    );
};

export default HomePage;
