import { useNavigate } from "react-router-dom";
import { createRecord } from "../../../scripts/api";
import { Veterinarian } from "../../../scripts/types/Veterinarian";
import Form from "../components/Form";
import { Title } from "@mantine/core";

const CreateVeterinarian = () => {
    const n = useNavigate();
    const onSubmit = async (values: Partial<Veterinarian>) => {
        await createRecord("veterinarian", values);
        n("/veterinarians");
    };

    return (
        <>
            <Title order={1}>Ajouter un vétérinaire</Title>
            <Form veterinarian={{}} onSubmit={onSubmit} />
        </>
    );
};

export default CreateVeterinarian;
