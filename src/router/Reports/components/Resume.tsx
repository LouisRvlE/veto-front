import { Badge, Card, Group, Title } from "@mantine/core";
import { NavLink } from "react-router-dom";
import { Report } from "../../../scripts/types/Report";
import { colors } from "../../../scripts/var";

const ResumeReport = ({ report }: { report: Report }) => {
    return (
        <Card
            component={NavLink}
            to={report.id + ""}
            withBorder
            key={report.id}
        >
            <Group>
                <Title textWrap="wrap" order={3}>
                    {report.name}
                </Title>
                <Badge color={colors.report}>{report.id}</Badge>
            </Group>
        </Card>
    );
};

export default ResumeReport;
