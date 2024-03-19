import { LineChart as LChart, Line, XAxis, YAxis } from "recharts";

const Linechart = () => {
  const studentsData = [
    { name: "Student 1", mathMarks: 85, physicsMarks: 78, chemistryMarks: 90 },
    { name: "Student 2", mathMarks: 72, physicsMarks: 85, chemistryMarks: 75 },
    { name: "Student 3", mathMarks: 90, physicsMarks: 80, chemistryMarks: 88 },
    { name: "Student 4", mathMarks: 65, physicsMarks: 72, chemistryMarks: 68 },
    { name: "Student 5", mathMarks: 78, physicsMarks: 76, chemistryMarks: 82 },
    { name: "Student 6", mathMarks: 88, physicsMarks: 85, chemistryMarks: 90 },
    { name: "Student 7", mathMarks: 70, physicsMarks: 68, chemistryMarks: 72 },
    { name: "Student 8", mathMarks: 82, physicsMarks: 78, chemistryMarks: 85 },
    { name: "Student 9", mathMarks: 75, physicsMarks: 70, chemistryMarks: 80 },
    { name: "Student 10", mathMarks: 79, physicsMarks: 82, chemistryMarks: 78 },
  ];

  return (
    <div>
      <LChart width={1000} height={400} data={studentsData}>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Line dataKey="mathMarks" stroke="green"></Line>
        <Line dataKey="physicsMarks"></Line>
        <Line dataKey="chemistryMarks"></Line>
      </LChart>
    </div>
  );
};

export default Linechart;
