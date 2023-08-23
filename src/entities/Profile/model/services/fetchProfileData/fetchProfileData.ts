import { createAsyncThunk } from "@reduxjs/toolkit";
import type { ThunkConfig } from "app/providers/StoreProvider";
import i18n from "shared/config/i18n/i18n";
import { type Profile } from "../../types/profile";

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'profile/fetchProfileData',
    async (_, { extra, rejectWithValue}) => {
        try {
            const response = await extra.api.get<Profile>('/profile');
                        
            return response.data
        } catch(e) {
            return rejectWithValue(i18n.t('Ошибка'))
        }
        
    }
)