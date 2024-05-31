import { Button, Flex, TextInput, NumberInput, Select } from "@mantine/core";
import { isNotEmpty, useForm } from "@mantine/form";
import { Animal } from "../../../scripts/types/Animal";
import useList from "../../../scripts/hooks/useList";

const AnimalForm = ({
    animal,
    onSubmit,
}: {
    animal: Partial<Animal>;
    onSubmit: (values: Partial<Animal>) => Promise<void>;
}) => {
    const form = useForm<Partial<Animal>>({
        initialValues: animal,
        validate: {
            name: isNotEmpty("Il faut un nom"),
            age: isNotEmpty("Il faut un âge"),
            sexe: isNotEmpty("Il faut un sexe"),
            type: isNotEmpty("Il faut un type"),
            note: isNotEmpty("Il faut une description"),
            client: isNotEmpty("Il faut un client"),
        },
    });

    const { data: clients } = useList("client");

    return (
        <form onSubmit={form.onSubmit(onSubmit)}>
            <Flex
                gap="xs"
                justify={"end"}
                direction={"row"}
                align={"end"}
                wrap={"wrap"}
            >
                <TextInput
                    style={{ flex: 1 }}
                    miw={200}
                    label={"Nom"}
                    placeholder={"Nom du propriétaire"}
                    {...form.getInputProps("name")}
                />
                <NumberInput
                    miw={200}
                    style={{ flex: 1 }}
                    min={1}
                    label={"Âge"}
                    placeholder={"7 ans"}
                    suffix={"ans"}
                    {...form.getInputProps("age")}
                />
                <TextInput
                    miw={200}
                    style={{ flex: 1 }}
                    label={"Sexe"}
                    placeholder={"Sexe"}
                    {...form.getInputProps("sexe")}
                />
                <Select
                    miw={200}
                    style={{ flex: 1 }}
                    label="Client"
                    placeholder="Choisir un client"
                    data={
                        clients?.map((client) => ({
                            value: client.id + "",
                            label: client.name,
                        })) || []
                    }
                    {...form.getInputProps("client")}
                    value={
                        form.values.client ? form.values.client + "" : undefined
                    }
                />
                <TextInput
                    miw={200}
                    style={{ flex: 1 }}
                    label={"Race"}
                    placeholder={"Race"}
                    {...form.getInputProps("type")}
                />
                <TextInput
                    miw={200}
                    style={{ flex: 1 }}
                    label={"Description"}
                    placeholder={"Description"}
                    {...form.getInputProps("note")}
                />

                <Button type="submit">Envoyer</Button>
            </Flex>
        </form>
    );
};

export default AnimalForm;
