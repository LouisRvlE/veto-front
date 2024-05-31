import { useNavigate, useParams } from "react-router-dom";
import useRecord from "../../../scripts/hooks/useRecord";
import { Animal } from "../../../scripts/types/Animal";
import { updateRecord } from "../../../scripts/api";
import Form from "../components/Form";
import { Title } from "@mantine/core";

export const UpdateAnimal = () => {
    const { id } = useParams();
    const n = useNavigate();
    const { data, loading } = useRecord("animal", id);

    const onSubmit = async (values: Partial<Animal>) => {
        if (!id) return;
        await updateRecord("animal", parseInt(id || "0"), values);
        n(`/animals/${id}`);
    };

    return loading || !data ? (
        "loading..."
    ) : (
        <>
            <Title>Modifier un animal</Title>
            <Form animal={data} onSubmit={onSubmit} />
        </>
    );
};
