import { Middleware } from '@nuxt/types';
import { Auth } from 'aws-amplify';

const authMiddleware: Middleware = async (context) => {
  const redirectHome = () => context.redirect('/');
  const redirectLogin = () => context.redirect('login');

  const currentRoute = context.route.name;

  try {
    await Auth.currentSession();
    if (currentRoute === 'login') redirectHome();
  } catch {
    if (currentRoute !== 'login') redirectLogin();
  }
}

export default authMiddleware