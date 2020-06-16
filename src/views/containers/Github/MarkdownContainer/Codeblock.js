import React                          from "react";
import PropTypes                      from "prop-types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { docco }                      from "react-syntax-highlighter/dist/cjs/styles/hljs";

const CodeBlock = ({ language, value }) => {
    return (
        <SyntaxHighlighter language={language} style={docco}>
            {value}
        </SyntaxHighlighter>
    );
};

CodeBlock.propTypes = {
    value   : PropTypes.string.isRequired,
    language: PropTypes.string
};

CodeBlock.defaultProps = {
    language: ""
};

export default CodeBlock;