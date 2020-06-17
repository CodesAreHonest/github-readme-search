import { useDispatch, useSelector } from "react-redux";
import { githubUserAction }         from "../../states/GithubUser";


const useGithubUsers = () => {

    const dispatch = useDispatch();
    const githubUserCount = useSelector(({ githubUser }) => githubUser.users.data.total_count) ?? 0;
    const users = useSelector(({ githubUser }) => githubUser.users.data.items) ?? [];
    const responseType = useSelector(({ githubUser }) => githubUser.users.type);
    const lastSearchQuery = useSelector(({ githubUser }) => githubUser.query);
    const isLoading = useSelector(({ githubUser }) => githubUser.users.isFetching);

    const getGithubUserWithQuery = (query, page = 1, perPage = 30) => {
        dispatch(githubUserAction.getGithubUsers(query, page, perPage));
    };

    const resetStatus = () => dispatch(githubUserAction.resetGetGithubUserStatus());
    const registerUserQuery = query => dispatch(githubUserAction.registerUserQuery(query));

    const detail = {
        count: githubUserCount,
        data : users,
        responseType,
        lastSearchQuery,
        isLoading,
    };

    return {
        detail,
        getGithubUserWithQuery,
        resetStatus,
        registerUserQuery
    }

};

export default useGithubUsers;