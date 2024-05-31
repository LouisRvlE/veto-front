import {
    ActionIcon,
    Box,
    Group,
    Loader,
    SimpleGrid,
    Title,
} from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import { NavLink } from "react-router-dom";
import useList from "../../../scripts/hooks/useList";
import ResumeAnimal from "../components/Resume";
import { colors } from "../../../scripts/var";

const Animals = () => {
    const { data, loading } = useList("animal");
    return (
        <Box>
            <Group mb={"xs"}>
                <Title> Animaux </Title>
                <ActionIcon
                    color={colors.animal}
                    component={NavLink}
                    to={"create"}
                >
                    <IconPlus />
                </ActionIcon>
            </Group>

            {loading ? (
                <Group justify="center">
                    <Loader />
                </Group>
            ) : (
                <SimpleGrid cols={3}>
                    {data?.map((animal) => (
                        <ResumeAnimal animal={animal} />
                    ))}
                </SimpleGrid>
            )}
        </Box>
    );
};

export default Animals;
