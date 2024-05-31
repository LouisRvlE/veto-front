import { Badge, Box, Button, Group, SimpleGrid, Title } from "@mantine/core";
import { modals } from "@mantine/modals";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { deleteRecord } from "../../../scripts/api";
import useRecord from "../../../scripts/hooks/useRecord";
import { colors } from "../../../scripts/var";
import AppointmentResume from "../components/VeterinarianResume";

export const Veterinarian = () => {
    const { id } = useParams();
    const { data, loading } = useRecord("veterinarian", id);

    const n = useNavigate();

    if (loading) return "Loading...";
    if (!data) return "Not found";

    const handleDelete = () => {
        modals.openConfirmModal({
            title: "Delete veterinarian",
            confirmProps: {
                color: "red",
            },
            labels: { confirm: "Delete", cancel: "Cancel" },
            onConfirm: async () => {
                if (!id) return;
                await deleteRecord("veterinarian", id);
                n("/veterinarians");
            },
        });
    };

    return (
        <Box>
            <Group mb={"xs"}>
                <Title>{data.name}</Title>
                <Badge color={colors.veterinarian}>{data.id}</Badge>
            </Group>
            <SimpleGrid cols={2}>
                {data.appointments?.map((animal) => (
                    <AppointmentResume id={animal} />
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
