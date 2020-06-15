import Home              from "../presentations/Home";
import GithubUserProfile from "../presentations/GithubUserProfile";

const PublicRoutes = [
    {
        path     : '/',
        exact    : true,
        label    : 'Home',
        component: Home
    },
    {
        path     : '/user/profile',
        label    : 'Github User Profile',
        component: GithubUserProfile
    }
];

export default PublicRoutes;