import { ReactNode } from 'react';
import {
    Box,
    Flex,
    Avatar,
    HStack,
    Link,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';

const Links = ['Dashboard', 'Projects', 'Team'];

const NavLink = ({ children }: { children: ReactNode }) => (
    <Link
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        href={'#'}>
        {children}
    </Link>
);

export default function Navbar() {
    return (
        <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
            <Flex h={20} justifyContent={'space-between'}>
                <Flex alignItems={'center'}>
                    <HStack
                        as={'nav'}
                        spacing={4}
                        display={'flex'}>
                        <NavLink key={'Home'}>{'Home'}</NavLink>
                        <Button
                            variant={'solid'}
                            colorScheme={'teal'}
                            size={'sm'}
                            leftIcon={<AddIcon />}>
                            Enter a Meal
                        </Button>
                        <NavLink key={'Profile'}>{'Profile'}</NavLink>
                    </HStack>
                </Flex>
            </Flex>
        </Box>
    );
}