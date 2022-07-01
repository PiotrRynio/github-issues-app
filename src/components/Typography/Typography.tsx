import React, { ReactNode } from 'react';
import {
  Body1Typography,
  Body2Typography,
  ItemTitleTypography,
  PaginationTypography,
  SmallTypography,
  SubtitleTypography,
  TitleTypography,
} from './Typography.styles';
import { TypographyMixinsProps } from '../../assets/styles/themes/types/mixinsValues/TypographyMixins';

type TypographyVariant = 'body1' | 'body2' | 'small' | 'itemTitle' | 'title' | 'subtitle' | 'pagination';

type TypographyProps = {
  children: ReactNode;
  variant: TypographyVariant;
} & TypographyMixinsProps;

export const Typography = (props: TypographyProps) => {
  const TypographyVariant = TYPOGRAPHY_VARIANT_MAP[props.variant];

  return <TypographyVariant {...props} />;
};

const TYPOGRAPHY_VARIANT_MAP: {
  [id: string]: (props: TypographyProps) => JSX.Element;
} = {
  body1: Body1Typography,
  body2: Body2Typography,
  small: SmallTypography,
  itemTitle: ItemTitleTypography,
  title: TitleTypography,
  subtitle: SubtitleTypography,
  pagination: PaginationTypography,
};
