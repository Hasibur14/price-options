import { LineChart as LChart, Line, XAxis, YAxis } from "recharts";

const LineChat = () => {


const subjectMarksData = [
    {"id": 1, "name": "John", "math_marks": 85, "physics_marks": 78, "chemistry_marks": 90},
    {"id": 2, "name": "Alice", "math_marks": 78, "physics_marks": 82, "chemistry_marks": 60},
    {"id": 3, "name": "Bob", "math_marks": 92, "physics_marks": 88, "chemistry_marks": 92},
    {"id": 4, "name": "Sarah", "math_marks": 70, "physics_marks": 75, "chemistry_marks": 68},
    {"id": 5, "name": "Emma", "math_marks": 42, "physics_marks": 90, "chemistry_marks": 75},
    {"id": 6, "name": "Michael", "math_marks": 95, "physics_marks": 92, "chemistry_marks": 98},
    {"id": 7, "name": "Sophia", "math_marks": 62, "physics_marks": 45, "chemistry_marks": 70},
    {"id": 8, "name": "James", "math_marks": 80, "physics_marks": 75, "chemistry_marks": 82},
    {"id": 9, "name": "Olivia", "math_marks": 75, "physics_marks": 80, "chemistry_marks": 78},
    {"id": 10, "name": "William", "math_marks": 90, "physics_marks": 88, "chemistry_marks": 55}
  ];
  
  


    return (
        <div>
            <LChart width={800} height={400} data={subjectMarksData}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis dataKey={''}></YAxis>
                   <Line dataKey="math_marks" stroke="red"></Line>
                   <Line dataKey="physics_marks" stroke="green"></Line>
                   <Line dataKey="chemistry_marks" stroke="skyBlue"></Line>
            </LChart>
        </div>
    );
};

export default LineChat;