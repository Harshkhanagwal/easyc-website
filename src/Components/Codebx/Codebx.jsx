import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';


const Codebx = (props) => {
    return (
        <>

            <div className="code-area">
                {
                    <SyntaxHighlighter language="c" customStyle={{
                        padding: 20,
                        borderRadius: 8,
                        maxWidth: "600px",
                        width: "100%"
                    }} style={atomOneDark}>
                        {props.code}
                    </SyntaxHighlighter>

                }
            </div>

        </>
    )
}

export default Codebx