import { EmployeeFilterPipe } from './employee-filter-pipe';

describe('EmployeeFilterPipe', () => {
  it('should create an instance', () => {
    const directive = new EmployeeFilterPipe();
    expect(directive).toBeTruthy();
  });
});
