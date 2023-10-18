/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable react/display-name */
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './RatingCard.module.scss';
import { Card } from '@/shared/ui/Card/Card';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text, TitleTag } from '@/shared/ui/Text/Text';
import { StarRating } from '@/shared/ui/StarRating/StarRating';
import { Modal } from '@/shared/ui/Modal/Modal';
import { Input } from '@/shared/ui/Input/Input';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button';
import { Drawer } from '@/shared/ui/Drawer/Drawer';
import { useResize } from '@/shared/lib/hooks/useResize/useResize';

interface RatingCardProps {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    onCancel?: (starsCount: number) => void;
    onAccept?: (starsCount: number, feedback?: string) => void;
    rate?: number;
}

export const RatingCard = memo((props: RatingCardProps) => {
    const {
        className,
        onAccept,
        feedbackTitle,
        hasFeedback,
        onCancel,
        title,
        rate = 0,
    } = props;
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(rate);
    const [feedback, setFeedback] = useState('');

    const clientWidth = useResize(document.documentElement)

    const onSelectStars = useCallback((selectedStarsCount: number) => {
        setStarsCount(selectedStarsCount);
        if (hasFeedback) {
            setIsModalOpen(true);
        } else {
            onAccept?.(selectedStarsCount);
        }
    }, [hasFeedback, onAccept]);

    const acceptHandle = useCallback(() => {
        setIsModalOpen(false);
        onAccept?.(starsCount, feedback);
    }, [feedback, onAccept, starsCount]);

    const cancelHandle = useCallback(() => {
        setIsModalOpen(false);
        onCancel?.(starsCount);
    }, [onCancel, starsCount]);

    const modalContent = (
        <>
            <Text
                title={{content: feedbackTitle ?? '', tag: TitleTag.H3}}
            />
            <Input
                value={feedback}
                onChange={setFeedback}
                placeholder={t('Ваш отзыв')}
            />
        </>
    );

    const browserContent = (
        <Modal isOpen={isModalOpen} lazy>
            <VStack max gap="32">
                {modalContent}
                <HStack max gap="16" justify="end">
                    <Button onClick={cancelHandle} theme={ButtonTheme.OUTLINE_RED}>
                        {t('Закрыть')}
                    </Button>
                    <Button onClick={acceptHandle}>
                        {t('Отправить')}
                    </Button>
                </HStack>
            </VStack>
        </Modal>
    );

    const mobileContent = (
        <Drawer isOpen={isModalOpen} lazy onClose={cancelHandle}>
            <VStack gap="32">
                {modalContent}
                <Button fullWidth onClick={acceptHandle} size={ButtonSize.L}>
                    {t('Отправить')}
                </Button>
            </VStack>
        </Drawer>
    )

    return (
        <Card className={classNames(cls['rating-card'], {}, [className])}>
            <VStack align="center" gap="8">
                <Text title={starsCount ? {content: t('Спасибо за оценку!'), tag: TitleTag.H3} : {content: title ?? '', tag: TitleTag.H2}} />
                <StarRating selectedStars={starsCount} size={40} onSelect={onSelectStars} />
            </VStack>
            {clientWidth > 767.98 ? browserContent : mobileContent}
        </Card>
    );
});
