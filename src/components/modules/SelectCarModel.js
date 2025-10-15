import Select from "react-select";
import CarModels from "../../utils/carModels.json";
import { allModels } from "@/utils/allCarsModels";

function SelectCarModel({ carBrand, setCarModel, carModel }) {
  const options = CarModels[carBrand];
  let optionsOcject = {};
  if (!carBrand) {
    optionsOcject = allModels.map((model) => ({
      value: model.replace(/\s+/g, "-").toLowerCase(),
      label: model,
    }));
  } else {
    optionsOcject = options.map((model) => ({
      value: model.replace(/\s+/g, "-").toLowerCase(),
      label: model,
    }));
  }

  return (
    <div>
      <Select
        options={optionsOcject}
        onChange={(option) => setCarModel(option.value)}
        value={optionsOcject.find((item) => item.value === carModel) || null}
      />
    </div>
  );
}

export default SelectCarModel;
