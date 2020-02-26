import React from "react";
import EmployeeCard from "../EmployeeCard";

function EmployeeTable({ employees }) {
  return employees.map(employee => (
    <EmployeeCard employee={employee} key={employee.id} />
  ));
}

export default EmployeeTable;
