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
import ResumeReport from "../components/Resume";
import { colors } from "../../../scripts/var";

const Reports = () => {
    const { data, loading } = useList("report");
    return (
        <Box>
            <Group mb={"xs"}>
                <Title> Rapports </Title>
                <ActionIcon
                    color={colors.report}
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
                    {data?.map((report) => (
                        <ResumeReport report={report} />
                    ))}
                </SimpleGrid>
            )}
        </Box>
    );
};

export default Reports;
