import {
    ActionIcon,
    Box,
    Group,
    Loader,
    SimpleGrid,
    Title,
} from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import { NavLink } from "react-router-dom";
import useList from "../../../scripts/hooks/useList";
import ResumeClient from "../components/Resume";
import { colors } from "../../../scripts/var";

const Clients = () => {
    const { data, loading } = useList("client");
    return (
        <Box>
            <Group mb={"xs"}>
                <Title> Clients </Title>
                <ActionIcon
                    color={colors.client}
                    component={NavLink}
                    to={"create"}
                >
                    <IconPlus />
                </ActionIcon>
            </Group>

            {loading ? (
                <Group justify="center">
                    <Loader />
                </Group>
            ) : (
                <SimpleGrid cols={3}>
                    {data?.map((client) => (
                        <ResumeClient client={client} />
                    ))}
                </SimpleGrid>
            )}
        </Box>
    );
};

export default Clients;
