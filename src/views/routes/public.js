import Home                 from "../presentations/Home";
import GithubUserProfile    from "../presentations/GithubUserProfile";
import GithubUserRepository from "../presentations/GithubUserRepository";
import UserSearchResult     from "../presentations/UserSearchResult";

const PublicRoutes = [
    {
        path     : '/',
        exact    : true,
        label    : 'Home',
        component: Home
    },
    {
        path     : '/user/profile',
        exact    : true,
        label    : 'Github User Profile',
        component: GithubUserProfile
    },
    {
        path     : '/user/repository',
        exact    : true,
        label    : "Github User Repository",
        component: GithubUserRepository
    },
    {
        path     : '/user/result',
        exact    : true,
        label    : "Search User Result",
        component: UserSearchResult
    }
];

export default PublicRoutes;