import React, { useState } from 'react';

export default function Preorder() {
  const [form, setForm] = useState({
    bin: '', city: '', bank: '', level: '', area: '', price: '', amount: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-4 space-y-3">
      <h1 className="text-xl font-bold mb-2">Preorder</h1>
      {Object.keys(form).map(field => (
        <input
          key={field}
          name={field}
          value={form[field]}
          onChange={handleChange}
          placeholder={field}
          className="w-full px-3 py-2 border rounded-md text-sm"
        />
      ))}
      <button className="w-full py-2 bg-green-600 text-white rounded-xl">Make preorder</button>
    </div>
  );
}