import { Flex } from "@chakra-ui/react";
import React from "react";
import Navbar from "../components/Navbar";

const HomePage: React.FC = () => {
    return (
        <Flex className="container" flexDirection={"column"} h="100vh">
            <div className="glitch-embed-wrap" style={{ height: "calc(100% - 60px)", width: "390px" }}>
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
    );
};

export default HomePage;
