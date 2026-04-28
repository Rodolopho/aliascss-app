import React from "react";
import './button.tsx.css'

type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  children: React.ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: String`
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

const sizeClasses: Record<ButtonSize, string> = {
  sm: String("px-12px py-6px  fs-13px fw-500 br-6px  gap-6px"),
  md: String("px-18px py-10px fs-14px fw-600 br-8px  gap-8px"),
  lg: String("px-24px py-14px fs-16px fw-600 br-10px gap-10px"),
};

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
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
    <button
      disabled={isDisabled}
      className={`
        ${String('d-if ai-c jc-c')}
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${String`tn-all-0.2s
        cur-pointer
        ol-none
        pos-r
        ff-inherit`}
        ${fullWidth ? String("w-100p") : ""}
        ${isDisabled ? String("o-0.5 cur-not-allowed pe-none") : ""}
        ${className}
      `.trim().replace(/\s+/g, " ")}
      {...props}
    >
      {/* Left Icon */}
      {leftIcon && !loading && (
        <span className="d-if ai-c lh-1 fs-1em">
          {leftIcon}
        </span>
      )}

      {/* Spinner */}
      {loading && (
        <span
          keyframes-spin="@0-tf-rotate-0deg @100-tf-rotate-360deg"
          className="
            d-if ai-c jc-c
            w-1em h-1em
            br-50p
            b-2px-solid-rgba-255-255-255-0.3
            bt-2px-solid-currentColor
            an-spin adu-0.7s atf-linear aic-infinite
          "
          aria-hidden="true"
        />
      )}

      {/* Label */}
      <span>{children}</span>

      {/* Right Icon */}
      {rightIcon && !loading && (
        <span className="d-if ai-c lh-1 fs-1em">
          {rightIcon}
        </span>
      )}
    </button>
  );
};

export default Button;