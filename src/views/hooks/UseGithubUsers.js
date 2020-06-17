import { useDispatch, useSelector } from "react-redux";
import { githubUserAction }         from "../../states/GithubUser";
import { useState, useEffect }      from "react";


const useGithubUsers = () => {

    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(10);
    const [totalPage, setTotalPage] = useState(1);
    const githubUserCount = useSelector(({ githubUser }) => githubUser.users.data.total_count) ?? 0;
    const users = useSelector(({ githubUser }) => githubUser.users.data.items) ?? [];
    const responseType = useSelector(({ githubUser }) => githubUser.users.type);
    const lastSearchQuery = useSelector(({ githubUser }) => githubUser.query);
    const isLoading = useSelector(({ githubUser }) => githubUser.users.isFetching);

    const getGithubUserWithQuery = (query, page = 1, perPage = 10) => {
        if ( query !== lastSearchQuery ) {
            page = 1;
            perPage = 10;
        }

        setPage(page);
        setPerPage(page);
        dispatch(githubUserAction.getGithubUsers(query, page, perPage));
    };

    const resetStatus = () => dispatch(githubUserAction.resetGetGithubUserStatus());
    const registerUserQuery = query => dispatch(githubUserAction.registerUserQuery(query));

    useEffect(() => {
        if ( githubUserCount <= perPage )
            return;

        const totalPage = Math.ceil(githubUserCount / perPage);
        setTotalPage(totalPage);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [githubUserCount]);

    const detail = {
        count: githubUserCount,
        data : users,
        responseType,
        lastSearchQuery,
        page,
        perPage,
        isLoading,
        totalPage
    };

    return {
        detail,
        getGithubUserWithQuery,
        resetStatus,
        registerUserQuery
    }

};

export default useGithubUsers;