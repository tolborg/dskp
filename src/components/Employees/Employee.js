import React, { Component } from 'react';

class Employee extends Component {
  constructor(props) {
    super(props);
    this.editEmployee = this.editEmployee.bind(this);
  }

  editEmployee(event) {
    event.preventDefault();
    this.props.onEditEmployee(this.props.employee);
  }

  render() {
    return (
      <div className="employee">
        <div className="employee__name">{this.props.employee.name}</div>
        <div className="employee__edit"><a href="#" onClick={this.editEmployee}>Rediger</a></div>
      </div>
    );
  }
}

export default Employee;
