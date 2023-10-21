/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { type FC } from 'react'
import { Page } from '@/widgets/Page';
import { EditableProfileCard } from '@/features/editableProfileCard';
import { useParams } from 'react-router-dom';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage: FC<ProfilePageProps> = ({className}: ProfilePageProps) => {
    const { id } = useParams<{id: string}>();
    
    return (
        <Page>
            <EditableProfileCard id={id} />
        </Page>
    );
};

export default ProfilePage