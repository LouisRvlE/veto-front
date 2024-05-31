import { Button, Flex, Select } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useForm, isNotEmpty } from "@mantine/form";
import { Appointment } from "../../../scripts/types/Appointment";
import useList from "../../../scripts/hooks/useList";

const AppointmentForm = ({
    appointment,
    onSubmit,
}: {
    appointment: Partial<Appointment>;
    onSubmit: (values: Partial<Appointment>) => Promise<void>;
}) => {
    const form = useForm<Omit<Partial<Appointment>, "date"> & { date: Date }>({
        initialValues: {
            ...appointment,
            date: new Date(appointment?.date || Date.now()),
        },
        validate: {
            veterinarian: isNotEmpty("Ce champ est obligatoire"),
            animal: isNotEmpty("Ce champ est obligatoire"),
            date: isNotEmpty("Ce champ est obligatoire"),
        },
    });

    const { data: animals } = useList("animal");
    const { data: veterinarians } = useList("veterinarian");

    return (
        <form onSubmit={form.onSubmit(onSubmit)}>
            <Flex gap="xs" direction={"row"} align={"end"} wrap={"wrap"}>
                <Select
                    miw={200}
                    style={{ flex: 1 }}
                    label="Vétérinaire"
                    placeholder="Choisir un vétérinaire"
                    data={
                        veterinarians?.map((veterinarian) => ({
                            value: veterinarian.id + "",
                            label: veterinarian.name,
                        })) || []
                    }
                    defaultValue={appointment?.veterinarian + ""}
                    {...form.getInputProps("veterinarian")}
                    value={
                        form.values.veterinarian
                            ? form.values.veterinarian + ""
                            : undefined
                    }
                />
                <DateInput
                    {...form.getInputProps("date")}
                    label="Date input"
                    placeholder="Date input"
                />
                <Select
                    miw={200}
                    style={{ flex: 1 }}
                    label="Animal"
                    placeholder="Choisir un animal"
                    data={
                        animals?.map((animal) => ({
                            value: animal.id + "",
                            label: animal.name,
                        })) || []
                    }
                    {...form.getInputProps("animal")}
                    value={
                        form.values.animal ? form.values.animal + "" : undefined
                    }
                />

                <Button type="submit">Envoyer</Button>
            </Flex>
        </form>
    );
};

export default AppointmentForm;
