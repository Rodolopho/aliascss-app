'use client'

import { Checkbox as RACCheckbox, type CheckboxProps as RACCheckboxProps } from 'react-aria-components';
import { composeRenderProps } from 'react-aria-components';
import './Checkbox.tsx.css';

interface CheckboxProps extends RACCheckboxProps {
  label?: string
}

const indicatorClassName = String`
  indicator dif aic jcc w-4 h-4 br-6px bgc-white o-0 tn-opacity-200ms
`;

const rootClassName = String`
  dif aic g-2 cur-pointer usn fs--font-size-lg c-grayRATheme1200
  [data-disabled][c-grayRATheme600,cna]
`;

const boxClassName = String`
  indicator  dif aic jcc
  x-square-20px br-6px
`;

const iconClassName = String`
  x-square-12px c-white
  o-0 tn-opacity-200ms
`;

const labelClassName = String`
  lh-1.4
`;

const iconVisibleClassName = String`
  o-1
`;

export function Checkbox(props: CheckboxProps) {
  const { children, label, ...checkboxProps } = props;

  return (
    <RACCheckbox {...checkboxProps} className={rootClassName}>
      {composeRenderProps(children ?? label, (child, state) => (
        <>
          <div className={boxClassName + 'button-base'}>
            <svg
              viewBox="0 0 18 18"
              aria-hidden="true"
              className={`${iconClassName} ${state.isSelected || state.isIndeterminate ? iconVisibleClassName : ''}`}>
              <polyline
                points="1 9 7 14 15 4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className={labelClassName}>{child}</span>
        </>
      ))}
    </RACCheckbox>
  );
}
