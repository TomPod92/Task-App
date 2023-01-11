import { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import AppProviders from 'providers/AppProviders';
import * as userEvent from '@testing-library/user-event';

const user = userEvent.default;

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AppProviders, ...options });

export { user as userEvent };
export * from '@testing-library/react';
export { customRender as render };
