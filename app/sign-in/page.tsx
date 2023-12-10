import React from 'react';
import { auth } from '@/auth';
import { LoginButton } from '@/components/login-button';
import { redirect } from 'next/navigation';
import Seo from '@/components/Seo'; // Correctly import the Seo component

export default async function SignInPage() {
  const session = await auth();

  // redirect to home if user is already logged in
  if (session?.user) {
    redirect('/');
  }

  return (
    <>
      <Seo 
        title="UX AI"
        description="UXAI - A platform integrating artificial intelligence (AI) to assist UX/UI designers with their queries. By Praveen Manchi"
        keywords="UX, UI, AI, Design, Artificial Intelligence, UX Design, UI Design"
        author="Praveen Manchi"
        url="https://uxai.designboard.club/"
        ogImage="https://www.ischool.berkeley.edu/sites/default/files/styles/fullscreen/public/sproject_teaser_image/project-thumbnail-black.png?itok=qe9CBNgc"
      />
      <div className="flex h-[calc(100vh-theme(spacing.16))] items-center justify-center py-10 flex-col">
        <h1 className="text-4xl mb-4 gradientText">Welcome to Our Platform</h1>
        <p className="mb-8 gradientParagraph">
          Sign in to access personalized features
        </p>
        <LoginButton />
      </div>
    </>
  );
}
