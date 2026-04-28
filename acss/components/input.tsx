import React from "react";
import './input.tsx.css'

type InputVariant = "primary" | "secondary" | "underline" | "error";
type InputSize = "sm" | "md" | "lg";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: InputVariant;
  inputSize?: InputSize;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  children: React.ReactNode;
}
 const yy={primary: String`
    bgc-indigoTheme9 c-whiteThemeA10
    --hover[bgc-indigoTheme10,bxs-0px-0px-0px-3px-rgba-79-70-229-0.4]
    --active[bgc-indigoTheme11]
  `,
  secondary: String`
    bgc-grayTheme6 c-blackThemeA9
    b-1px-solid-grayTheme7
    --hover[bgc-grayTheme7,b-1px-solid-grayTheme9]
    --active[bgc-grayTheme9]
  `,
  ghost: String`
    bgc-transparent c-indigoTheme9
    b-1px-solid-transparent
    --hover[bgc-indigoTheme4,b-1px-solid-indigoTheme5]
    --active[bgc-indigoTheme5]
  `,
  danger: String`
    bgc-redTheme9 c-whiteThemeA10
    --hover[bgc-redTheme11,bxs-0px-0px-0px-3px-redTheme6]
    --active[bgc-redTheme10]
  `,
};
const variantClasses: Record<InputVariant, string> = {
  primary: String`
    b-1px-s-indigoTheme9 c-blackThemeA9
    --hover[b-1px-s-indigoTheme10]
    --has--focus[b-1px-s-indigoTheme10,bxs-0px-0px-0px-3px-rgba-79-70-229-0.4]
    --active[b-1px-s-indigoTheme11]
  `,
  secondary: String`
    bgc-grayTheme4 c-blackThemeA9
    b-1px-solid-grayTheme5
    --hover[bgc-grayTheme5]
    --has--focus[bgc-grayTheme5,b-1px-solid-grayTheme7]
    --active[bgc-grayTheme6]
  `,
  underline: String`
    __input-mb--6px
    bgc-transparent c-grayTheme-12
    b-1px-solid-transparent
    br-0-i
    bb-1px-solid-indigoTheme9
    --hover[bb-1px-solid-indigoTheme10]
    --has--focus[bb-2px-solid-indigoTheme11]
    --has--active[bb-1.5-s-indigoTheme12]
  `,
  error: String`
    b-1px-s-redTheme9 c-redThemeA9
    __span-c-redTheme9
    --hover[b-1px-s-redTheme10]
    --has--focus[b-1px-s-redTheme10,bxs-0px-0px-0px-3px-rgba-239-68-68-0.4]
    --active[b-1px-s-redTheme11]
  `,
};

const sizeClasses: Record<InputSize, string> = {
  sm: String("px-6px py-4px  fs-13px fw-500 br-6px  gap-6px"),
  md: String("px-8px py-6px fs-14px fw-600 br-8px  gap-8px"),
  lg: String("px-10px py-8px fs-16px fw-600 br-10px gap-10px"),
};

const Input: React.FC<InputProps> = ({
  variant = "primary",
  inputSize = "md",
  loading = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  children,
  disabled,
  className = "",
  ...props
}) => {
  const isDisabled = disabled || loading;

  return (
    <div className={`
          ${String('d-if ai-c jc-c')}
          ${sizeClasses[inputSize]}
          ${variantClasses[variant]}
          ${String`tn-all-0.2s --has(--disabled)[cna,pen,bgc-grayTheme9,usn,bn]
        
          ol-none
          pos-r
          ff-inherit`}
          ${fullWidth ? String("w-100p") : ""}
          ${isDisabled ? String("o-0.5 cna pen") : ""}
          ${className}
        `.trim().replace(/\s+/g, " ")}>
      
        {/* Left Icon */}
        {leftIcon  && (
          <span  className="d-if  ai-c lh-1 fs-1em">
            {leftIcon}
          </span>
        )}

        {/* input */}
        <input
        className="@base-au c  w-100%  cursor-text [disabled][cna,pen,usn]"
        disabled={isDisabled}
        
        {...props}
      />

        {/* Right Icon */}
        {rightIcon  && (
          <span   className="d-if ai-c lh-1  fs-1em">
            {rightIcon}
          </span>
        )}
  
    </div>
  );
};

export default Input;

import { InputHTMLAttributes, forwardRef, useId } from "react";

// Extend native HTML input attributes
export interface BaseInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  containerClassName?: string;
}

// forwardRef allows parent components to access the native DOM node
export const BaseInput = forwardRef<HTMLInputElement, BaseInputProps>(
  (
    { label, error, className = "", containerClassName = "", id, ...props },
    ref
  ) => {
    // Generate a unique ID if one isn't provided (for accessibility)
    const generatedId = useId();
    const inputId = id || generatedId;

    return (
      <div className={`flex flex-col gap-1 w-full ${containerClassName}`}>
        {/* Label rendered only if provided */}
        {label && (
          <label 
            htmlFor={inputId} 
            className="text-sm font-medium text-gray-700"
          >
            {label} {props.required && <span className="text-red-500">*</span>}
          </label>
        )}

        {/* The actual input element */}
        <input
          ref={ref}
          id={inputId}
          className={`
            w-full px-3 py-2 border rounded-md shadow-sm outline-none 
            transition-colors duration-200
            ${error ? "border-red-500 focus:border-red-600 focus:ring-1 focus:ring-red-500" : "border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"}
            disabled:bg-gray-100 disabled:cursor-not-allowed
            ${className}
          `}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : undefined}
          {...props}
        />

        {/* Error message rendered only if provided */}
        {error && (
          <span id={`${inputId}-error`} className="text-xs text-red-500 mt-1">
            {error}
          </span>
        )}
      </div>
    );
  }
);

// Helpful for debugging in React DevTools
BaseInput.displayName = "BaseInput";