import React, { useState } from 'react';
import Heading from './components/Heading';
import AddStudent from './components/AddStudent';
import StudentsSummary from './components/StudentsSummary';
import AllDetails from './components/AllDetails';

const initialStudents = [
  { id: 1, name: "Aman", score: 78 },
  { id: 2, name: "Alex", score: 58 },
  { id: 3, name: "Joy", score: 39 }
];

function App() {
  const [students, setStudents] = useState(initialStudents);
  const [newStudent, setNewStudent] = useState({ name: "", score: "" });

  const updateScore = (index, newScore) => {
    const updated = students.map((s, i) =>
      i === index ? { ...s, score: Number(newScore) } : s
    );
    setStudents(updated);
  };

  const handleNameChange = (value) => {
    setNewStudent((prev) => ({ ...prev, name: value }));
  };

  const handleScoreChange = (value) => {
    setNewStudent((prev) => ({ ...prev, score: value }));
  };

  const submitStudent = () => {
    if (newStudent.name && newStudent.score) {
      setStudents((prev) => [
        ...prev,
        {
          id: prev.length > 0 ? prev[prev.length - 1].id + 1 : 1,
          name: newStudent.name,
          score: Number(newStudent.score)
        }
      ]);
      setNewStudent({ name: "", score: "" }); // Reset form
    }
  };

  return (
    <div className="w-full flex flex-col items-center gap-10 p-20 h-full min-h-screen bg-gray-900">
      <Heading />
      <AddStudent 
        newStudent={newStudent} 
        handleNameChange={handleNameChange} 
        handleScoreChange={handleScoreChange} 
        submitStudent={submitStudent} 
      />
      <StudentsSummary students={students} />
      <AllDetails students={students} updateScore={updateScore} />
    </div>
  );
}

export default App;