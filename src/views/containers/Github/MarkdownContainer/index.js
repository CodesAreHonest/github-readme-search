import React, { useState, useEffect } from "react";
import Box                            from "@material-ui/core/Box";
import makeStyles                     from "@material-ui/core/styles/makeStyles";
import { useParams }                  from "react-router";
import Divider                        from "@material-ui/core/Divider";


// render mark down with html
import ReactMarkDown                 from "react-markdown";
import CodeBlock                     from "./Codeblock";
import toc                           from "remark-toc";
import H5                            from "../../../components/H5";
import UseGithubUserRepoReadme       from "../../../hooks/UseGithubUserRepoReadme";
import { githubRepoTypes }           from "../../../../states/GithubRepo";
import Loading                       from "../../../components/Loading";
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import BodyFont                      from "../../../components/BodyFont";

const useStyles = makeStyles(theme => ({
    root            : {
        padding: `0 16px`,
    },
    markdownPaper   : {
        padding: `8px 0`,
    },
    paper           : {
        borderRadius   : theme.spacing(1),
        padding        : "16px",
        maxHeight      : '80vh',
        overflowY      : "auto",
        color          : "black",
        backgroundColor: "#ffffffbd"
    },
    divider         : {
        margin: "8px 0"
    },
    dissatisfiedIcon: {
        fontSize    : "8rem",
        color       : theme.palette.secondary.light,
        marginBottom: theme.spacing(1.5)
    },
    repoName        : {
        color: theme.palette.secondary.light,
    }
}));

const MarkdownContainer = () => {
    const classes = useStyles();
    const [markDown, setMarkDown] = useState("");
    const { username, repository } = useParams();
    const { detail, getUserRepoReadme } = UseGithubUserRepoReadme();
    const { responseType, content, isLoading } = detail;

    useEffect(() => {
        getUserRepoReadme(username, repository);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [repository]);

    useEffect(() => {
        if ( responseType === githubRepoTypes.GET_USER_REPOSITORY_README_RAW_SUCCESS ) {
            setMarkDown(content);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [responseType]);

    const NotFoundPage = (
        <Box style={{ marginTop: "4rem", textAlign: "center", background: "transparent" }}>
            <SentimentVeryDissatisfiedIcon className={classes.dissatisfiedIcon}/>

            <BodyFont>
                This repository does not have README.
            </BodyFont>
        </Box>
    );

    const markdownContainer = (
        <Box>
            {markDown.length > 0 ? <ReactMarkDown
                className={classes.paper}
                source={markDown}
                escapeHtml={false} // render HTML
                includeNodeIndex={true}
                renderers={{ code: CodeBlock }}
                plugins={[toc]}
            /> : NotFoundPage}
        </Box>
    );

    const loadingContainer = (
        <Box style={{ textAlign: "center", marginTop: "32px" }}>
            <Loading size={60} thickness={4} style={{ margin: "0 auto" }}/>
            <H5>Loading ...</H5>
        </Box>
    );

    return (
        <Box className={classes.root}>
            <Box className={classes.markdownPaper}>
                <Box style={{ textAlign: "center" }}>
                    <H5><Box component="span" className={classes.repoName}>{repository}</Box> repository's
                                                                                              README</H5>
                </Box>
                <Divider className={classes.divider}/>
                {isLoading ?
                    loadingContainer :
                    markdownContainer
                }
            </Box>
        </Box>
    );
};

export default MarkdownContainer;