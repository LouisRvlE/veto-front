import { DefaultMantineColor } from "@mantine/core";
import { Collections } from "./types/Collections";

export const colors: Record<keyof Collections, DefaultMantineColor> = {
    animal: "teal",
    client: "grape",
    appointment: "orange",
    report: "red",
    veterinarian: "blue",
};
