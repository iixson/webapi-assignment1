module.exports = {
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
};
