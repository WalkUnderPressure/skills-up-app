import createSchemaTypeName from '../helpers/createSchemaTypeName';
import getReduxSliceName from '../helpers/getReduxSliceName';

const reduxSliceTemplate = (slice: string) => {
  const schemaTypeName = createSchemaTypeName(slice);
  const sliceName = getReduxSliceName(slice);

  return `
// PayloadAction
import { createSlice } from '@reduxjs/toolkit';

import { ${schemaTypeName} } from '../types/${schemaTypeName}';
// import { your_async_thunk } from '../services/your_async_thunk';

const initialState: ${schemaTypeName} = {

};

export const ${sliceName}Slice = createSlice({
    name: '${sliceName}',
    initialState,
    reducers: {
      // template: (state, action: PayloadAction<string>) => {},
    },
    // extraReducers: (builder) => {
    //     builder
    //        .addCase(your_async_thunk.pending, (state) => {
    //             state.error = undefined;
    //             state.isLoading = true;
    //        })
    //        .addCase(your_async_thunk.fulfilled, (state, action: PayloadAction<string>) => {
    //             state.isLoading = false;
    //             state.data = action.payload;
    //        })
    //        .addCase(your_async_thunk.rejected, (state, action: PayloadAction<string>) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //        })
    // },
});

export const { actions: ${sliceName}Actions } = ${sliceName}Slice;
export const { reducer: ${sliceName}Reducer } = ${sliceName}Slice;`;
};

export default reduxSliceTemplate;
