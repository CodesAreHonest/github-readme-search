import Home                   from "../presentations/Home";
import RepositoryReadmeViewer from "../presentations/RepositoryReadmeViewer";
import GithubUserProfile      from "../presentations/GithubUserProfile";
import UserSearchResult       from "../presentations/UserSearchResult";
import NotFoundPage           from "../presentations/404";

const PublicRoutes = [
    {
        path     : '/',
        exact    : true,
        label    : 'Home',
        component: Home
    },
    {
        path     : '/user/:username/:repository/readme',
        exact    : true,
        label    : 'Repository README viewer',
        component: RepositoryReadmeViewer
    },
    {
        path     : '/user/profile/:username',
        exact    : true,
        strict   : true,
        label    : "Github User Profile",
        component: GithubUserProfile
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