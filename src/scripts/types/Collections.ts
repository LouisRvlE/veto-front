import { Animal } from "./Animal";
import { Appointment } from "./Appointment";
import { Client } from "./Client";
import { Report } from "./Report";
import { Veterinarian } from "./Veterinarian";

export interface Collections {
    animal: Animal;
    client: Client;
    appointment: Appointment;
    veterinarian: Veterinarian;
    report: Report;
}
