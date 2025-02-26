import * as React from "react";
import { CustomCheckbox, CheckboxGroup } from "@/components/checkbox";

const Index = () => {
  const [checkboxStates, setCheckboxStates] = React.useState({
    checkbox1: true,
    checkbox2: false,
    checkbox3: true,
    checkbox4: false,
    checkbox5: true,
    checkbox6: true,
  });

  const handleCheckboxChange = (name: string) => (checked: boolean) => {
    setCheckboxStates((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="max-w-[328px]">
        <CheckboxGroup>
          <CustomCheckbox
            checked={checkboxStates.checkbox1}
            onChange={handleCheckboxChange("checkbox1")}
            label="Put content here"
          />
          <CustomCheckbox
            checked={checkboxStates.checkbox2}
            onChange={handleCheckboxChange("checkbox2")}
            label="Put content here"
          />
        </CheckboxGroup>

        <CheckboxGroup className="mt-[26px]">
          <CustomCheckbox
            checked={checkboxStates.checkbox3}
            onChange={handleCheckboxChange("checkbox3")}
            disabled
            label="Put content here"
          />
          <CustomCheckbox
            checked={checkboxStates.checkbox4}
            onChange={handleCheckboxChange("checkbox4")}
            disabled
            label="Put content here"
          />
        </CheckboxGroup>

        <CheckboxGroup className="mt-[26px]">
          <CustomCheckbox
            checked={checkboxStates.checkbox5}
            onChange={handleCheckboxChange("checkbox5")}
            indeterminate
            label="Put content here"
          />
          <CustomCheckbox
            checked={checkboxStates.checkbox6}
            onChange={handleCheckboxChange("checkbox6")}
            indeterminate
            disabled
            label="Put content here"
          />
        </CheckboxGroup>
      </div>
    </div>
  );
};

export default Index;
