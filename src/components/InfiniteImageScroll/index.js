import Proptypes from 'prop-types';
import React from 'react';
import {Box, Image, InfiniteScroll} from "grommet";

import './style.less'

const InfiniteImageScroll = (props) => {
    const {
        items,
    } = props;

    return (
        <InfiniteScroll
            items={items}
        >
            {(item, index) => (
                <Box
                    key={index}
                >
                    <Image
                        fit="cover"
                        src={`${item}`}
                    />
                </Box>
            )}
        </InfiniteScroll>
    )
}

InfiniteImageScroll.propTypes = {
    items: Proptypes.array,
};

export default InfiniteImageScroll;
