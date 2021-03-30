export type Icon = 'food';

export function getIconUrl(icon: Icon) {
  switch (icon) {
    case 'food':
      return '/icons/food.svg';
    default:
      console.error(`Unreachable, received unexpected icon ${icon}`);
      return '/icons/placeholder.svg';
  }
}
