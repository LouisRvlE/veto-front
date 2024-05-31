import { useNavigate } from "react-router-dom";
import { createRecord } from "../../../scripts/api";
import Form from "../components/Form";
import { Appointment } from "../../../scripts/types/Appointment";
import { Title } from "@mantine/core";

const CreateAppointment = () => {
    const n = useNavigate();
    const onSubmit = async (values: Partial<Appointment>) => {
        await createRecord("appointment", values);
        n("/appointments");
    };

    return (
        <>
            <Title>Créer un rendez-vous</Title>
            <Form appointment={{}} onSubmit={onSubmit} />
        </>
    );
};

export default CreateAppointment;
