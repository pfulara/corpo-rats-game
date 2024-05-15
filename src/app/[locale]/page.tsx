import { useTranslations } from 'next-intl';

import LoginForm from '@/components/organisms/LoginForm';
import RegisterForm from '@/components/organisms/RegisterForm';
import { Card } from '@/components/ui/card';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';

export default function Home() {
  const t = useTranslations('index');
  const loginFormTranslations = {
    wrongEmail: t('wrongEmail'),
    emptyPassword: t('emptyPassword'),
    signIn: t('signIn'),
    password: t('password'),
  };
  const registerFormTranslations = {
    wrongEmail: t('wrongEmail'),
    emptyPassword: t('emptyPassword'),
    signUp: t('signUp'),
    password: t('password'),
    username: t('username'),
  };

  return (
    <main className='p-4'>
      <Card className='max-w-96 w-full m-auto mt-8'>
        <Tabs defaultValue='login' className='w-full'>
          <TabsList className='w-full'>
            <TabsTrigger className='w-1/2' value='login'>
              {t('login')}
            </TabsTrigger>
            <TabsTrigger className='w-1/2' value='register'>
              {t('register')}
            </TabsTrigger>
          </TabsList>
          <TabsContent className='p-4' value='login'>
            <LoginForm
              loginFormTranslations={loginFormTranslations}
            />
          </TabsContent>
          <TabsContent className='p-4' value='register'>
            <RegisterForm
              registerFormTranslations={
                registerFormTranslations
              }
            />
          </TabsContent>
        </Tabs>
      </Card>
    </main>
  );
}
