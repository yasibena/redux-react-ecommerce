import { createSlice, current } from '@reduxjs/toolkit';
import { supabase } from '../../supabase/client';
import { createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  status: 'idle',
  error: null,
  filteredProducts: [],
  countEachProduct: 0,
  selectedColors: [],
  selectedSize: [],
  selectedCategory: [],

};


export const fetchProducts = createAsyncThunk(
  '/products/fetchproducts',
  async () => {
    const response = await supabase.from('products').select();
    return response.data;
  }
);

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    searchByText: (state, action) => {
      const searchBytext = action.payload;
      const filterP = current(state.products).filter((prod) =>
        prod?.name.includes(searchBytext)
      );
      state.filteredProducts = filterP;

      if (action.payload == 'همه') {
        state.filteredProducts = current(state.products);
      }
    },

    searchByCategory: (state, action) => {
      const searchByCategory = action.payload;
      const filterP2 = current(state.products).filter((prod) =>
        prod?.category.includes(searchByCategory)
      );
      state.filteredProducts = filterP2;
    },

    filterAndSortCombine: (state, action) => {

      const filterP = current(state.filteredProducts);


      if (action.payload.type == 'FILTER_BY_COLOR') {


        function filterProducts() {
          var temp = [];
          if (action.payload.removeColor == false) {

            temp = filterP.filter((pro) => {
              return state.selectedColors.every((color) =>
                pro.colors.includes(color)
              );
            });
            state.filteredProducts = temp;
          }
          if (action.payload.removeColor == true) {

            temp = current(state.products).filter((pro) => {
              return state.selectedColors.every((color) =>
                pro.colors.includes(color)
              );
            });
          }
          state.filteredProducts = temp;
        }

        if (
          action.payload.filterByColor &&
          action.payload.removeColor == false
        ) {
          function addColorFilter(color) {
            if (!state.selectedColors.includes(color)) {
              state.selectedColors.push(color);
            }
            filterProducts();
          }

          addColorFilter(action.payload.filterByColor);
        }

        if (
          action.payload.unfilterByColor &&
          action.payload.removeColor == true
        ) {
          function removeColorFilter(color) {
            const tempC = current(state.selectedColors).filter(
              (c) => c !== color
            );
            state.selectedColors = tempC;

            filterProducts();
          }
          removeColorFilter(action.payload.unfilterByColor);
        }
      }

      if (action.payload.type == 'FILTER_BY_CATEGORY') {
        function filterProducts() {
          var temp = [];
          //color
          if (action.payload.removeCategory == false) {

            temp = filterP.filter((pro) => {
              return state.selectedCategory.every((ca) =>
                pro.category.includes(ca)
              );
            });
            state.filteredProducts = temp;

          }
          if (action.payload.removeCategory == true) {
            temp = current(state.products).filter((pro) => {
              return state.selectedCategory.every((ca) =>
                pro.category.includes(ca)
              );
            });
            state.filteredProducts = temp;
          }
        }

        if (
          action.payload.filterByCategory &&
          action.payload.removeCategory == false
        ) {
          function addColorFilter(ca) {
            if (!state.selectedCategory.includes(ca)) {
              state.selectedCategory.push(ca);
            }
            filterProducts();
          }

          addColorFilter(action.payload.filterByCategory);
        }

        if (
          action.payload.unfilterByCategory &&
          action.payload.removeCategory == true
        ) {
          function removeCategoryFilter(ca) {

            const tempC = current(state.selectedCategory).filter(
              (c) => c !== ca
            );
            state.selectedCategory = tempC;

            filterProducts();
          }
          removeCategoryFilter(action.payload.unfilterByCategory);
        }
      }

      if (action.payload.type == 'FILTER_BY_SIZE') {
        function filterProducts() {
          var temp = [];
          if (action.payload.removeSize == false) {

            temp = filterP.filter((pro) => {
              return state.selectedSize.every((s) =>
                pro.size.includes(s)
              );
            });
            state.filteredProducts = temp;
          }

          if (action.payload.removeSize == true) {

            temp = current(state.products).filter((pro) => {
              return state.selectedSize.every((s) =>
                pro.size.includes(s)
              );
            });
            state.filteredProducts = temp;
          }
        }

        if (
          action.payload.filterBySize &&
          action.payload.removeSize == false
        ) {
          function addSizeFilter(s) {
            if (!state.selectedSize.includes(s)) {
              state.selectedSize.push(s);
            }
            filterProducts();
          }

          addSizeFilter(action.payload.filterBySize);
        }

        if (
          action.payload.unFilterBySize &&
          action.payload.removeSize == true
        ) {
          function removeSizeFilter(si) {

            const tempC = state.selectedSize.filter(
              (s) => s !== si
            );

            state.selectedSize = tempC;

            filterProducts();
          }
          removeSizeFilter(action.payload.unFilterBySize);
        }
      }

      if (action.payload.type == 'FILTER_BY_EXIST') {
        var temp = [];
        if (action.payload.isExist == 'exist') {
          temp = current(state.products).filter(pro => pro.existing)
        }
        if (action.payload.isExist == 'notExist') {
          temp = current(state.products).filter(pro => !pro.existing)
        }
        state.filteredProducts = temp;
      }

      if (action.payload.type == 'FILTER_BY_PRICE') {
        var temp = []
        temp = current(state.products).filter(item =>
          Number(item.price) >= Number(action.payload.minRange) && item.price <= Number(action.payload.maxRange))
        state.filteredProducts = temp;
      }

      if (action.payload.type === 'SORT_BY_MIN_PRICE') {
        state.filteredProducts.sort((a, b) => {
          return Number(a.price) - Number(b.price);
        });
      }
      if (action.payload.type === 'SORT_BY_MAX_PRICE') {
        state.filteredProducts.sort((a, b) => {
          return Number(b.price) - Number(a.price);
        });
      }
      if (action.payload.type === 'SORT_BY_DATE') {
        state.filteredProducts.sort((a, b) => {
          return new Date(b.DateOfPurchase) - new Date(a.DateOfPurchase);
        });
      }
    },

    deleteAllFilter: (state, action) => {
      state.filteredProducts = state.products
    },

  },

  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = 'loading';

      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeed';

        const loadedProducts = action.payload;
        state.products = state.products?.concat(loadedProducts);
        state.filteredProducts = state.products;
      });

  },
});




export const selectAllProducts = (state) => state.products.products;
export const selectFilteredProducts = (state) =>
  state.products.filteredProducts;

export const getProductsStatus = (state) => state.products.status;

export const {
  searchByText,
  searchByCategory,
  countEachProducts,
  sortBySomething,
  filterByColor,
  filterBySize,
  filterByexist,
  filterAndSortCombine,
  deleteAllFilter
} = productSlice.actions;

export default productSlice.reducer;
