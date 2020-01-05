import React from 'react';
import ReactDOM from 'react-dom';
import { Hero } from './components'

import './style/main.less';


class App extends React.Component {

    state = {};

    render() {
        return (
            <>
                <Hero />
            </>
        )
    }

}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);