# Assignment 1

# School Attendance Management Module

This is a node.js module that manages the attendance system for a school. It provides functionality for teachers to manage students's attendance like retrieving, adding, updating and deleting attendance records.

## Table of Contents

1. [Setup](#setup)
2. [Features](#features)
3. [Usage](#usage)
4. [References](#references)

## Setup

### 1. Clone Github Repository

```
https://github.com/iixson/webapi-assignment1
```

### 2. Create app.js file

Create the app.js file and import the module

```
const attendance = require("./Ixson_SchoolAttendanceManagement.js");
```

### 3. Run the application using node or nodemon

Nodemon is preferred as it has active reload

```
node app.js
```

```
nodemon app.js
```

## Features

**1. Retrieve Student details**

- `getStudentById(studentId) `:
  Retrieves a student's details based on Id

**2. Retrieve Class details**

- `getClassById(classId)`:
  Retrieves a class's details based on Id

**3. Retrieve Status**

- `getStatusById(statusId)`:
  Retrieves a class's details based on Id

**4. Retrieve attendance record**

- `getAttendanceRecord(attendanceId)`:
  Retrieves an attendance record based on Id

**5. Retrieve Attendance Summary**

- `getAttendanceSummary(studentId, classId)`:
  Retrieves the summary of a student's attendance records in class

**6. Create Attendance Record**

- `addAttendanceRecord(studentId, classId, date, statusId) `:
  Creates a new attendance record

**7. Create Class Attendance Records**

- `addClassAttendance(classId, date, absentStudentIds = [])`:
  Creates the attendance records for a whole class, assigning the status absent to students based on the array given

**8. Update Attendance Record**

- `updateAttendanceRecord(attendanceId, updatedStatusId)`:
  Updates an attendance record's status based on Id

**9. Delete Attendance Record**

- `deleteAttendanceRecord(attendanceId)`:
  Deletes an attendance record based on Id

## Usage

### 1. Get Student by Id

**Params Required:** studentId

```
 getStudentById(1)
```

### Output:

```
{
  Record: { id: 1, name: 'Daniel Ong', classId: [ 1, 2 ] },
  Message: 'Student record found.'
}
```

### 2. Get Class by Id

**Params Required:** classId

```
 getClassById(1)
```

### Output:

```
{ Record: { id: 1, name: 'EGL200' }, Message: 'Class record found.' }
```

### 3. Get Status by Id

**Params Required:** statusId

```
 getStatusById(1)
```

### Output:

```
{ Record: { id: 1, name: 'Present' }, Message: 'Status record found.' }
```

### 4. Get Attendance Record

**Params Required:** attendanceId

```
 getAttendanceRecord(1)
```

### Output:

```
{
  Record: {
    id: 1,
    student: 'Daniel Ong',
    class: 'EGL200',
    date: '13/11/2024',
    status: 'Present'
  },
  Message: 'Attendance record found.'
}
```

### 5. Get Attendance Summary

**Params Required:** studentId, classId

```
 getAttendanceSummary(1, 1)
```

### Output:

```
{
  Record: {
    student: 'Daniel Ong',
    class: 'EGL200',
    daysPresent: 1,
    daysAbsent: 0
  },
  Message: "Summary of Daniel Ong's attendance records in class EGL200"
}
```

### 6. Add Attendance Record

**Params Required:** studentId, classId, date, statusId

```
 addAttendanceRecord(1, 1, "14/11/2024", 1)
```

### Output:

```
{
  Record: { id: 4, studentId: 1, classId: 1, date: '14/11/2024', statusId: 1 },
  Message: 'Attendance record added!'
}
```

### 7. Add Class Attendance Records

**Params Required:** classId, date, absentStudentIds = []

```
 addClassAttendance(1, "14/11/2024", [])
```

### Output:

```
{ Record: null, Message: 'Class attendance records added!' }
```

### 8. Update Attendance Record

**Params Required:** attendanceId, statusId

```
 updateAttendanceRecord(1, 2)
```

### Output:

```
{
  Record: { id: 1, studentId: 1, classId: 1, date: '13/11/2024', statusId: 2 },
  Message: 'Attendance Record updated!'
}
```

### 9. Delete Attendance Record

**Params Required:** attendanceId

```
 deleteAttendanceRecord(1)
```

### Output:

```
{ Record: null, Message: 'Attendance Record deleted!' }
```

# References

### 1. Array.filter()

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

### 2. Regexp.test()

https://www.w3schools.com/jsref/jsref_regexp_test.asp

### 2. TypeOf Operator

https://www.w3schools.com/js/js_typeof.asp

### 4. The Ultimate Guide to Writing a Great README.md for Your Project

https://medium.com/@kc_clintone/the-ultimate-guide-to-writing-a-great-readme-md-for-your-project-3d49c2023357
