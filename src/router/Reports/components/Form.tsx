import { Button, Flex, TextInput, Select } from "@mantine/core";
import { isNotEmpty, useForm } from "@mantine/form";
import { Report } from "../../../scripts/types/Report";
import useList from "../../../scripts/hooks/useList";

const ReportForm = ({
    report,
    onSubmit,
}: {
    report: Partial<Report>;
    onSubmit: (values: Partial<Report>) => Promise<void>;
}) => {
    const form = useForm<Partial<Report>>({
        initialValues: report,
        validate: {
            name: isNotEmpty("Il faut un nom"),
            description: isNotEmpty("Il faut une description"),
            appointment: isNotEmpty("Il faut un appointment"),
        },
    });

    const { data: appointments } = useList("appointment");

    return (
        <form onSubmit={form.onSubmit(onSubmit)}>
            <Flex gap="xs" direction={"row"} align={"end"} wrap={"wrap"}>
                <TextInput
                    miw={200}
                    style={{ flex: 1 }}
                    label={"Nom"}
                    placeholder={"Nom/Titre"}
                    {...form.getInputProps("name")}
                />
                <TextInput
                    miw={200}
                    style={{ flex: 1 }}
                    label={"Description"}
                    placeholder={"Description"}
                    {...form.getInputProps("description")}
                />
                <Select
                    miw={200}
                    style={{ flex: 1 }}
                    label="Appointments"
                    placeholder="Pick value"
                    data={
                        appointments
                            ?.filter((appointment) => {
                                return (
                                    appointment.report === -1 ||
                                    appointment.report === report.id
                                );
                            })
                            ?.map((appointment) => ({
                                value: appointment.id + "",
                                label: appointment.date + "",
                            })) || []
                    }
                    {...form.getInputProps("appointment")}
                    value={
                        form.values.appointment
                            ? form.values.appointment + ""
                            : undefined
                    }
                />

                <Button type="submit">Envoyer</Button>
            </Flex>
        </form>
    );
};

export default ReportForm;
