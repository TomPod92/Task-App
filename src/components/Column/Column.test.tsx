import { render, screen } from 'test-utils';
import { dummyTasksData } from 'dummy-data';
import { TaskStatus } from 'types';
import { Column } from './Column';

describe('Column', () => {
  test('Renders Column correctly', async () => {
    render(<Column columnType={TaskStatus.Open} />);

    const columnTitle = screen.getByRole('heading', { name: /open/i });
    const taskItems = await screen.findAllByTestId('task');

    expect(columnTitle).toBeInTheDocument();
    expect(taskItems.length).toBe(dummyTasksData.length);
  });
});
