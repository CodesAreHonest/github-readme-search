import Home                 from "../presentations/Home";
import GithubUserProfile    from "../presentations/GithubUserProfile";
import GithubUserRepository from "../presentations/GithubUserRepository";

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
    },
    {
        path     : '/user/repository',
        label    : "Github User Repository",
        component: GithubUserRepository
    }
];

export default PublicRoutes;