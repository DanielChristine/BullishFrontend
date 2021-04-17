import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCategories } from 'actions/forum'
class Categories extends Component {
    componentDidMount() {
        this.props.fetchCategories()
    }
    render() {
        console.log(this.props.categories)
        return;
    }
}
function mapStateToProps({ forum }) {
    return {
        categories: forum.categories
    };
}
export default connect(mapStateToProps, { fetchCategories })(Categories);
