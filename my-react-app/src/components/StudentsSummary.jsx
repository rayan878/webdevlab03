import React from 'react';

function StudentsSummary({ students }) {
  // Dynamic calculation logic completed
  const totalStudents = students.length;
  const passedStudents = students.filter(s => s.score >= 40).length;
  const avgScore = totalStudents > 0 
    ? Math.round(students.reduce((acc, curr) => acc + curr.score, 0) / totalStudents) 
    : 0;

  return (
    <div className="w-[800px] flex justify-between border border-[#256594] bg-[#0d1b2a]">
      <div className="flex-1 border-r border-[#256594] p-6 relative group cursor-pointer hover:bg-[#00FFE71A] transition-all duration-300">
        <div className="flex flex-col">
          <span className="text-[#256594] text-sm font-bold mb-2">TOTAL</span>
          <span className="text-[#00FFE0] text-5xl font-bold">{totalStudents}</span>
        </div>
        <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#00FFE0] transition-all duration-300 group-hover:w-full"></span>
      </div>

      <div className="flex-1 border-r border-[#256594] p-6 relative group cursor-pointer hover:bg-[#00FFE71A] transition-all duration-300">
        <div className="flex flex-col">
          <span className="text-[#256594] text-sm font-bold mb-2">PASSED</span>
          <span className="text-[#00FFE0] text-5xl font-bold">{passedStudents}</span>
        </div>
        <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#00FFE0] transition-all duration-300 group-hover:w-full"></span>
      </div>

      <div className="flex-1 p-6 relative group cursor-pointer hover:bg-[#00FFE71A] transition-all duration-300">
        <div className="flex flex-col">
          <span className="text-[#256594] text-sm font-bold mb-2">AVG SCORE</span>
          <span className="text-[#00FFE0] text-5xl font-bold">{avgScore}</span>
        </div>
        <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#00FFE0] transition-all duration-300 group-hover:w-full"></span>
      </div>
    </div>
  );
}

export default StudentsSummary;