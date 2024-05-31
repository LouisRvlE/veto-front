import { Badge, Card, Group, Title } from "@mantine/core";
import { NavLink } from "react-router-dom";
import useRecord from "../../../scripts/hooks/useRecord";
import { colors } from "../../../scripts/var";

const ReportResume = ({ id }: { id: number }) => {
    const { data } = useRecord("report", id);
    return (
        <Card withBorder component={NavLink} to={`/appointments/${id}`}>
            <Group>
                <Title order={3}>{data?.name}</Title>
                <Badge color={colors.report}>{data?.id}</Badge>
            </Group>
        </Card>
    );
};

export default ReportResume;
