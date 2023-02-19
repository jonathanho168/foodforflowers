import { Flex } from "@chakra-ui/react";
import React from "react";
import Navbar from "../components/Navbar";

const HomePage: React.FC = () => {
    return (
        <Flex className="container" flexDirection={"column-reverse"} h="100vh">
            <nav className="navbar">
                <Navbar />
            </nav>
        </Flex>
    );
};

export default HomePage;
