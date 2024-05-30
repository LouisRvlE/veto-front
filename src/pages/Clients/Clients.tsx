import { Box } from "@mantine/core";
import useList from "../../scripts/hooks/useList";

const Clients = () => {
    const { data, loading } = useList("client");
    return (
        <Box>
            {loading
                ? "Loading..."
                : data?.map((client) => (
                      <Box key={client.id}>{client.name}</Box>
                  ))}
        </Box>
    );
};

export default Clients;
