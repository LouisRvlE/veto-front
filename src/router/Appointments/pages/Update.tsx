import { useNavigate, useParams } from "react-router-dom";
import { updateRecord } from "../../../scripts/api";
import useRecord from "../../../scripts/hooks/useRecord";
import { Appointment } from "../../../scripts/types/Appointment";
import Form from "../components/Form";
import { Title } from "@mantine/core";

export const UpdateAppointment = () => {
    const { id } = useParams();
    const n = useNavigate();
    const { data, loading } = useRecord("appointment", id);

    const onSubmit = async (values: Partial<Appointment>) => {
        if (!id) return;
        await updateRecord("appointment", parseInt(id || "0"), values);
        n(`/appointments/${id}`);
    };

    return loading || !data ? (
        "loading..."
    ) : (
        <>
            <Title order={1}>Modifier un Rendez-vous</Title>

            <Form appointment={data} onSubmit={onSubmit} />
        </>
    );
};
