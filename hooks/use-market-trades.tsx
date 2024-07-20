import { useQuery } from '@tanstack/react-query';

import { useParams } from 'next/navigation';

import { $http } from '@/lib/http';

import { IGetTrades } from '@/types';

export const useMarketTrades = (chain = 'eth') => {
  return useQuery({
    queryKey: [chain, 'get-market-trades'],
    queryFn: async () => {
      return (
        await $http.get<IGetTrades>(
          `/dex/wallet/list?page=1&page_size=10&orderBy=30d.totalSoldTxns&sort=desc&chain=${chain}`,
          {
            params: { organization_id: '29929' },
          },
        )
      ).data;
    },

    // enabled: !!currentWorkspace && !!assetId,
  });
};
