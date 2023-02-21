import React, { useState } from 'react';
import SliderInput from "../components/SliderInput";

export default function SkillForm() {
  const [strength, setStrength] = useState(0);
  const [wisdom, setWisdom] = useState(0);
  const [agility, setAgility] = useState(0);

  return (
    <div className="max-w-2xl mx-auto pt-24 pb-24 w-full">
      <div>
        <SliderInput label="Strength" value={strength} set={setStrength} />
        <SliderInput label="Wisdom" value={wisdom} set={setWisdom} />
        <SliderInput label="Agility" value={agility} set={setAgility} />
      </div>
    </div>
  );
}