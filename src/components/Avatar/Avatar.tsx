import { AvatarImage } from './Avatar.styles';

export type AvatarProps = {
  image: string;
  name: string;
  isLarge?: boolean;
};
export const Avatar = ({ image, name, isLarge = false }: AvatarProps) => {
  return <AvatarImage src={image} alt={`avatar of ${name} user`} isLarge={isLarge} />;
};
