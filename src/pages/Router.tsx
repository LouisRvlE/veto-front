import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Shell from "../components/layout/Shell";
import Clients from "./Clients/Clients";

const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Shell />,
            children: [
                {
                    path: "/",
                    element: <h1>Home</h1>,
                },
                {
                    path: "/animals",
                    element: <Outlet />,
                    children: [
                        { path: "/animals/", element: <h1>Animals</h1> },
                        {
                            path: "/animals/create",
                            element: <h1>New Animal</h1>,
                        },
                        {
                            path: "/animals/update",
                            element: <h1>Update Animal</h1>,
                        },
                        { path: "/animals/:id", element: <h1>Animal</h1> },
                    ],
                },
                {
                    path: "/clients",
                    element: <Outlet />,
                    children: [
                        { path: "/clients/", element: <Clients /> },
                        {
                            path: "/clients/create",
                            element: <h1>New Client</h1>,
                        },
                        {
                            path: "/clients/update",
                            element: <h1>Update Client</h1>,
                        },
                        { path: "/clients/:id", element: <h1>Client</h1> },
                    ],
                },
                {
                    path: "/appointments",
                    element: <Outlet />,
                    children: [
                        {
                            path: "/appointments/",
                            element: <h1>Appointments</h1>,
                        },
                        {
                            path: "/appointments/create",
                            element: <h1>New Appointment</h1>,
                        },
                        {
                            path: "/appointments/update",
                            element: <h1>Update Appointment</h1>,
                        },
                        {
                            path: "/appointments/:id",
                            element: <h1>Appointment</h1>,
                        },
                    ],
                },
                {
                    path: "/veterinarians",
                    element: <Outlet />,
                    children: [
                        {
                            path: "/veterinarians/",
                            element: <h1>Veterinarians</h1>,
                        },
                        {
                            path: "/veterinarians/create",
                            element: <h1>New Veterinarian</h1>,
                        },
                        {
                            path: "/veterinarians/update",
                            element: <h1>Update Veterinarian</h1>,
                        },
                        {
                            path: "/veterinarians/:id",
                            element: <h1>Veterinarian</h1>,
                        },
                    ],
                },
                {
                    path: "/reports",
                    element: <Outlet />,
                    children: [
                        {
                            path: "/reports/",
                            element: <h1>Reports</h1>,
                        },
                        {
                            path: "/reports/create",
                            element: <h1>New Report</h1>,
                        },
                        {
                            path: "/reports/update",
                            element: <h1>Update Report</h1>,
                        },
                        {
                            path: "/reports/:id",
                            element: <h1>Report</h1>,
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
