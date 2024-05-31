import { Badge, Card, Group, Title } from "@mantine/core";
import useRecord from "../../../scripts/hooks/useRecord";
import { colors } from "../../../scripts/var";
import { NavLink } from "react-router-dom";

const AnimalResume = ({ id }: { id: number }) => {
    const { data } = useRecord("animal", id);
    return (
        <Card withBorder component={NavLink} to={`/animals/${id}`}>
            <Group>
                <Title order={3}>{data?.name}</Title>
                <Badge color={colors.animal}>{data?.id}</Badge>
            </Group>
        </Card>
    );
};

export default AnimalResume;
