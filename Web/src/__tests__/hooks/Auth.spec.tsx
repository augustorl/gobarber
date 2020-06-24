import { renderHook } from '@testing-library/react-hooks';
import { useAuth, AuthProvider } from '../../hooks/Auth';

describe('Auth hook', () => {
  it('should be able to Sign In', () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });
    result.current.signIn({
      email: 'johndoe@example.com.br',
      password: '123456',
    });

    expect(result.current.user.email).toEqual('johndoe@example.com.br');
  });
});
