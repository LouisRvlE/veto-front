import { Badge, Card, Group, Title } from "@mantine/core";
import { NavLink } from "react-router-dom";
import useRecord from "../../../scripts/hooks/useRecord";
import { colors } from "../../../scripts/var";

const AppointmentResume = ({ id }: { id: number }) => {
    const { data } = useRecord("appointment", id);
    return (
        <Card withBorder component={NavLink} to={`/appointments/${id}`}>
            <Group>
                <Title order={3}>
                    {typeof data?.date === "string" ? data?.date : "unset"}
                </Title>
                <Badge color={colors.appointment}>{data?.id}</Badge>
            </Group>
        </Card>
    );
};

export default AppointmentResume;
