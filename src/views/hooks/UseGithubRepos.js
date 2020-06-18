import { useDispatch, useSelector } from "react-redux";
import { githubRepoAction }         from "../../states/GithubRepo";

const UseGithubRepos = () => {

    const dispatch = useDispatch();
    const responseType = useSelector(({ githubRepo }) => githubRepo.repositories.type);
    const profile = useSelector(({ githubRepo }) => githubRepo.repositories.data) ?? [];
    const isLoading = useSelector(({ githubRepo }) => githubRepo.repositories.isFetching);

    const getUserRepos = query => dispatch(githubRepoAction.getUserRepositories(query));

    const detail = {
        responseType, profile, isLoading
    };

    return { detail, getUserRepos };

};

export default UseGithubRepos;