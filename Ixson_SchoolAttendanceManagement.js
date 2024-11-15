module.exports = {
  //Sample data for student, classes, attendance and status
  students: [
    {
      id: 1,
      name: "Daniel Ong",
      classId: [1, 2],
    },
    {
      id: 2,
      name: "Tricia Lee",
      classId: [1, 2],
    },
    {
      id: 3,
      name: "Dexter Lim",
      classId: [1, 3],
    },
    {
      id: 4,
      name: "Avery Tan",
      classId: [2, 3],
    },
    {
      id: 5,
      name: "Josh Lee",
      classId: [2, 3],
    },
  ],

  classes: [
    { id: 1, name: "EGL200" },
    { id: 2, name: "EGL201" },
    { id: 3, name: "EGL202" },
  ],

  attendances: [
    {
      id: 1,
      studentId: 1,
      classId: 1,
      date: "13/11/2024",
      statusId: 1,
    },
    {
      id: 2,
      studentId: 1,
      classId: 2,
      date: "13/11/2024",
      statusId: 1,
    },
    {
      id: 3,
      studentId: 2,
      classId: 2,
      date: "13/11/2024",
      statusId: 1,
    },
  ],

  //Store status in array as well to ensure data consistency
  status: [
    { id: 1, name: "Present" },
    { id: 2, name: "Absent" },
  ],

  //Functions

  //Function 1 : Get Student by Id (Helper Function)
  getStudentById(studentId) {
    //Error handling for null value
    if (studentId == null) {
      return {
        Record: null,
        Message: "studentId cannot be empty!",
      };
    }

    //Error handling for invalid data type
    if (typeof studentId !== "number") {
      return {
        Record: null,
        Message: "Invalid data type, studentId must be a number!",
      };
    }

    //Error handling for negative number value
    if (studentId < 0) {
      return {
        Record: null,
        Message: "studentId cannot be a negative number!",
      };
    }

    //Finds the element which matches the studentId in the students array
    const student = this.students.find((student) => student.id === studentId);

    //Error handling for nonexistent student record
    if (!student) {
      return {
        Record: null,
        Message: "Student record does not exist!",
      };
    }

    return { Record: student, Message: "Student record found." };
  },

  //Function 2 : Get Class by Id (Helper Function)
  getClassById(classId) {
    //Error handling for null value
    if (classId == null) {
      return {
        Record: null,
        Message: "classId cannot be empty!",
      };
    }

    //Error handling for invalid data type
    if (typeof classId !== "number") {
      return {
        Record: null,
        Message: "Invalid data type, classId must be a number!",
      };
    }

    //Error handling for negative number value
    if (classId < 0) {
      return {
        Record: null,
        Message: "classId cannot be a negative number!",
      };
    }

    //Finds the element which matches the classId in the classes array
    const _class = this.classes.find((c) => c.id === classId);

    //Error handling for nonexistent class record
    if (!_class) {
      return {
        Record: null,
        Message: "Class record does not exist!",
      };
    }

    return { Record: _class, Message: "Class record found." };
  },

  //Function 3 : Get Status by Id (Helper Function)
  getStatusById(statusId) {
    //Error handling for null value
    if (statusId == null) {
      return {
        Record: null,
        Message: "statusId cannot be empty!",
      };
    }

    //Error handling for invalid data type
    if (typeof statusId !== "number") {
      return {
        Record: null,
        Message: "Invalid data type, statusId must be a number!",
      };
    }

    //Error handling for negative number value
    if (statusId < 0) {
      return {
        Record: null,
        Message: "statusId cannot be a negative number!",
      };
    }

    //Finds the element which matches the statusId in the status array
    const status = this.status.find((status) => status.id === statusId);

    //Error handling for nonexistent status record
    if (!status) {
      return {
        Record: null,
        Message: "There's only Present or Absent status!",
      };
    }

    return { Record: status, Message: "Status record found." };
  },

  //Function 4 : Get Attendance record by Id
  getAttendanceRecord(attendanceId) {
    //Error handling for null value
    if (attendanceId == null) {
      return {
        Record: null,
        Message: "attendanceId cannot be empty!",
      };
    }

    //Error handling for invalid data type
    if (typeof attendanceId !== "number") {
      return {
        Record: null,
        Message: "Invalid data type, attendanceId must be a number!",
      };
    }

    //Error handling for negative number value
    if (attendanceId < 0) {
      return {
        Record: null,
        Message: "attendanceId cannot be a negative number!",
      };
    }

    //Finds the element which matches the attendanceId in the attendances array
    const attendance = this.attendances.find(
      (attendance) => attendance.id === attendanceId
    );

    //Error handling for nonexistent attendance record
    if (!attendance) {
      return {
        Record: null,
        Message: "Attendance record does not exist!",
      };
    }

    //Reformat output using helper functions for better data presentation
    const attendanceFormat = {
      id: attendance.id,
      student: this.getStudentById(attendance.studentId).Record.name,
      class: this.getClassById(attendance.classId).Record.name,
      date: attendance.date,
      status: this.getStatusById(attendance.statusId).Record.name,
    };

    return { Record: attendanceFormat, Message: "Attendance record found." };
  },

  //Function 5 : Get Attendance summary
  getAttendanceSummary(studentId, classId) {
    //getStudent Helper function is called to do error handling for studentId
    const student = this.getStudentById(studentId);

    if (student.Record === null) {
      return { Record: student.Record, Message: student.Message };
    }

    //getClass Helper function is called to do error handling for classId
    const _class = this.getClassById(classId);

    if (_class.Record === null) {
      return { Record: _class.Record, Message: _class.Message };
    }

    //Error handling for whether student belongs to the class given
    const classCheck = student.Record.classId.find((id) => id === classId);

    if (!classCheck) {
      return {
        Record: null,
        Message: "Student does not belong to this class!",
      };
    }

    //Filter the array to find attendance records which match the studentId and classId given with "Present" status
    const presentRecords = this.attendances.filter(
      (attendance) =>
        attendance.studentId === studentId &&
        attendance.classId === classId &&
        attendance.statusId === 1
    );

    //Filter the array to find attendance records which match the studentId and classId given with "Absent" status
    const absentRecords = this.attendances.filter(
      (attendance) =>
        attendance.studentId === studentId &&
        attendance.classId === classId &&
        attendance.statusId === 2
    );

    //Format output to show number of days student is present and absent in this class
    const attendanceSummary = {
      student: student.Record.name,
      class: _class.Record.name,
      daysPresent: presentRecords.length,
      daysAbsent: absentRecords.length,
    };

    return {
      Record: attendanceSummary,
      Message:
        "Summary of " +
        attendanceSummary.student +
        "'s attendance records in class " +
        attendanceSummary.class,
    };
  },

  //Function 6 : Add Attendance Record
  addAttendanceRecord(studentId, classId, date, statusId) {
    //getStudent Helper function is called to do error handling for studentId
    const student = this.getStudentById(studentId);

    if (student.Record === null) {
      return { Record: student.Record, Message: student.Message };
    }

    //getClass Helper function is called to do error handling for classId
    const _class = this.getClassById(classId);

    if (_class.Record === null) {
      return { Record: _class.Record, Message: _class.Message };
    }

    //Error handling for null value
    if (date == null) {
      return {
        Record: null,
        Message: "date cannot be empty!",
      };
    }

    //Error handling for invalid data type
    if (typeof date !== "string") {
      return {
        Record: null,
        Message: "Invalid data type, date must be a string!",
      };
    }

    //Error handling for invalid string date format
    //Regular expression is for dd/mm/yyyy format
    const dateRegex =
      /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;

    if (!dateRegex.test(date)) {
      return {
        Record: null,
        Message: "Date must be in dd/mm/yyyy format!",
      };
    }

    //getStatus Helper function is called to do error handling for statusId
    const status = this.getStatusById(statusId);

    if (status.Record === null) {
      return { Record: status.Record, Message: status.Message };
    }

    //Error handling for existing attendance record
    const attendanceCheck = this.attendances.find(
      (attendance) =>
        attendance.studentId === studentId &&
        attendance.classId === classId &&
        attendance.date === date
    );

    if (attendanceCheck !== undefined) {
      return {
        Record: null,
        Message: "Attendance record already exists!",
      };
    }

    //Auto increment the id for new record
    const autoId = this.attendances.length + 1;

    //Create new attendance object
    const attendance = {
      id: autoId,
      studentId: studentId,
      classId: classId,
      date: date,
      statusId: statusId,
    };

    this.attendances.push(attendance);

    return { Record: attendance, Message: "Attendance record added!" };
  },

  //Function 7 : Add Class Attendance Records
  addClassAttendance(classId, date, absentStudentIds = []) {
    //getClass Helper function is called to do error handling for classId
    const _class = this.getClassById(classId);

    if (_class.Record === null) {
      return { Record: _class.Record, Message: _class.Message };
    }

    //Error handling for null value
    if (date == null) {
      return {
        Record: null,
        Message: "date cannot be empty!",
      };
    }

    //Error handling for invalid data types
    if (typeof date !== "string" || !Array.isArray(absentStudentIds)) {
      return {
        Record: null,
        Message:
          "Invalid data types, date must be a string, and absentStudentIds must be an array!",
      };
    }

    //Error handling for invalid string date format
    //Regular expression is for dd/mm/yyyy format
    const dateRegex =
      /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    if (!dateRegex.test(date)) {
      return {
        Record: null,
        Message: "Date must be in dd/mm/yyyy format!",
      };
    }

    //Filter students array to find which student's classes includes given classId
    const classStudents = this.students.filter((student) =>
      student.classId.includes(classId)
    );

    //For each student in given class, assign students absent based on array given and assign the rest present
    //Call addAttendanceRecord to add each record
    classStudents.forEach((student) => {
      const absent = absentStudentIds.includes(student.id);
      const statusId = absent ? 2 : 1;

      this.addAttendanceRecord(student.id, classId, date, statusId);
    });

    return { Record: null, Message: "Class attendance records added!" };
  },

  //Function 8 : Update Attendance Record
  updateAttendanceRecord(attendanceId, updatedStatusId) {
    //getAttendanceRecord function is called to do error handling for attendanceId
    const attendanceCheck = this.getAttendanceRecord(attendanceId);

    if (attendanceCheck.Record === null) {
      return {
        Record: attendanceCheck.Record,
        Message: attendanceCheck.Message,
      };
    }

    //getStatus Helper function is called to do error handling for updatedStatusId
    const statusCheck = this.getStatusById(updatedStatusId);

    if (statusCheck.Record === null) {
      return { Record: statusCheck.Record, Message: statusCheck.Message };
    }

    //Finds the index of the element which matches the attendanceId in the attendances array
    const attendanceIndex = this.attendances.findIndex(
      (attendance) => attendance.id === attendanceId
    );

    //Update statusId of attendance record
    this.attendances[attendanceIndex].statusId = updatedStatusId;

    return {
      Record: this.attendances[attendanceIndex],
      Message: "Attendance Record updated!",
    };
  },

  //Function 9 : Delete Attendance Record
  deleteAttendanceRecord(attendanceId) {
    //getAttendanceRecord function is called to do error handling for attendanceId
    const attendanceCheck = this.getAttendanceRecord(attendanceId);

    if (attendanceCheck.Record === null) {
      return {
        Record: attendanceCheck.Record,
        Message: attendanceCheck.Message,
      };
    }

    //Finds the index of the element which matches the attendanceId in the attendances array
    const attendanceIndex = this.attendances.findIndex(
      (attendance) => attendance.id === attendanceId
    );

    //Use splice to delete one record from the attendances array based on index found
    this.attendances.splice(attendanceIndex, 1);

    return {
      Record: null,
      Message: "Attendance Record deleted!",
    };
  },
};
