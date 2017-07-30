import React, { Component } from 'react';

class EmployeeForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employee: {
        name: ''
      }
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(event) {
    const employee = {...this.state.employee};
    employee.name = event.target.value;
    this.setState({employee});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onEmployeeSave(this.state.employee);
  }

  render() {
    const employee = this.state.employee;

    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={employee.name} onChange={this.handleChangeName} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default EmployeeForm;
