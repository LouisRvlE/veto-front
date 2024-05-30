import { useFetch } from "@mantine/hooks";
import { Collections } from "../types/Collections";
import { apiUrl } from "../api";

const useList = <T extends keyof Collections>(collection: T) => {
    type Record = Collections[T];
    return useFetch<Record[]>(apiUrl + collection);
};

export default useList;
