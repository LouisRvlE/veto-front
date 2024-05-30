import { useFetch } from "@mantine/hooks";
import { Collections } from "../types/Collections";
import { apiUrl } from "../api";

const useRecord = <T extends keyof Collections>(collection: T, id: number) => {
    type Record = Collections[T];
    return useFetch<Record>(`${apiUrl}${collection}/${id}`);
};

export default useRecord;
