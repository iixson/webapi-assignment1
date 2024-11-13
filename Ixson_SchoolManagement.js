module.exports = {
  //Sample Data
  students: [
    {
      id: 1,
      name: "Daniel Ong",
      classid: 1,
    },
    {
      id: 2,
      name: "Josh Lee",
      classid: 2,
    },
  ],

  classes: [
    { id: 1, name: "IM2250" },
    { id: 2, name: "IM2251" },
  ],

  attendances: [
    {
      id: 1,
      studentid: 1,
      classid: 1,
      date: "13/11/2024",
      statusid: 1,
    },
    {
      id: 2,
      studentid: 2,
      classid: 2,
      date: "13/11/2024",
      statusid: 1,
    },
  ],

  status: [
    { id: 1, name: "Present" },
    { id: 2, name: "Absent" },
  ],

  //Functions

  //Get Student
  getStudentById(studentid) {},

  //Get Class
  getClassById(classid) {},

  //Get Status
  getStatusNameById(statusid) {},

  //Add Attendance
  addAttendanceRecord(studentId, classId, date, status) {},

  //Add Class Attendance
  addClassAttendance(classId, date, absentStudentIds = []) {},

  //Get Student's Attendance By Date
  getAttendanceRecord(studentid, date) {},

  //Get Student's Attendance Summary
  getAttendanceSummary(studentid) {},

  //Update Attendance
  updateAttendanceRecord(studentid, date, updatedstatus) {},

  //Delete Attendance
  deleteAttendanceRecord(studentid, date) {},
};
