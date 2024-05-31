import { Button, Flex, TextInput } from "@mantine/core";
import { isNotEmpty, useForm } from "@mantine/form";
import { Veterinarian } from "../../../scripts/types/Veterinarian";

const VeterinarianForm = ({
    veterinarian,
    onSubmit,
}: {
    veterinarian: Partial<Veterinarian>;
    onSubmit: (values: Partial<Veterinarian>) => Promise<void>;
}) => {
    const form = useForm<Partial<Veterinarian>>({
        initialValues: veterinarian,
        validate: {
            name: isNotEmpty("Il faut un nom"),
        },
    });

    return (
        <form onSubmit={form.onSubmit(onSubmit)}>
            <Flex gap="xs" direction={"row"} align={"end"} wrap={"wrap"}>
                <TextInput
                    style={{ flex: 1 }}
                    label={"Nom"}
                    placeholder={"Nom du propriétaire"}
                    {...form.getInputProps("name")}
                />
                <Button type="submit">Envoyer</Button>
            </Flex>
        </form>
    );
};

export default VeterinarianForm;
