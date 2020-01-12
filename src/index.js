import React from 'react';
import ReactDOM from 'react-dom';
import {Hero, InfiniteImageScroll} from './components'
import debounce from "lodash.debounce";

import './style/main.less';
import {Box} from "grommet";


class App extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            limit: 30,
            next: null
        };

        window.onscroll = debounce( () => {
            const {
                error,
                isLoaded,
                next,
            } = this.state;

            if (error || !isLoaded || !next) return;

            if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight - 900) {
                this.getMore()
            }
        }, 100);
    }

    async componentDidMount() {

        try {
            const res = await fetch(`/api/v1/images?limit=30`);
            const result = await res.json();
            const cdn_domain = process.env.CDN_DOMAIN;
            const data = result.data;
            if (Array.isArray(data)) {
                const imageSets = result.data.map((result) => {
                    return `${cdn_domain}${result.directory}/l_${result.file_name}`
                });
                const next = result.links.next
                this.setState({
                    isLoaded: true,
                    items: [...imageSets],
                    next: next,
                });
            } else {
                throw ('Image data is not an array.')
            }

        } catch (e) {
            this.setState({
                isLoaded: true,
                error:e
            });
        }

    }

    async getMore() {
        if (this.state.next) {
            console.log('hit!')
            let items = [...this.state.items];
            const res = await fetch(`${this.state.next}`);
            const result = await res.json();
            const cdn_domain = process.env.CDN_DOMAIN;
            const data = result.data;
            const next = result.links.next;
            if (Array.isArray(data)) {
                const imageSets = result.data.map((result) => {
                    return `${cdn_domain}${result.directory}/l_${result.file_name}`
                });
                items = items.concat(imageSets)
                this.setState({
                    items: [...items]
                });
            }
            this.setState({
                next: next
            })
        }

    }

    render() {
        const {
            error,
            isLoaded,
            items,
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
                    <Hero/>
                    <Box className={'gallery'}>
                        <InfiniteImageScroll
                            items={items}
                        >
                        </InfiniteImageScroll>
                    </Box>
                </>
            )
        }

    }

}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);