import { AppShell, MantineProvider, Title } from "@mantine/core";
import { Outlet } from "react-router-dom";

const Shell = () => {
    return (
        <MantineProvider>
            <AppShell
                header={{
                    height: 50,
                }}
            >
                <AppShell.Header>
                    <Title>Veto</Title>
                </AppShell.Header>
                <AppShell.Main>
                    <Outlet />
                </AppShell.Main>
            </AppShell>
        </MantineProvider>
    );
};

export default Shell;
