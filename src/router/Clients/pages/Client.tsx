import { Badge, Box, Button, Group, SimpleGrid, Title } from "@mantine/core";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import useRecord from "../../../scripts/hooks/useRecord";
import { modals } from "@mantine/modals";
import { deleteRecord } from "../../../scripts/api";
import AnimalResume from "../../Animals/components/AnimalResume";
import { colors } from "../../../scripts/var";

export const Client = () => {
    const { id } = useParams();
    const { data, loading } = useRecord("client", id);

    const n = useNavigate();

    if (loading) return "Loading...";
    if (!data) return "Not found";

    const handleDelete = () => {
        modals.openConfirmModal({
            title: "Delete client",
            confirmProps: {
                color: "red",
            },
            labels: { confirm: "Delete", cancel: "Cancel" },
            onConfirm: async () => {
                if (!id) return;
                await deleteRecord("client", id);
                n("/clients");
            },
        });
    };

    return (
        <Box>
            <Group mb={"xs"}>
                <Title>{data.name}</Title>
                <Badge color={colors.client}>{data.id}</Badge>
            </Group>
            <SimpleGrid cols={2}>
                {data.animals?.map((animal) => (
                    <AnimalResume id={animal} />
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
