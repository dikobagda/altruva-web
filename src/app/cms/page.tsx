import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { verifySessionToken } from '@/lib/cms-auth';

export default async function CmsPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get('cms_session')?.value;
  const authenticated = token && verifySessionToken(token);

  if (authenticated) {
    redirect('/cms/dashboard');
  } else {
    redirect('/cms/login');
  }
}
