import useRecord from "../../../scripts/hooks/useRecord";

export const AnimalName = ({ animalId }: { animalId: number }) => {
    const { data: animal } = useRecord("animal", animalId);
    return animal?.name;
};
export default AnimalName;
