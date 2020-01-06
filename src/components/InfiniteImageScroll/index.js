import Proptypes from 'prop-types';
import React from 'react';
import { Box, InfiniteScroll } from "grommet";

const InfiniteImageScroll = (props) => {
    const {
        items,
        steps,
        onMore,
    } = props;

    return (
        <Box>
            <InfiniteScroll
                items={items}
                step={steps}
                onMore={onMore}>
                {(item, index) => (
                    <Box
                        key={index}
                        pad='medium'
                        background='neutral-1'
                        align='center'
                    >
                        <img src={`${process.env.CDN_DOMAIN}wedding/s_${item}`} />
                    </Box>
                )}
            </InfiniteScroll>
        </Box>
    )
}

InfiniteImageScroll.propTypes = {
    items: Proptypes.array,
    steps: Proptypes.number,
    onMore: Proptypes.func,
};

export default InfiniteImageScroll;
