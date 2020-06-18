import { useDispatch, useSelector } from "react-redux";
import { githubRepoAction }         from "../../states/GithubRepo";

const UseGithubUserRepoReadme = () => {
    const dispatch = useDispatch();
    const responseType = useSelector(({ githubRepo }) => githubRepo.readme.type);
    const content = useSelector(({ githubRepo }) => githubRepo.readme.data) ?? "";
    const isLoading = useSelector(({ githubRepo }) => githubRepo.readme.isFetching);

    const getUserRepoReadme = (username, repo) => dispatch(githubRepoAction.getRawREADME(username, repo));
    const detail = {
        responseType, content, isLoading
    };

    return {
        detail, getUserRepoReadme
    }
};

export default UseGithubUserRepoReadme;