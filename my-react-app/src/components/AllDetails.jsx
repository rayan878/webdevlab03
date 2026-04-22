import React, { useState, useEffect } from 'react';

function AllDetails({ students, updateScore }) {
  const [inputs, setInputs] = useState([]);

  // Sync inputs when the students array prop updates
  useEffect(() => {
    setInputs(students.map(s => s.score));
  }, [students]);

  const handleChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  return (
    <div className="w-[800px]">
      <div className="flex border border-[#256594] p-2 justify-between items-center bg-[#0d1b2a]">
        <span className="text-[#256594] text-xs font-bold">STUDENT RECORDS</span>
        <span className="text-[#256594] text-xs font-bold">{students.length} Entries</span>
      </div>
      <table className="w-full border border-[#256594] border-collapse bg-[#0d1b2a]">
        <thead>
          <tr className="text-[#256594] text-sm">
            <th className="text-left p-3 border-b border-[#256594]">Name</th>
            <th className="text-left p-3 border-b border-[#256594]">Score</th>
            <th className="text-left p-3 border-b border-[#256594]">Status</th>
            <th className="text-left p-3 border-b border-[#256594]">Update</th>
          </tr>
        </thead>
        <tbody>
          {students.map((item, index) => (
            <tr key={item.id} className="text-[#256594] border-b border-[#256594] last:border-0">
              <td className="p-3 text-white">{item.name}</td>
              <td className="p-3 text-white">{item.score}</td>
              <td className="p-3">
                <div className={`flex items-center gap-1 w-20 p-1 px-2 text-sm rounded border ${item.score >= 40 ? 'border-green-500 text-green-500' : 'border-red-500 text-red-500'}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${item.score >= 40 ? 'bg-green-500' : 'bg-red-500'}`}></span>
                  <span>{item.score >= 40 ? 'Pass' : 'Fail'}</span>
                </div>
              </td>
              <td className="p-3 flex gap-3 items-center">
                <input
                  type="number"
                  value={inputs[index] !== undefined ? inputs[index] : ''}
                  onChange={(e) => handleChange(index, e.target.value)}
                  className="w-12 p-1 px-2 outline-none border border-[#00FFE71A] bg-transparent text-gray-200"
                />
                <button
                  className="border border-[#256594] px-3 py-1 cursor-pointer hover:bg-[#00FFE71A] hover:text-[#00FFE0] transition-colors text-xs text-gray-400"
                  onClick={() => updateScore(index, inputs[index])}
                >
                  Save
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AllDetails;