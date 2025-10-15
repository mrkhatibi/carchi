"use client";

import Select from "react-select";

function SelectCarYear({setCarYear , carYear}) {
  const thisYearMiladi = new Date().getFullYear();
  const thisYearShamsi = thisYearMiladi - 621;
  const options = Array.from({ length: 30 }, (_, index) => ({
    value: `${thisYearMiladi - index}-${thisYearShamsi - index}`,
    label: `${thisYearMiladi - index}-${thisYearShamsi - index}`,
  }));

  return (
    <div>
      <Select options={options} onChange={(option)=>setCarYear(option.value)} value={options.find(item=>item.value === carYear) || null}/>
    </div>
  );
}

export default SelectCarYear;
