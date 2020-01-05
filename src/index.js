import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {

    state = {

    };

    render() {

        return (
            <h1>
                Welcome to {process.env.APP_NAME}!
            </h1>
        )

    }

}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);