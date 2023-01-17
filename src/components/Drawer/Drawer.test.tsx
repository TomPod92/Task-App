import { render, screen } from 'test-utils';
import { Drawer } from './Drawer';

describe('Drawer', () => {
  test('Renders Drawer correctly', () => {
    render(
      <Drawer isOpen={false} head={<div>Head</div>}>
        <p>Body</p>
      </Drawer>
    );

    const drawerHeader = screen.getByText(/head/i);
    expect(drawerHeader).toBeInTheDocument();

    const drawerBody = screen.getByTestId('drawer-body-container');
    expect(drawerBody).toHaveStyle({ maxHeight: 0 });
  });
});
