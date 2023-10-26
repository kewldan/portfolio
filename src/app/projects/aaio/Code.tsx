'use client';

import {darcula} from "react-syntax-highlighter/dist/esm/styles/prism";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/prism-async";

export default function Code({children}: { children: string }) {
    return (
        <SyntaxHighlighter language='python' style={darcula} wrapLines={true}
                           lineProps={{style: {wordBreak: 'break-word', whiteSpace: 'pre-wrap'}}}>
            {children}
        </SyntaxHighlighter>
    )
}