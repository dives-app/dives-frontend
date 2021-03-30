import { useRouter } from 'next/router';

export function useRecentRelativeDateFormatter() {
  const { locale } = useRouter();
  const relativeTimeFormatter = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' });
  const dateFormatter = new Intl.DateTimeFormat(locale);

  return {
    format: (date: Date | number) => {
      const relativeDate =
        Number(new Date(new Date(Date.now()).toDateString())) -
        Number(new Date(new Date(date).toDateString()));
      const MS_IN_A_DAY = 86_400_000;
      if (relativeDate < 3 * MS_IN_A_DAY) {
        return relativeTimeFormatter.format(-date / MS_IN_A_DAY, 'day');
      }
      return dateFormatter.format(new Date(date));
    },
  };
}

export function useDateTimeFormatter() {
  const { locale } = useRouter();
  return new Intl.DateTimeFormat(locale, {
    dateStyle: 'short',
    timeStyle: 'short',
  });
}
