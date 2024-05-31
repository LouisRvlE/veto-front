import { Collections } from "./types/Collections";

export const apiUrl = "http://localhost:8080/api/";

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
    return response.text();
};

export const createRecord = async <T extends keyof Collections>(
    collection: T,
    data: Partial<Exclude<Collections[T], "id">>
) => {
    const url: URL = new URL(`${apiUrl}${collection}/add`);

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
        // headers: {
        //     "Content-Type": "application/json",
        // },
        // body: JSON.stringify(data),
    });
    return response.text();
};

export const deleteRecord = async <T extends keyof Collections>(
    collection: T,
    id: number | string | undefined
) => {
    const url: URL = new URL(`${apiUrl}${collection}/${id}/delete`);

    const response = await fetch(url, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    });
    return response.text();
};
