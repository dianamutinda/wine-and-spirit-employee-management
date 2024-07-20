import { create } from "zustand";

const EmployeesStore = (set) => ({
  employees: [],

  captureEmployee: (newEmployee) =>
    set((previousEmployee) => {
      return { employees: [newEmployee, ...previousEmployee.employees] };
    }),
});

export const useEmployeesStore = create(EmployeesStore);
export default useEmployeesStore