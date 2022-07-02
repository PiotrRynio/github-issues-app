import { IconProps } from '../IconProps';

export const StarIcon = ({ width = 20, height = 20, ariaLabel, fill = 'currentColor' }: IconProps) => {
  return (
    <svg width={width} height={height} fill="none" xmlns="http://www.w3.org/2000/svg" aria-labelledby={ariaLabel}>
      <title>{ariaLabel}</title>
      <path
        d="M8.00014 2.26L9.38014 5.05L9.61014 5.55L10.1101 5.625L13.1901 6.07L11.0001 8.22L10.6251 8.585L10.7151 9.085L11.2401 12.15L8.48513 10.705L8.00014 10.5L7.53513 10.745L4.78013 12.17L5.28014 9.105L5.37014 8.605L5.00014 8.22L2.79014 6.045L5.87014 5.6L6.37014 5.525L6.60014 5.025L8.00014 2.26ZM8.00014 1.28686e-06L5.72514 4.61L0.640136 5.345L4.32014 8.935L3.45013 14L8.00013 11.61L12.5501 14L11.6801 8.935L15.3601 5.35L10.2751 4.61L8.00014 1.28686e-06Z"
        fill={fill}
      />
    </svg>
  );
};
