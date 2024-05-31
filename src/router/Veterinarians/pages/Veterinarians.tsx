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
import ResumeVeterinarian from "../components/Resume";
import { colors } from "../../../scripts/var";

const Veterinarians = () => {
    const { data, loading } = useList("veterinarian");
    return (
        <Box>
            <Group mb={"xs"}>
                <Title> Vétérinaires </Title>
                <ActionIcon
                    color={colors.veterinarian}
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
                    {data?.map((veterinarian) => (
                        <ResumeVeterinarian veterinarian={veterinarian} />
                    ))}
                </SimpleGrid>
            )}
        </Box>
    );
};

export default Veterinarians;
