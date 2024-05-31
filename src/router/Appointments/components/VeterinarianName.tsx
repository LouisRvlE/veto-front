import useRecord from "../../../scripts/hooks/useRecord";

export const VeterinarianName = ({
    veterinarianId,
}: {
    veterinarianId: number;
}) => {
    const { data: veterinarian } = useRecord("veterinarian", veterinarianId);
    return veterinarian?.name;
};
