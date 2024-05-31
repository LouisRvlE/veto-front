import { Badge, Card, Group, Title } from "@mantine/core";
import { NavLink } from "react-router-dom";
import { Client } from "../../../scripts/types/Client";
import { colors } from "../../../scripts/var";

const ResumeClient = ({ client }: { client: Client }) => {
    return (
        <Card
            component={NavLink}
            to={client.id + ""}
            withBorder
            key={client.id}
        >
            <Group>
                <Title textWrap="wrap" order={3}>
                    {client.name}
                </Title>
                <Badge color={colors.client}>{client.id}</Badge>
            </Group>
        </Card>
    );
};

export default ResumeClient;
