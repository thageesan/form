import React from 'react';
import ReactDOM from 'react-dom';
import { Hero, InfiniteImageScroll } from './components'

import './style/main.less';


class App extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: null,
            steps: 10,
            onMore: () => {
                console.log('!!! onMore')
            }
        };
    }

    async componentDidMount() {

        try {
            const res = await fetch('/api/v1/images?limit=10');
            const result = await res.json();
            this.setState({
                isLoaded: true,
                items: result.images
            });
        } catch (e) {
            this.setState({
                isLoaded: true,
                error:e
            });
        }

    }

    render() {
        const {
            error,
            isLoaded,
            items,
            steps,
            onMore
        } = this.state;

        if (error) {
            return (
                <div>
                    Error: {error}
                </div>
            )
        } else if (!isLoaded) {
            return (
                <div>
                    Loading...
                </div>
            )
        } else {
            return (
                <>
                    <Hero />
                    <InfiniteImageScroll
                        items={items}
                        step={steps}
                        onMore={onMore()}
                    ></InfiniteImageScroll>
                </>
            )
        }

    }

}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);