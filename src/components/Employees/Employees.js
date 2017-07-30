import React, { Component } from 'react';
import EmployeeForm from './EmployeeForm';
import EmployeesList from './EmployeesList';


class Employees extends Component {
  constructor(props) {
    super(props);
    this.showForm = this.showForm.bind(this);
    this.handleEmployeeSave = this.handleEmployeeSave.bind(this);

    this.state = {
      employees: [
        {name: 'John'}
      ],
      isFormVisible: false
    };
  }

  showForm() {
    this.setState({
      isFormVisible: true
    });
  }

  handleEmployeeSave(employee) {
    console.log(employee);
    this.setState({
      employees: this.state.employees.concat([employee])
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.showForm}>Tilføj ansat</button>

        {this.state.isFormVisible &&
          <EmployeeForm onEmployeeSave={this.handleEmployeeSave} />
        }
        <EmployeesList employees={this.state.employees} />
      </div>
    );
  }
}

export default Employees;
