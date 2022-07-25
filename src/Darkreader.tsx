import React from 'react';
import { Theme, DynamicThemeFix } from 'darkreader';
import useDarkreader from './useDarkreader';
import Toogle from './Toogle';

export interface DarkreaderProps {
  defaultDarken?: boolean;
  theme?: Partial<Theme>;
  fixes?: DynamicThemeFix;
  onChange?: (checked: boolean) => void;
}

export default function Darkreader({
  defaultDarken = false,
  theme,
  fixes,
  onChange,
}: DarkreaderProps) {
  const [isDark, { toggle }] = useDarkreader(defaultDarken, theme, fixes);

  return (
    <Toogle
      checked={isDark}
      onChange={checked => {
        toggle();
        onChange?.(checked);
      }}
    />
  );
}
