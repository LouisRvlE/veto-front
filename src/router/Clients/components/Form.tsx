import { Button, Flex, TextInput, FocusTrap } from "@mantine/core";
import { isNotEmpty, useForm } from "@mantine/form";
import { Client } from "../../../scripts/types/Client";

const ClientForm = ({
    client,
    onSubmit,
}: {
    client: Partial<Client>;
    onSubmit: (values: Partial<Client>) => Promise<void>;
}) => {
    const form = useForm<Partial<Client>>({
        initialValues: client,
        validate: {
            name: isNotEmpty("Il faut un nom"),
        },
    });

    return (
        <form onSubmit={form.onSubmit(onSubmit)}>
            <Flex gap="xs" direction={"row"} align={"end"} wrap={"wrap"}>
                <FocusTrap>
                    <TextInput
                        style={{ flex: 1 }}
                        label={"Nom"}
                        placeholder={"Nom du propriétaire"}
                        {...form.getInputProps("name")}
                        data-autofocus
                    />
                </FocusTrap>
                <Button type="submit">Envoyer</Button>
            </Flex>
        </form>
    );
};

export default ClientForm;
