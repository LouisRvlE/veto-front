import { Collections } from "./types/Collections";

export const apiUrl = "http://192.168.1.79:8080/api/";

export const updateRecord = async <T extends keyof Collections>(
    collection: T,
    id: number,
    data: Partial<Collections[T]>
) => {
    const url: URL = new URL(`${apiUrl}${collection}/${id}/update`);

    url.searchParams.append("id", id.toString());
    for (const key in data) {
        const element = data[key];
        if (element)
            url.searchParams.append(
                key,
                typeof element !== "string" ? element.toString() : element
            );
    }

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    return response.json();
};

export const createRecord = async <T extends keyof Collections>(
    collection: T,
    data: Exclude<Collections[T], "id">
) => {
    const url: URL = new URL(`${apiUrl}${collection}/create`);

    for (const key in data) {
        const element = data[key];
        if (element)
            url.searchParams.append(
                key,
                typeof element !== "string" ? element.toString() : element
            );
    }

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    return response.json();
};

export const deleteRecord = async <T extends keyof Collections>(
    collection: T,
    id: number
) => {
    const url: URL = new URL(`${apiUrl}${collection}/${id}/delete`);

    const response = await fetch(url, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    });
    return response.json();
};
