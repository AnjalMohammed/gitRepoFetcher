import React, { Component } from 'react';
import { Card, Form, Input, Button } from 'antd';

import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import getGitData from '../actions/action';

class SearchCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputText: '',
        }
    }

    handleTextChange = e => {
        this.setState({
            inputText: e.target.value,
        })
    }


    handleSubmit = (e) => {
        e.preventDefault()
        fetch(`https://api.github.com/search/repositories?q=${this.state.inputText}`)
            .then(function (response) {
                return response.json();
            })
            .then((myJson) => {
                this.props.setApiData(myJson);
            });
    }

    render() {
        return (
            <Card
                title="Git Repo Search Filter"
            >
                <Form
                    layout="inline"
                    onSubmit={this.handleSubmit}>
                    <Form.Item>
                        <Input type="text" onChange={(e) => this.handleTextChange(e)} placeholeder="Enter search text" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primay" htmlType="submit">Search</Button>
                    </Form.Item>
                </Form>
            </Card>
        )
    }
};

SearchCard.propTypes = {
    setApiData: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
    setApiData: data => dispatch(getGitData(data)),
})

export default connect(null, mapDispatchToProps)(SearchCard);