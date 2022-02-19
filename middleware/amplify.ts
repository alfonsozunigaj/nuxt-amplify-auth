import { Middleware } from '@nuxt/types';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';

const amplifyMiddleware: Middleware = (context) => {
  const redirectHome = () => context.redirect('/');
  const redirectLogin = () => context.redirect('login');

  onAuthUIStateChange((authState, _authData) => {
    if (authState === AuthState.SignedIn) {
      redirectHome();
    } else if (authState === AuthState.SignedOut) {
      redirectLogin();
    }
  });
}

export default amplifyMiddleware