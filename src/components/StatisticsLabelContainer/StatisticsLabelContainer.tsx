import React from 'react';
import { Wrapper } from './StatisticsLabelContainer.styles';

type LabelContainerProps = {
  children: React.ReactNode;
  isLongerGap?: boolean;
};

export const StatisticsLabelContainer = ({ children, isLongerGap }: LabelContainerProps) => {
  return <Wrapper isLongerGap={isLongerGap}>{children}</Wrapper>;
};
