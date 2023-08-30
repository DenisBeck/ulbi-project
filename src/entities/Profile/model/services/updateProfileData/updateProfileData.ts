/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { createAsyncThunk } from "@reduxjs/toolkit";
import type { ThunkConfig } from "app/providers/StoreProvider";
import { ValidateProfileError, type Profile } from "../../types/profile";
import { getProfileForm } from "../../selectors/getProfileForm/getProfileForm";
import { validateProfileData } from "../validateProfileData/validateProfileData";
import i18n from "shared/config/i18n/i18n";

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<ValidateProfileError[]>>(
    'profile/updateProfileData',
    async (_, { extra, rejectWithValue, getState}) => {
        const formData = getProfileForm(getState());

        const errors = validateProfileData(formData);

        if(errors.length) {
            return rejectWithValue(errors)
        }

        try {
            const response = await extra.api.put<Profile>('/profile', formData);

            if(!response.data) {
                throw new Error(i18n.t('Ошибка ввода данных'));
            }
            
            return response.data
        } catch(e: any) {
            // return rejectWithValue(e.message)
            return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
        }
        
    }
)