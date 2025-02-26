import * as React from "react";
import { CustomCheckbox, CheckboxGroup } from "@/components/checkbox";

const Index = () => {
  // List 1: All enabled
  const [list1States, setList1States] = React.useState({
    item1: false,
    item2: false,
    item3: false,
  });

  // List 2: Some disabled in checked state
  const [list2States, setList2States] = React.useState({
    item1: false,
    item2: true, // disabled & checked
    item3: false,
  });

  // List 3: Some disabled in unchecked state
  const [list3States, setList3States] = React.useState({
    item1: false,
    item2: false, // disabled & unchecked
    item3: false,
  });

  const handleList1Change = (name: string) => (checked: boolean) => {
    setList1States((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleList2Change = (name: string) => (checked: boolean) => {
    setList2States((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleList3Change = (name: string) => (checked: boolean) => {
    setList3States((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleList1SelectAll = (checked: boolean) => {
    setList1States({
      item1: checked,
      item2: checked,
      item3: checked,
    });
  };

  const handleList2SelectAll = (checked: boolean) => {
    setList2States((prev) => ({
      ...prev,
      item1: checked,
      item3: checked,
      // Keep item2 unchanged as it's disabled
    }));
  };

  const handleList3SelectAll = (checked: boolean) => {
    setList3States((prev) => ({
      ...prev,
      item1: checked,
      item3: checked,
      // Keep item2 unchanged as it's disabled
    }));
  };

  const isList1AllSelected = Object.values(list1States).every(Boolean);
  const isList1SomeSelected = Object.values(list1States).some(Boolean) && !isList1AllSelected;

  const isList2AllSelected = [list2States.item1, list2States.item3].every(Boolean);
  const isList2SomeSelected = [list2States.item1, list2States.item3].some(Boolean) && !isList2AllSelected;

  const isList3AllSelected = [list3States.item1, list3States.item3].every(Boolean);
  const isList3SomeSelected = [list3States.item1, list3States.item3].some(Boolean) && !isList3AllSelected;

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="max-w-[328px] space-y-12">
        {/* List 1: All enabled */}
        <div>
          <h2 className="text-lg font-medium mb-4">List 1: All Enabled</h2>
          <CheckboxGroup>
            <CustomCheckbox
              checked={isList1AllSelected}
              indeterminate={isList1SomeSelected}
              onChange={handleList1SelectAll}
              label="Select All"
            />
          </CheckboxGroup>
          <CheckboxGroup className="mt-[26px]">
            <CustomCheckbox
              checked={list1States.item1}
              onChange={handleList1Change("item1")}
              label="Item 1"
            />
            <CustomCheckbox
              checked={list1States.item2}
              onChange={handleList1Change("item2")}
              label="Item 2"
            />
          </CheckboxGroup>
          <CheckboxGroup className="mt-[26px]">
            <CustomCheckbox
              checked={list1States.item3}
              onChange={handleList1Change("item3")}
              label="Item 3"
            />
          </CheckboxGroup>
        </div>

        {/* List 2: Some disabled in checked state */}
        <div>
          <h2 className="text-lg font-medium mb-4">List 2: Some Disabled (Checked)</h2>
          <CheckboxGroup>
            <CustomCheckbox
              checked={isList2AllSelected}
              indeterminate={isList2SomeSelected}
              onChange={handleList2SelectAll}
              label="Select All"
            />
          </CheckboxGroup>
          <CheckboxGroup className="mt-[26px]">
            <CustomCheckbox
              checked={list2States.item1}
              onChange={handleList2Change("item1")}
              label="Item 1"
            />
            <CustomCheckbox
              checked={list2States.item2}
              disabled
              label="Item 2 (Disabled)"
            />
          </CheckboxGroup>
          <CheckboxGroup className="mt-[26px]">
            <CustomCheckbox
              checked={list2States.item3}
              onChange={handleList2Change("item3")}
              label="Item 3"
            />
          </CheckboxGroup>
        </div>

        {/* List 3: Some disabled in unchecked state */}
        <div>
          <h2 className="text-lg font-medium mb-4">List 3: Some Disabled (Unchecked)</h2>
          <CheckboxGroup>
            <CustomCheckbox
              checked={isList3AllSelected}
              indeterminate={isList3SomeSelected}
              onChange={handleList3SelectAll}
              label="Select All"
            />
          </CheckboxGroup>
          <CheckboxGroup className="mt-[26px]">
            <CustomCheckbox
              checked={list3States.item1}
              onChange={handleList3Change("item1")}
              label="Item 1"
            />
            <CustomCheckbox
              checked={list3States.item2}
              disabled
              label="Item 2 (Disabled)"
            />
          </CheckboxGroup>
          <CheckboxGroup className="mt-[26px]">
            <CustomCheckbox
              checked={list3States.item3}
              onChange={handleList3Change("item3")}
              label="Item 3"
            />
          </CheckboxGroup>
        </div>
      </div>
    </div>
  );
};

export default Index;
