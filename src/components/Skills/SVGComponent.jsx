import React from 'react';

import './svg-component-styles.scss';

import {ReactComponent as DotNet} from './svgs/dotnet.svg';
import {ReactComponent as CSharp} from './svgs/csharp.svg';
import {ReactComponent as CSS3} from './svgs/css3.svg';
import {ReactComponent as Express} from './svgs/express.svg';
import {ReactComponent as Git} from './svgs/git.svg';
import {ReactComponent as Heroku} from './svgs/heroku.svg';
import {ReactComponent as HTML} from './svgs/html.svg';
import {ReactComponent as JavaScript} from './svgs/javascript.svg';
import {ReactComponent as Mongo} from './svgs/mongo.svg';
import {ReactComponent as Node} from './svgs/node.svg';
import {ReactComponent as NPM} from './svgs/npm.svg';
import {ReactComponent as Python} from './svgs/python.svg';
import {ReactComponent as ReactSVG} from './svgs/react.svg';
import {ReactComponent as Sass} from './svgs/sass.svg';

const SVGComponent = props => {

    //14 components - 12 + 2 --> 4 rows of 3 one row of 2 const height = "100px";

    switch (props.name) {
        case "dotnet":
            return <DotNet height={props.height} width="auto"/>
        case "csharp":
            return <CSharp height={props.height} width="auto"/>
        case "css":
            return <CSS3 height={props.height} width="auto" />
        case "express":
            return <Express height={props.height} width="auto" />
        case "git":
            return <Git height={props.height} width="auto" />
        case "heroku":
            return <Heroku height={props.height} width="auto" />
        case "html":
            return <HTML height={props.height} width="auto" />
        case "javascript":
            return <JavaScript height={props.height} width="auto" />
        case "mongo":
            return <Mongo height={props.height} width="auto" />
        case "node":
            return <Node height={props.height} width="auto" />
        case "npm":
            return <NPM height={props.height} width="auto" />
        case "python":
            return <Python height={props.height} width="auto" />
        case "react":
            return <ReactSVG height={props.height} width="auto" />
        case "sass":
            return <Sass height={props.height} width="auto" />
        default:
            break;
    }
}

export default SVGComponent;
