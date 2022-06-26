import React, { ReactNode } from 'react';

type TypographyVariant = 'body1' | 'body2' | 'small' | 'ItemTitle' | 'Title' | 'Subtitle' | 'Pagination';

type TypographyProps = {
  children: ReactNode;
  variant: TypographyVariant;
};

export const Typography = ({ children, variant }: TypographyProps) => {
  const renderVariant = () => {
    switch (variant as TypographyVariant) {
      case 'body1':
        return <p>{children}</p>;
      case 'body2':
        return <p>{children}</p>;
      case 'small':
        return <p>{children}</p>;
      case 'ItemTitle':
        return <h3>{children}</h3>;
      case 'Title':
        return <h2>{children}</h2>;
      case 'Subtitle':
        return <h4>{children}</h4>;
      case 'Pagination':
        return <span>{children}</span>;
    }
  };
  return renderVariant();
};
