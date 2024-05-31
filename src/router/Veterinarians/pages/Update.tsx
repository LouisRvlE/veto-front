import { useNavigate, useParams } from "react-router-dom";
import { updateRecord } from "../../../scripts/api";
import useRecord from "../../../scripts/hooks/useRecord";
import { Veterinarian } from "../../../scripts/types/Veterinarian";
import Form from "../components/Form";
import { Title } from "@mantine/core";

export const UpdateVeterinarian = () => {
    const { id } = useParams();
    const n = useNavigate();
    const { data, loading } = useRecord("veterinarian", id);

    const onSubmit = async (values: Partial<Veterinarian>) => {
        if (!id) return;
        await updateRecord("veterinarian", parseInt(id || "0"), values);
        n(`/veterinarians/${id}`);
    };

    return loading || !data ? (
        "loading..."
    ) : (
        <>
            <Title order={1}>Modifier un vétérinaire</Title>
            <Form veterinarian={data} onSubmit={onSubmit} />
        </>
    );
};
