import { UserGuard } from './user-auth.guard';

describe('UserGuard', () => {
  it('should be defined', () => {
    expect(new UserGuard()).toBeDefined();
  });
});
