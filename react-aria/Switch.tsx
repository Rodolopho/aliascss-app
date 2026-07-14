'use client'

import { Switch as RACSwitch, type SwitchProps as RACSwitchProps } from 'react-aria-components';
import { composeRenderProps } from 'react-aria-components';
import './Switch.tsx.css';

interface SwitchProps extends RACSwitchProps {
  label?: string
}

const rootClassName = String`
  dif aic g-2 pr cur-pointer usn fs--font-size-lg c-grayRATheme1200
  [data-disabled][c-grayRATheme600,cna]
`;

const trackClassName = String`
  indicator dif aic
  w-2rem h-1.143rem p-2px br-9999px
  tn-all-200ms
`;

const thumbClassName = String`
  db x-square-0.857rem br-9999px bgc--field-background
  tn-transform-200ms
`;

const labelClassName = String`
  lh-1.4
`;

const thumbSelectedClassName = String`
  tf-tx-0.857rem
`;

export function Switch(props: SwitchProps) {
  const { children, label, ...switchProps } = props;

  return (
    <RACSwitch {...switchProps} className={rootClassName}>
      {composeRenderProps(children ?? label, (child, state) => (
        <>
          <div className={trackClassName}>
            <div className={`${thumbClassName} ${state.isSelected ? thumbSelectedClassName : ''}`} />
          </div>
          <span className={labelClassName}>{child}</span>
        </>
      ))}
    </RACSwitch>
  );
}
