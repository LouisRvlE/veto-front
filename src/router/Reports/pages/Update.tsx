import { useNavigate, useParams } from "react-router-dom";
import useRecord from "../../../scripts/hooks/useRecord";
import { Report } from "../../../scripts/types/Report";
import { updateRecord } from "../../../scripts/api";
import Form from "../components/Form";
import { Title } from "@mantine/core";

export const UpdateReport = () => {
    const { id } = useParams();
    const n = useNavigate();
    const { data, loading } = useRecord("report", id);

    const onSubmit = async (values: Partial<Report>) => {
        if (!id) return;
        await updateRecord("report", parseInt(id || "0"), values);
        n(`/reports/${id}`);
    };

    return loading || !data ? (
        "loading..."
    ) : (
        <>
            <Title order={1}>Modifier un rapport</Title>
            <Form report={data} onSubmit={onSubmit} />
        </>
    );
};
