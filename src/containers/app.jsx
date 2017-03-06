import React, { Component } from 'react';
import { progressLoad, progressDone } from '../redux/dispatchers';
import { connect } from 'react-redux';
import { Progress } from '../components/progress';

export const VisibleApp = (
@connect(
  //Map redux state to props
  (state) => ({
    ...state,
    hobbies: ['Hobby1','Hobby2','Hobby 3']
  }),
  //Map dispatchers to props
  (dispatch) => ({
    progressLoad : () => {
      dispatch(progressLoad());
    },
    progressDone : () => {
      dispatch(progressDone());
    }
  })
)
class App extends Component {
  
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(e) {
    e.preventDefault();
    this.props.progressLoad();
    setTimeout(() => {
      this.props.progressDone();
      let {firstName, lastName, output} = this.refs;
      output.value = `${firstName.value} ${lastName.value}`;
    }, 1000);
  }
  
  render() {
    return (
      <div className="container-fluid">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input type="text" className="form-control" ref="firstName" placeholder="First Name" />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" className="form-control" ref="lastName" placeholder="Last Name" />
          </div>
          <div className="form-group">
            <label htmlFor="hobbies">Hobbies</label>
            <select ref="hobbies" className="form-control">
              {this.props.hobbies.map((v, i) => (
                <option key={i} value={v}>{v}</option>
              ))}
            </select>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <Progress progress={this.props.progress} />
        <div className="row">
          <div className="col-xs-12">
            <textarea className="form-control" ref="output" rows="3"></textarea>
          </div>
        </div>
      </div>
    );
  }
}
);
