import React from 'react';

function AddStudent({ newStudent, handleNameChange, handleScoreChange, submitStudent }) {
  return (
    <div className="w-[800px] border border-[#256594] bg-[#0d1b2a]">
      <div className="flex border-b border-[#256594] p-2 justify-between items-center">
         <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00FFE0]"></span>
            <span className="text-gray-300 text-sm">Register Student</span>
         </div>
         <span className="text-[#256594] text-xs font-bold">NEW ENTRY</span>
      </div>
      <div className="flex">
        <input
          type="text"
          placeholder="STUDENT NAME"
          value={newStudent.name}
          onChange={(e) => handleNameChange(e.target.value)}
          className="flex-1 p-4 outline-none border-r border-[#256594] bg-transparent text-white placeholder-[#256594]"
        />
        <div className="flex-1 flex border-r border-[#256594]">
          <input
            type="number"
            placeholder="SCORE (0-100)"
            value={newStudent.score}
            onChange={(e) => handleScoreChange(e.target.value)}
            className="w-full p-4 outline-none bg-transparent text-white placeholder-[#256594]"
          />
        </div>
        <button
          onClick={submitStudent}
          className="w-32 p-4 cursor-pointer hover:bg-[#00FFE71A] text-[#256594] hover:text-[#00FFE0] transition-colors font-bold"
        >
          + ADD
        </button>
      </div>
    </div>
  );
}

export default AddStudent;