import useRecord from "../../../scripts/hooks/useRecord";

const ClientName = ({ id }: { id: number }) => {
    const { data } = useRecord("client", id);
    return data?.name;
};

export default ClientName;
