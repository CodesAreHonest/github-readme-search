import Home    from "../presentations/Home";
import PageOne from "../presentations/PageOne";

const PublicRoutes = [
    {
        path     : '/',
        exact    : true,
        strict   : true,
        label    : 'Home',
        component: Home
    },
    {
        path     : '/pageOne',
        label    : 'Home',
        component: PageOne
    }
];

export default PublicRoutes;