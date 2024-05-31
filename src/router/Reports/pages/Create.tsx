import { useNavigate } from "react-router-dom";
import { createRecord } from "../../../scripts/api";
import { Report } from "../../../scripts/types/Report";
import Form from "../components/Form";
import { Title } from "@mantine/core";

const CreateReport = () => {
    const n = useNavigate();
    const onSubmit = async (values: Partial<Report>) => {
        await createRecord("report", values);
        n("/reports");
    };

    return (
        <>
            <Title order={1}>Créer un Rapport</Title>
            <Form report={{}} onSubmit={onSubmit} />
        </>
    );
};

export default CreateReport;
