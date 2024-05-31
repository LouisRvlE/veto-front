import { useNavigate, useParams } from "react-router-dom";
import useRecord from "../../../scripts/hooks/useRecord";
import { Client } from "../../../scripts/types/Client";
import { updateRecord } from "../../../scripts/api";
import Form from "../components/Form";
import { Title } from "@mantine/core";

export const UpdateClient = () => {
    const { id } = useParams();
    const n = useNavigate();
    const { data, loading } = useRecord("client", id);

    const onSubmit = async (values: Partial<Client>) => {
        if (!id) return;
        await updateRecord("client", parseInt(id || "0"), values);
        n(`/clients/${id}`);
    };

    return (
        <>
            <Title>Modifier un client</Title>
            {loading || !data ? (
                "loading..."
            ) : (
                <Form client={data} onSubmit={onSubmit} />
            )}
        </>
    );
};
