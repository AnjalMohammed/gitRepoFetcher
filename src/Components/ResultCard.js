import React from 'react';
import { Card, Col, Row } from 'antd';

import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import ItemCard from './ItemCard';

const ResultCard = (props) => {
    if (props.result.total_count)
        return (
            <Card
                style={{
                    marginTop: "1rem",
                }}
                title="Repo Search Results">
                <Row>
                    {
                        props.result.total_count && props.result.items.map(item =>
                            <Col className="mb1 mx1" lg={{ span: 11 }} md={{ span: 24 }}>
                                <ItemCard
                                    key={item.id}
                                    item={item}
                                />
                            </Col>
                        )
                    }
                </Row>
            </Card >
        )
    else
        return <div />

}


ResultCard.propTypes = {
    result: PropTypes.object,
}

ResultCard.defaultProps = {
    result: {},
}

const mapStateToProps = state => ({
    result: state.reducer.gitResult
})

export default connect(mapStateToProps)(ResultCard);