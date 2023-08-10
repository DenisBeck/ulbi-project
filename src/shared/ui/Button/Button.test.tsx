import React from "react";
import { render, screen } from "@testing-library/react"
import { Button, ButtonTheme } from "./Button"

describe('Button', () => {
    test('check element', () => {
        render(<Button>TEST</Button>);
        console.log(screen);
        expect(screen.getByText('TEST')).toBeInTheDocument()
    });

    test('check class in element', () => {
        render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
        console.log(screen);
        expect(screen.getByText('TEST')).toHaveClass('clear');
        screen.debug();
    });
})