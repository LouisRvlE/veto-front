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
import ResumeAppointment from "../components/Resume";
import { colors } from "../../../scripts/var";

const Appointments = () => {
    const { data, loading } = useList("appointment");
    return (
        <Box>
            <Group mb={"xs"}>
                <Title> Rendez-vous </Title>
                <ActionIcon
                    color={colors.appointment}
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
                    {data?.map((appointment) => (
                        <ResumeAppointment appointment={appointment} />
                    ))}
                </SimpleGrid>
            )}
        </Box>
    );
};

export default Appointments;
