import React, { type ReactNode } from "react";
import { type RenderResult, render } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import i18nForTests from "shared/config/i18n/i18nForTests";
import { BrowserRouter } from "react-router-dom";

export function renderWithTranslation(component: ReactNode): RenderResult  {
    return render(
        <BrowserRouter>
            <I18nextProvider i18n={i18nForTests}>
                {component}
            </I18nextProvider>
        </BrowserRouter>
        
    )
}