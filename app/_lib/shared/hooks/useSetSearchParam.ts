import { useCallback } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

const useSetSearchParam = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const setSearchParam = useCallback(
    (param: string, value: string) => {
      const newSearchParams = new URLSearchParams(searchParams.toString());
      newSearchParams.set(param, value);

      const newUrl = `${pathname}?${newSearchParams.toString()}`;

      router.push(newUrl, undefined);
    },
    [router, pathname, searchParams]
  );

  return setSearchParam;
};

export default useSetSearchParam;
