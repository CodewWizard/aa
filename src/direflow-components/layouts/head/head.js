import React from 'react';
import { MetaTags } from 'react-meta-tags';

const PageHead = (props) => {
    
    return (
        <>
            <MetaTags>
                <title>{props.title}</title>
                <meta name="description" content={props.description} />
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
                <meta http-equiv='cache-control' content='no-cache' />
                <meta http-equiv='expires' content='0' />
                <meta http-equiv='pragma' content='no-cache' />
                <link rel="icon" href={props.favicon} />
                {/* <img className="m-auto" src="images/favicon.ico" alt="" /> */}
            </MetaTags>
        </>
    );
}

export default PageHead;