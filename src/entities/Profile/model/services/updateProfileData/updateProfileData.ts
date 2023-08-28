import { createAsyncThunk } from "@reduxjs/toolkit";
import type { ThunkConfig } from "app/providers/StoreProvider";
import i18n from "shared/config/i18n/i18n";
import { type Profile } from "../../types/profile";
import { getProfileForm } from "../../selectors/getProfileForm/getProfileForm";

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'profile/updateProfileData',
    async (_, { extra, rejectWithValue, getState}) => {
        const formData = getProfileForm(getState());
        try {
            const response = await extra.api.put<Profile>('/profile', formData);
            // throw new Error(i18n.t('Ошибка ввода данных'));
            // // eslint-disable-next-line no-unreachable
            return response.data
        } catch(e: any) {
            // return rejectWithValue(e.message)
            return rejectWithValue(i18n.t('Ошибка'));
        }
        
    }
)