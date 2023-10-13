/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import type { StateSchema } from 'app/providers/StoreProvider';
import type { ValidateProfileError } from '../../types/editableProfileCardSchema';

export const getProfileValidateErrors = (state: StateSchema): ValidateProfileError[] | undefined => state.profile?.validateErrors;
