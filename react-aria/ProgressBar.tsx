'use client'

import {
  Label,
  ProgressBar as RACProgressBar,
  type ProgressBarProps as RACProgressBarProps,
} from 'react-aria-components';
import './ProgressBar.tsx.css';

interface ProgressBarProps extends RACProgressBarProps {
  label?: string
}

const rootClassName = String`
  df fdc g-2 w-100p
`;

const headerClassName = String`
  dif aic jcsb g-2 fs--font-size c-grayRATheme1200
`;

const trackClassName = String`
  inset oh h-2 br-9999px
`;

const fillClassName = String`
  h-100p br-9999px bgc-indigoRATheme1000
  tn-width-200ms
`;

const indeterminateFillClassName = String`
  w-8 an-progress-indeterminate adu-1s atf-linear aic-infinite
`;

export function ProgressBar(props: ProgressBarProps) {
  const { label, ...progressBarProps } = props;

  return (
    <RACProgressBar {...progressBarProps} className={rootClassName}>
      {({ percentage, valueText, isIndeterminate }) => (
        <>
          <div className={headerClassName}>
            {label ? <Label>{label}</Label> : <span />}
            <span>{valueText}</span>
          </div>
          <div className={trackClassName}>
            <div
              keyframes-progress-indeterminate="@0-[tf-tx--100%] @100-[tf-tx-250%]"
              className={`${fillClassName} ${isIndeterminate ? indeterminateFillClassName : ''}`}
              style={isIndeterminate ? undefined : { width: `${percentage}%` }}
            />
          </div>
        </>
      )}
    </RACProgressBar>
  );
}
