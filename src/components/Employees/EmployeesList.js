import React, { Component } from 'react';
import Employee from './Employee';

class EmployeesList extends Component {
  constructor(props) {
    super(props);
    this.editEmployee = this.editEmployee.bind(this);
  }

  editEmployee(employee) {
    console.log(employee);
  }

  render() {
    const employees = this.props.employees.map((employee) =>
      <Employee employee={employee} onEditEmployee={this.editEmployee}/>
    );

    return (
      <ul className="EmployeesList">
        {employees}
      </ul>
    );
  }
}

export default EmployeesList;
