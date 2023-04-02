import React from 'react';
import { Link } from '../../renderer/Link';
import sidebarImage from './login-sidebar.png?url';

export { Page }

function Page() {
  return (
    <div className="flex h-full">
      <SideArt />
      <div className='p-6'>
        <h1 className="text-black-500 font-semibold mb-1">Log in</h1>
        <p className="text-xs mb-12">By continuing, you agree to our <Link>User Agreement</Link> and <Link>Privacy Policy</Link>. </p>

        <div className="flex flex-col max-w-xs">

          <SocialButton>Continue with Google</SocialButton>
          <SocialButton>Continue with Apple</SocialButton>

          or

          <input type="username" placeholder='username' />
          <input type="password" placeholder='password' />
        </div>
      </div>
    </div>
  )
}

function SocialButton({ children }: { children: React.ReactNode }) {
  return (
    <button className='rounded-full border border-black p-2 text-sm font-semibold text-slate-700'>{children}</button>
  );
}

function SideArt() {
  return (
    <div className='w-[128px] h-screen bg-cover bg-center' style={{ backgroundImage: `url(${sidebarImage})` }}>
    </div>
  );
}
