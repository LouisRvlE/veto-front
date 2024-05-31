import { AppShell, Box, Button, Flex, MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";
import { NavLink, Outlet } from "react-router-dom";
import { colors } from "../../scripts/var";

const Shell = () => {
    return (
        <MantineProvider>
            <ModalsProvider />
            <Notifications />
            <AppShell
                header={{
                    height: 50,
                }}
            >
                <AppShell.Header>
                    <Flex
                        align={"center"}
                        // justify={"center"}
                        h="100%"
                        px="xs"
                        gap={"xs"}
                    >
                        <Button
                            color={colors.client}
                            component={NavLink}
                            to={"clients"}
                        >
                            Clients
                        </Button>
                        <Button
                            color={colors.animal}
                            component={NavLink}
                            to={"animals"}
                        >
                            Animaux
                        </Button>
                        <Button
                            color={colors.appointment}
                            component={NavLink}
                            to={"appointments"}
                        >
                            Rendez-vous
                        </Button>
                        <Button
                            color={colors.veterinarian}
                            component={NavLink}
                            to={"veterinarians"}
                        >
                            Véterinaires
                        </Button>
                        <Button
                            color={colors.report}
                            component={NavLink}
                            to={"reports"}
                        >
                            Rapport
                        </Button>
                    </Flex>
                </AppShell.Header>
                <AppShell.Main>
                    <Box maw={"100%"} p={"md"} w={"900px"} mx={"auto"}>
                        <Outlet />
                    </Box>
                </AppShell.Main>
            </AppShell>
        </MantineProvider>
    );
};

export default Shell;
