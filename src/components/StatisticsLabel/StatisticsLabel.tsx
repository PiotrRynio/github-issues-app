import React from 'react';
import { Wrapper } from './StatisticsLabel.styles';

type StatisticsLabelProps = {
  children: React.ReactNode;
};

export const StatisticsLabel = ({ children }: StatisticsLabelProps) => {
  return <Wrapper>{children}</Wrapper>;
};
