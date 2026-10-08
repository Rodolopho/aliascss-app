import React, { forwardRef, type HTMLAttributes, type ReactNode } from "react";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className = "", children, ...props }, ref) => {
    const baseStyles =
      String("padding-32px border-radius-20px background-color-111827/0.7 border-1px-solid-ffffff/0.08 display-flex flex-direction-column");

    const combinedClassName = `${baseStyles} ${className}`.trim();

    return (
      <div ref={ref} className={combinedClassName} {...props}>
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export default Card;