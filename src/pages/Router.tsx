import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Shell from "../components/layout/Shell";
import Clients from "../router/Clients/pages/Clients";
import CreateClient from "../router/Clients/pages/Create";
import { UpdateClient } from "../router/Clients/pages/Update";
import { Client } from "../router/Clients/pages/Client";
import Animals from "../router/Animals/pages/Animals";
import CreateAnimal from "../router/Animals/pages/Create";
import { UpdateAnimal } from "../router/Animals/pages/Update";
import { Animal } from "../router/Animals/pages/Animal";
import Appointments from "../router/Appointments/pages/Appointments";
import CreateAppointment from "../router/Appointments/pages/Create";
import { UpdateAppointment } from "../router/Appointments/pages/Update";
import { Appointment } from "../router/Appointments/pages/Appointment";
import Veterinarians from "../router/Veterinarians/pages/Veterinarians";
import CreateVeterinarian from "../router/Veterinarians/pages/Create";
import { UpdateVeterinarian } from "../router/Veterinarians/pages/Update";
import { Veterinarian } from "../router/Veterinarians/pages/Veterinarian";
import Reports from "../router/Reports/pages/Reports";
import CreateReport from "../router/Reports/pages/Create";
import { UpdateReport } from "../router/Reports/pages/Update";
import { Report } from "../router/Reports/pages/Report";

const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Shell />,
            children: [
                {
                    path: "/",
                    element: <h1>Home page</h1>,
                },
                {
                    path: "/animals",
                    element: <Outlet />,
                    children: [
                        { path: "/animals/", element: <Animals /> },
                        {
                            path: "/animals/create",
                            element: <CreateAnimal />,
                        },
                        {
                            path: "/animals/:id/update",
                            element: <UpdateAnimal />,
                        },
                        { path: "/animals/:id", element: <Animal /> },
                    ],
                },
                {
                    path: "/clients",
                    element: <Outlet />,
                    children: [
                        { path: "/clients/", element: <Clients /> },
                        {
                            path: "/clients/create",
                            element: <CreateClient />,
                        },
                        {
                            path: "/clients/:id/update",
                            element: <UpdateClient />,
                        },
                        { path: "/clients/:id", element: <Client /> },
                    ],
                },
                {
                    path: "/appointments",
                    element: <Outlet />,
                    children: [
                        {
                            path: "/appointments/",
                            element: <Appointments />,
                        },
                        {
                            path: "/appointments/create",
                            element: <CreateAppointment />,
                        },
                        {
                            path: "/appointments/:id/update",
                            element: <UpdateAppointment />,
                        },
                        {
                            path: "/appointments/:id",
                            element: <Appointment />,
                        },
                    ],
                },
                {
                    path: "/veterinarians",
                    element: <Outlet />,
                    children: [
                        {
                            path: "/veterinarians/",
                            element: <Veterinarians />,
                        },
                        {
                            path: "/veterinarians/create",
                            element: <CreateVeterinarian />,
                        },
                        {
                            path: "/veterinarians/:id/update",
                            element: <UpdateVeterinarian />,
                        },
                        {
                            path: "/veterinarians/:id",
                            element: <Veterinarian />,
                        },
                    ],
                },
                {
                    path: "/reports",
                    element: <Outlet />,
                    children: [
                        {
                            path: "/reports/",
                            element: <Reports />,
                        },
                        {
                            path: "/reports/create",
                            element: <CreateReport />,
                        },
                        {
                            path: "/reports/:id/update",
                            element: <UpdateReport />,
                        },
                        {
                            path: "/reports/:id",
                            element: <Report />,
                        },
                    ],
                },
                {
                    path: "*",
                    element: <h1>404</h1>,
                },
            ],
        },
    ]);
    return <RouterProvider router={router} />;
};

export default Router;
