import { Badge, Card, Group, Title } from "@mantine/core";
import { NavLink } from "react-router-dom";
import { Veterinarian } from "../../../scripts/types/Veterinarian";
import { colors } from "../../../scripts/var";

const ResumeVeterinarian = ({
    veterinarian,
}: {
    veterinarian: Veterinarian;
}) => {
    return (
        <Card
            component={NavLink}
            to={veterinarian.id + ""}
            withBorder
            key={veterinarian.id}
        >
            <Group>
                <Title textWrap="wrap" order={3}>
                    {veterinarian.name}
                </Title>
                <Badge color={colors.veterinarian}>{veterinarian.id}</Badge>
            </Group>
        </Card>
    );
};

export default ResumeVeterinarian;
