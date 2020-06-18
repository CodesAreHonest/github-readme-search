import React, { useEffect, useState } from "react";
import RepositoryCard                 from "./RepositoryCard";
import makeStyles                     from "@material-ui/core/styles/makeStyles";
import { useParams, useHistory }      from "react-router";
import { githubRepoTypes }            from "../../../../states/GithubRepo";
import UseGithubRepos                 from "../../../hooks/UseGithubRepos";
import { githubUserTypes }            from "../../../../states/GithubUser";

const useStyles = makeStyles(() => ({
    '@global': {
        '*::-webkit-scrollbar'      : {
            width: '0.4em'
        },
        '*::-webkit-scrollbar-track': {
            '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
        },
        '*::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(0,0,0,.1)',
            outline        : '1px solid slategrey'
        }
    }
}));

const UserRepoContainer = ({ isUserExist }) => {

    const classes = useStyles();
    const history = useHistory();
    const { username, repositories: repo } = useParams();
    const { detail, getUserRepos } = UseGithubRepos();
    const { responseType, profile, isLoading } = detail;

    const [repositories, setRepositories] = useState([]);


    useEffect(() => {

        if ( isUserExist === githubUserTypes.GET_GITHUB_USER_PROFILE_SUCCESS ) {
            getUserRepos(username);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isUserExist]);

    useEffect(() => {

        if ( responseType === githubRepoTypes.GET_GITHUB_USER_REPOSITORIES_SUCCESS ) {
            setRepositories(profile);
        }

        if ( responseType === null ) {
            getUserRepos(username);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [responseType]);

    return (
        <div>
            {repositories.length > 0 && repositories.map((repository, index) => {
                const { name, description, updated_at, stargazers_count, language } = repository;

                return (
                    <RepositoryCard
                        onClick={() => history.push(`/user/${username}/${name}/readme`)}
                        key={index}
                        name={name}
                        description={description}
                        updatedAt={updated_at}
                        starsCount={stargazers_count}
                        language={language}
                    />
                )
            })}
        </div>
    )
};

export default UserRepoContainer;