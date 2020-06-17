import { useDispatch, useSelector } from "react-redux";
import { githubUserAction }         from "../../states/GithubUser";


const UseGithubUserProfile = () => {
    const dispatch = useDispatch();
    const responseType = useSelector(({ githubUser }) => githubUser.profile.type);
    const profile = useSelector(({ githubUser }) => githubUser.profile.data) ?? [];
    const isLoading = useSelector(({ githubUser }) => githubUser.profile.isFetching);

    const getGithubUserProfile = id => dispatch(githubUserAction.getUserProfile(id));
    const resetStatus = () => dispatch(githubUserAction.resetGetUserProfileStatus());

    const detail = {
        responseType, profile, isLoading
    };

    return { detail, getGithubUserProfile, resetStatus }


};

export default UseGithubUserProfile;