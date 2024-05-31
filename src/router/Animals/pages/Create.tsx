import { useNavigate } from "react-router-dom";
import { createRecord } from "../../../scripts/api";
import { Animal } from "../../../scripts/types/Animal";
import Form from "../components/Form";
import { Title } from "@mantine/core";

const CreateAnimal = () => {
    const n = useNavigate();
    const onSubmit = async (values: Partial<Animal>) => {
        await createRecord("animal", values);
        n("/animals");
    };

    return (
        <>
            <Title order={1}>Ajouter un Animal</Title>
            <Form animal={{}} onSubmit={onSubmit} />
        </>
    );
};

export default CreateAnimal;
