import Home                 from "../presentations/Home";
import GithubUserProfile    from "../presentations/GithubUserProfile";
import GithubUserRepository from "../presentations/GithubUserRepository";
import UserSearchResult     from "../presentations/UserSearchResult";
import NotFoundPage         from "../presentations/404";

const PublicRoutes = [
    {
        path     : '/',
        exact    : true,
        label    : 'Home',
        component: Home
    },
    {
        path     : '/user/repository',
        exact    : true,
        label    : 'Github User Profile',
        component: GithubUserProfile
    },
    {
        path     : '/user/profile/:username',
        exact    : true,
        strict   : true,
        label    : "Github User Repository",
        component: GithubUserRepository
    },
    {
        path     : '/user/result',
        exact    : true,
        label    : "Search User Result",
        component: UserSearchResult
    }, {
        path     : "/404",
        exact    : true,
        label    : "404",
        strict   : true,
        component: NotFoundPage
    }
];

export default PublicRoutes;