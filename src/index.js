import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {

    state = {

    };

    render() {

        return (
            <h1>
                Welcome to Form!
            </h1>
        )

    }

}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);