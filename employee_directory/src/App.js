import React, { Component } from "react";
import EmployeeTable from "./components/EmployeeTable";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import employees from "./employees.json";
import NavBar from "./components/NavBar";

class App extends Component {
  state = {
    employees,
    currentFilter: null
  };

  updateFilter = department => {
    this.setState({ currentFilter: department });
  };

  filterEmployees = () => {
    if (this.state.currentFilter === "sortButton") {
      return this.state.employees.sort((a, b) => {
        var nameA = a.name.toUpperCase();
        var nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
    } else if (this.state.currentFilter) {
      return this.state.employees.filter(
        employee => employee.department === this.state.currentFilter
      );
    }
    return this.state.employees;
  };

  render() {
    return (
      <Wrapper>
        <NavBar updateFilter={this.updateFilter} />
        <Title>Hogwarts Employees</Title>

        <EmployeeTable employees={this.filterEmployees()} />
      </Wrapper>
    );
  }
}

export default App;
