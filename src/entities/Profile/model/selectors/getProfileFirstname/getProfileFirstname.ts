/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { type StateSchema } from "app/providers/StoreProvider";

export const getProfileFirstname = (state: StateSchema): string => state?.profile?.data?.first || '';