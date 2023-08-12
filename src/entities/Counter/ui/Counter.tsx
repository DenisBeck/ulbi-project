/* eslint-disable i18next/no-literal-string */
import { type FC } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button/Button';
import { counterActions } from '../model/slice/counterSlice';
import { type StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const Counter: FC = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector((state: StateSchema) => state.counter.value)

    const increment: VoidFunction = () => {
        dispatch(counterActions.increment())
    }

    const decrement: VoidFunction = () => {
        dispatch(counterActions.decrement())
    }

    return (
        <div>
            <h1 data-testid="value-title">value = {counterValue}</h1>
            <Button onClick={ increment } data-testid="increment-btn">
                increment
            </Button>
            <Button onClick={ decrement } data-testid="decrement-btn">
                decrement
            </Button>
        </div>
    );
};

