import React from "react";
import { render, screen } from "@testing-library/react"
import { Button, ThemeButton } from "./Button"

describe('Button', () => {
    test('check element', () => {
        render(<Button>TEST</Button>);
        console.log(screen);
        expect(screen.getByText('TEST')).toBeInTheDocument()
    });

    test('check class in element', () => {
        render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
        console.log(screen);
        expect(screen.getByText('TEST')).toHaveClass('clear');
        screen.debug();
    });
})