import {
    Badge,
    Box,
    Button,
    Group,
    SimpleGrid,
    Title,
    Text,
    Flex,
} from "@mantine/core";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import useRecord from "../../../scripts/hooks/useRecord";
import { modals } from "@mantine/modals";
import { deleteRecord } from "../../../scripts/api";
import { colors } from "../../../scripts/var";
import ClientName from "../../Clients/components/ClientName";
import AppointmentResume from "../../Appointments/components/AppointmentResume";

export const Animal = () => {
    const { id } = useParams();
    const { data, loading } = useRecord("animal", id);

    const n = useNavigate();

    if (loading) return "Loading...";
    if (!data) return "Not found";

    const handleDelete = () => {
        modals.openConfirmModal({
            title: "Supprimer animal",
            confirmProps: {
                color: "red",
            },
            labels: { confirm: "Delete", cancel: "Cancel" },
            onConfirm: async () => {
                if (!id) return;
                await deleteRecord("animal", id);
                n("/animals");
            },
        });
    };

    return (
        <Box>
            <Flex gap="xs" direction={"column"} align={"start"} wrap={"wrap"}>
                <Flex gap={"md"} align={"center"}>
                    <Title>{data.name}</Title>
                    <Badge color={colors.animal}>{data.id}</Badge>
                </Flex>
                <Text>Âge : {data.age}</Text>
                <Text>Sexe : {data.sexe}</Text>
                <Button
                    color={colors.client}
                    component={NavLink}
                    to={`/clients/${data.client}`}
                >
                    Client : <ClientName id={data.client} />
                </Button>
                <Text>Race : {data.type}</Text>
                <Text>Description : {data.note}</Text>
            </Flex>
            <SimpleGrid cols={2}>
                {data.appointments?.map((appointment) => (
                    <AppointmentResume id={appointment} />
                ))}
            </SimpleGrid>
            <Group mt="xs">
                <Button component={NavLink} to="update">
                    Éditer
                </Button>
                <Button onClick={handleDelete} color="red">
                    Supprimer
                </Button>
            </Group>
        </Box>
    );
};
