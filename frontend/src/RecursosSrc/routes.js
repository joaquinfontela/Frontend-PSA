import { CargaExitosaScreen } from "views/CargaExitosa";
import { CargaFallidaScreen } from "views/CargaFallida";
import { CargaScreen } from "views/CargaScreen";
import { Home } from "views/Home";
import { SearchScreen } from "views/SearchScreen";

var routes = [
    {
        path: "/Home",
        name: "Info",
        icon: "nc-icon nc-alert-circle-i",
        component: Home,
        layout: "/admin",
    },
    {
        path: "/CargaScreen",
        name: "Carga de Reportes",
        icon: "nc-icon nc-time-alarm",
        component: CargaScreen,
        layout: "/admin",
    },
    {
        path: "/SearchScreen",
        name: "Busqueda de reportes",
        icon: "nc-icon nc-zoom-split",
        component: SearchScreen,
        layout: "/admin",
    },
    {
        path: "/CargaExitosa",
        component: CargaExitosaScreen,
        layout: "/admin",
    },
];
export default routes;
