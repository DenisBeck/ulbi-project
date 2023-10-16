/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { type FC } from 'react'
import { DynamicModuleLoader, type ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from '@/widgets/Page';
import { EditableProfileCard } from '@/features/editableProfileCard';
import { profileReducer } from '@/features/editableProfileCard/model/slice/profileSlice';
import { useParams } from 'react-router-dom';

const reducers: ReducersList = {
    profile: profileReducer
}

interface ProfilePageProps {
    className?: string;
}

const ProfilePage: FC<ProfilePageProps> = ({className}: ProfilePageProps) => {
    const { id } = useParams<{id: string}>();
    
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page>
                <EditableProfileCard id={id} />
            </Page>
        </DynamicModuleLoader>
        
    );
};

export default ProfilePage