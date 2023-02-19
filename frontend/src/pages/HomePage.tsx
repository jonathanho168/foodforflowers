import { Flex } from "@chakra-ui/react";
import React from "react";
import Navbar from "../components/Navbar";

const App: React.FC = () => {
    return (
        <Flex className="container" flexDirection={"column-reverse"} h="100vh">
            <nav className="navbar">
                <Navbar />
            </nav>
            <div>
                <h1>test</h1>
            </div>
        </Flex>
    );
};

export default App;
