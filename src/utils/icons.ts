export type Icon = 'food';

export function getIconUrl(icon: Icon) {
  switch (icon) {
    case 'food':
      return '/icons/food.svg';
    default:
      throw new Error(`Unreachable, received unexpected icon ${icon}`);
  }
}
