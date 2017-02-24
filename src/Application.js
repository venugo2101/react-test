import {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchTube} from './actions/index';
import List from './List';


class Application extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {
    this.search();
  }
  search() {
    this.props.fetchTube();
  }
  render() {
    return (
      <List props={this.props} />
    )
  }
}
