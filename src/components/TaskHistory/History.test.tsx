import { dummyTasksData } from 'dummy-data';
import { render, screen } from 'test-utils';
import { TaskHistory } from './TaskHistory';

describe('TaskHistory', () => {
  test('renders task history with correct number of entries', () => {
    render(<TaskHistory history={dummyTasksData[0].history} />);
    const historyEntryElements = screen.getAllByRole('listitem');
    expect(historyEntryElements.length).toBe(1);
  });
});
