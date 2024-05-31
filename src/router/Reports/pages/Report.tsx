import { Badge, Box, Button, Group, Text, Title } from "@mantine/core";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import useRecord from "../../../scripts/hooks/useRecord";
import { modals } from "@mantine/modals";
import { deleteRecord } from "../../../scripts/api";
import { colors } from "../../../scripts/var";
import AppointmentResume from "../../Appointments/components/AppointmentResume";

export const Report = () => {
    const { id } = useParams();
    const { data, loading } = useRecord("report", id);

    const n = useNavigate();

    if (loading) return "Loading...";
    if (!data) return "Not found";

    const handleDelete = () => {
        modals.openConfirmModal({
            title: "Delete report",
            confirmProps: {
                color: "red",
            },
            labels: { confirm: "Delete", cancel: "Cancel" },
            onConfirm: async () => {
                if (!id) return;
                await deleteRecord("report", id);
                n("/reports");
            },
        });
    };

    return (
        <Box>
            <Group mb={"xs"}>
                <Title>{data.name}</Title>
                <Badge color={colors.report}>{data.id}</Badge>
            </Group>
            <Text> {data.description} </Text>
            <AppointmentResume id={data.appointment} />
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
