import { Badge, Card, Group, Title, Text } from "@mantine/core";
import { NavLink } from "react-router-dom";
import { Appointment } from "../../../scripts/types/Appointment";
import { colors } from "../../../scripts/var";
import useRecord from "../../../scripts/hooks/useRecord";
import AppointmentDate from "./AppointmentDate";
import AnimalName from "./AnimalName";

const ResumeAppointment = ({ appointment }: { appointment: Appointment }) => {
    const { data: veterinarian } = useRecord(
        "veterinarian",
        appointment.veterinarian
    );

    return (
        <Card
            component={NavLink}
            to={appointment.id + ""}
            withBorder
            key={appointment.id}
        >
            <Group>
                <Title textWrap="wrap" order={3}>
                    {veterinarian?.name}
                    <Text>
                        Date :{" "}
                        <AppointmentDate appointmentId={appointment.id} />
                    </Text>
                    <Text>
                        Animal : <AnimalName animalId={appointment.animal} />
                    </Text>
                </Title>
                <Badge color={colors.appointment}>{appointment.id}</Badge>
            </Group>
        </Card>
    );
};

export default ResumeAppointment;
