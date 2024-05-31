import { useNavigate } from "react-router-dom";
import { createRecord } from "../../../scripts/api";
import { Client } from "../../../scripts/types/Client";
import Form from "../components/Form";
import { Title } from "@mantine/core";

const CreateClient = () => {
    const n = useNavigate();
    const onSubmit = async (values: Partial<Client>) => {
        await createRecord("client", values);
        n("/clients");
    };

    return (
        <>
            <Title>Ajouter un nouveau client</Title>
            <Form client={{}} onSubmit={onSubmit} />
        </>
    );
};

export default CreateClient;
