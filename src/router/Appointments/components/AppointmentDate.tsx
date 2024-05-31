import useRecord from "../../../scripts/hooks/useRecord";

const AppointmentDate = ({ appointmentId }: { appointmentId: number }) => {
    const { data: appointment } = useRecord("appointment", appointmentId);
    return typeof appointment?.date === "string" ? appointment.date : "unset";
};

export default AppointmentDate;
