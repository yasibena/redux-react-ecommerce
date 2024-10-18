import { createApi,fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import { supabase } from '../../supabase/client';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fakeBaseQuery(),
    endpoints: (builder) => ({
        getProducts: builder.query({
            queryFn: async () => {
                const products = await supabase.from('products').select();
                return { data: products }
            }
        })
    })
});
export const { useGetItemsQuery } = apiSlice;
