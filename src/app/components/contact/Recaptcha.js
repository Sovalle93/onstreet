// components/contact/Recaptcha.js
'use client';
import { useState } from 'react';

const Recaptcha = ({ onVerify }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    onVerify(newChecked);
  };

  return (
    <div className="flex items-center space-x-3 p-4 border border-gray-300 rounded-lg bg-gray-50">
      <input
        type="checkbox"
        id="recaptcha"
        checked={isChecked}
        onChange={handleCheck}
        className="w-5 h-5 rounded border-gray-300"
      />
      <label htmlFor="recaptcha" className="text-gray-700">
        Verifica que no eres un robot
      </label>
    </div>
  );
};

export default Recaptcha;