import { Badge, Box, Button, Group, Text } from "@mantine/core";
import { modals } from "@mantine/modals";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { deleteRecord } from "../../../scripts/api";
import useRecord from "../../../scripts/hooks/useRecord";
import { colors } from "../../../scripts/var";
import ReportResume from "../../Reports/components/ReportResume";
import { AnimalName } from "../components/AnimalName";
import { VeterinarianName } from "../components/VeterinarianName";

export const Appointment = () => {
    const { id } = useParams();
    const { data, loading } = useRecord("appointment", id);

    const n = useNavigate();

    if (loading) return "Loading...";
    if (!data) return "Not found";

    const handleDelete = () => {
        modals.openConfirmModal({
            title: "Delete appointment",
            confirmProps: {
                color: "red",
            },
            labels: { confirm: "Delete", cancel: "Cancel" },
            onConfirm: async () => {
                if (!id) return;
                await deleteRecord("appointment", id);
                n("/appointments");
            },
        });
    };

    return (
        <Box>
            <Group mb={"xs"}>
                <VeterinarianName veterinarianId={data.veterinarian} />
                <Badge color={colors.appointment}>{data.id}</Badge>
            </Group>
            <AnimalName animalId={data.animal} />
            {data.report > -1 && <ReportResume id={data.report} />}
            <Text>{typeof data.date === "string" ? data.date : "unset"}</Text>
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
