import React        from "react";
import BranchSelect from "./BranchSelect";
import Box          from "@material-ui/core/Box";
import makeStyles   from "@material-ui/core/styles/makeStyles";

// render mark down with html
import ReactMarkDown from "react-markdown";
import Paper         from "@material-ui/core/Paper";
import Toc           from "remark-toc"
import CodeBlock     from "./Codeblock";

const initialSource = `
# Live demo

Changes are automatically rendered as you type.

## Table of Contents

* Implements [GitHub Flavored Markdown](https://github.github.com/gfm/)
* Renders actual, "native" React DOM elements
* Allows you to escape or skip HTML (try toggling the checkboxes above)
* If you escape or skip the HTML, no \`dangerouslySetInnerHTML\` is used! Yay!

## HTML block below

<blockquote>
  This blockquote will change based on the HTML settings above.
</blockquote>

## How about some code?
\`\`\`js
var React = require('react');
var Markdown = require('react-markdown');

React.render(
  <Markdown source="# Your markdown here" />,
  document.getElementById('content')
);
\`\`\`

Pretty neat, eh?

## Tables?

| Feature   | Support |
| --------- | ------- |
| tables    | ✔ |
| alignment | ✔ |
| wewt      | ✔ |

## More info?

Read usage information and more on [GitHub](//github.com/rexxars/react-markdown)

---------------

A component by [Espen Hovlandsdal](https://espen.codes/)
`;

const useStyles = makeStyles(theme => ({
    root         : {
        padding: `0 16px`,
    },
    markdownPaper: {
        padding: `8px 0`,
    },
    paper        : {
        borderRadius   : theme.spacing(1),
        padding        : "16px",
        height         : '80vh',
        overflowY      : "auto",
        color          : "black",
        backgroundColor: "#ffffffbd"
    }
}));

const MarkdownContainer = () => {
    const classes = useStyles();

    /**
     * Plugins
     * 1. Table of content - toc
     */
    const plugins = [Toc];

    return (
        <Box className={classes.root}>
            <Box><BranchSelect/></Box>
            <Box className={classes.markdownPaper}>
                <Paper>
                    <ReactMarkDown
                        className={classes.paper}
                        source={initialSource}
                        escapeHtml={false} // render HTML
                        includeNodeIndex={true}
                        renderers={{ code: CodeBlock }}
                        plugins={plugins}
                    />
                </Paper>
            </Box>
        </Box>
    );
};

export default MarkdownContainer;