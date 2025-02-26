
import * as React from "react";
import { cn } from "@/lib/utils";
import { CheckboxProps } from "./types";

export const CustomCheckbox: React.FC<CheckboxProps> = ({
  checked = false,
  disabled = false,
  indeterminate = false,
  label,
  onChange,
  className,
}) => {
  const checkboxRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled && onChange) {
      onChange(e.target.checked);
    }
  };

  const getCheckboxStyle = () => {
    if (disabled && checked) {
      return "bg-[rgba(189,230,232,1)]";
    }
    if (disabled && !checked) {
      return "bg-white shadow-[0px_1px_2px_0px_rgba(0,0,0,0.20)_inset] border-[0.5px] border-solid border-[#DADCE0] opacity-50";
    }
    if (checked || indeterminate) {
      return "bg-[rgba(37,201,208,1)]";
    }
    return "bg-white shadow-[0px_1px_2px_0px_rgba(0,0,0,0.20)_inset] border-[0.5px] border-solid border-[#DADCE0]";
  };

  const getLabelStyle = () => {
    if (disabled) {
      return "text-[rgba(169,169,169,1)]";
    }
    return "text-[rgba(85,85,85,1)]";
  };

  return (
    <label
      className={cn("flex min-h-6 items-center gap-3 px-[5px]", className)}
    >
      <div
        className={cn(
          "self-stretch flex min-h-3.5 items-center w-3.5 h-3.5 my-auto rounded-sm",
          getCheckboxStyle(),
        )}
      >
        <input
          ref={checkboxRef}
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={handleChange}
          className="sr-only"
        />
        {indeterminate && (
          <div className="flex w-3.5 flex-col items-stretch justify-center px-px py-[7px]">
            <div className="rounded bg-white flex w-full shrink-0 h-px" />
          </div>
        )}
        {checked && !indeterminate && (
          <img
            src="https://cdn.builder.io/api/v1/image/assets/ac5e42f1f7604d23869b74130df778e2/121efd1be926f3773e0068600fed2adc651d93fc3385c246d72e67ae5ea8be2d?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-3.5"
          />
        )}
      </div>
      {label && (
        <div
          className={cn(
            "text-sm font-normal leading-none self-stretch my-auto",
            getLabelStyle(),
          )}
        >
          {label}
        </div>
      )}
    </label>
  );
};
