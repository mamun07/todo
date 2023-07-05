import { createSlice } from "@reduxjs/toolkit";

const initalStudents = {
  students: [{ id: 1, name: "Al Mamun", address: "Benapole" }],
};

const studentSlice = createSlice({
  name: "students",
  initialState: initalStudents,
  reducers: {
    showStudent: (state) => state,
    addStudent: (state, action) => {
      state.students.push(action.payload);
    },
    updateStudent: (state, action) => {
      const { id, name, address } = action.payload;
      const isStudent = state.students.filter((e) => e.id === id);
      if (isStudent) {
        isStudent[0].name = name;
        isStudent[0].address = address;
      }
    },
    deleteStudent: (state, action) => {
      const id = action.payload;
      state.students = state.students.filter((e) => e.id !== id);
    },
  },
});

export const { showStudent, addStudent, deleteStudent, updateStudent } =
  studentSlice.actions;
export default studentSlice.reducer;
