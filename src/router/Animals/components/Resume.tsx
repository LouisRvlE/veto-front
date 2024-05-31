import { Badge, Card, Group, Text, Title } from "@mantine/core";
import { NavLink } from "react-router-dom";
import { Animal } from "../../../scripts/types/Animal";
import { colors } from "../../../scripts/var";
import ClientName from "../../Clients/components/ClientName";

const ResumeAnimal = ({ animal }: { animal: Animal }) => {
    return (
        <Card
            component={NavLink}
            to={animal.id + ""}
            withBorder
            key={animal.id}
        >
            <Group>
                <Title textWrap="wrap" order={3}>
                    {animal.name}
                </Title>
                <Badge color={colors.animal}>{animal.id}</Badge>
            </Group>
            <Text>
                <ClientName id={animal.client} />
            </Text>
        </Card>
    );
};

export default ResumeAnimal;
