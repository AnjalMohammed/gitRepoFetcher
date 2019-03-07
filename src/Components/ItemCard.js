import React from 'react';

import PropTypes from 'prop-types';
import { Icon, Tag } from 'antd';
import { Img, StyledCard, FooterButton, ScrollWrapper, Styledtag, ResponsiveDiv } from '../styledCSS/styles';

const ItemCard = props => (
    <StyledCard
        bordered={false}>
        <div>
            <Img src='https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' />
        </div>
        <h3 className="center my1">{props.item.name}</h3>
        <ResponsiveDiv>
            <Tag><Icon type="github" /> {props.item.watchers_count}</Tag>
            <Tag><Icon type="fork" />Fork ({props.item.forks_count})</Tag>
            <Tag><Icon type="info-circle" />Open Issues ({props.item.open_issues})</Tag>
        </ResponsiveDiv>
        <ScrollWrapper>
            <p className="m0">{props.item.description}</p>
        </ScrollWrapper>
        <FooterButton>View Profile</FooterButton>
    </StyledCard>
);

ItemCard.propTypes = {
    item: PropTypes.object.isRequired,
}

export default ItemCard;