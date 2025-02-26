export interface CheckboxProps {
  checked?: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
  label?: string;
  onChange?: (checked: boolean) => void;
  className?: string;
}

export interface CheckboxGroupProps {
  className?: string;
}
