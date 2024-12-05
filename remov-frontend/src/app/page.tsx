'use client';

import Image from 'next/image';
import Link from 'next/link';
import { clsx } from 'clsx';
import { FormEvent } from 'react';

const Input = ({
  id,
  label,
  placeholder
}: {
  id: string;
  label: string;
  placeholder: string;
}) => (
  <div>
    <label className='block font-medium text-gray-100' htmlFor={id}>
      {label}
    </label>

    <input
      id={id}
      type='text'
      className={clsx(
        'bg-[#121212] border border-gray-500',
        'mt-1 block w-full p-3 rounded shadow-sm placeholder-gray-400 sm:text-sm',
        'focus:outline-none focus:ring-gray-100 focus:border-gray-100 focus:ring-2',
        'transition delay-100 duration-150 ease-in-out'
      )}
      placeholder={placeholder}
    />
  </div>
);

const NewTabLink = ({ text, href }: { text: string; href: string }) => (
  <Link className='underline' href={href} target='_blank'>
    {text}
  </Link>
);

export default function Home() {
  const removeTrack = async (e: FormEvent) => {
    e.preventDefault();
    alert('nigga bob!');
  };

  return (
    <div
      className={clsx(
        'bg-[#121212] sm:bg-gradient-to-b sm:from-[#2A2A2A] sm:to-black',
        'flex items-center justify-center min-h-screen'
      )}>
      <form
        className='bg-[#121212] py-8 px-12 sm:rounded-xl sm:shadow-md w-full max-w-xl'
        onSubmit={removeTrack}>
        <div className='sm:px-16 sm:mt-6'>
          <div className='text-center space-y-2 mb-8'>
            <h2 className='text-2xl font-bold text-white'>Remov.gg</h2>
            <p className='text-gray-100'>Instant and Automated Track Removal</p>
          </div>

          <div className='space-y-4 mb-6'>
            <Input id='name' label='Name' placeholder='Your full name' />

            <div>
              <Input id='email' label='Email' placeholder='Your email' />

              <button
                className='text-white underline text-sm mt-1'
                type='button'
                onClick={() =>
                  alert(
                    'We need your name and email to confirm the authenticity of the request ' +
                      'and prevent misuse of the service. Your data will not be shared with anyone else.'
                  )
                }>
                Why do we need this?
              </button>
            </div>

            <Input
              id='track-link'
              label='Track Link'
              placeholder='The link/URI of the track'
            />

            <Input
              id='playlist-link'
              label='Playlist Link'
              placeholder='The link/URI of the playlist'
            />

            <div className='flex items-center space-x-4'>
              <div className='h-5 w-5'>
                <input
                  id='confirm-checkbox'
                  type='checkbox'
                  className={clsx(
                    'appearance-none h-5 w-5 rounded-md',
                    'border border-gray-500 bg-[#121212]',
                    'checked:bg-primary checked:border-primary hover:border-primary',
                    'transition delay-100 duration-150 ease-in-out'
                  )}
                />
              </div>

              <label
                htmlFor='confirm-checkbox'
                className='text-sm text-gray-200 select-none'>
                I confirm that the track I want removed is mine or belongs to an
                artist I manage or represent.
              </label>
            </div>
          </div>

          <button
            type='submit'
            className={clsx(
              'bg-primary text-black font-medium',
              'hover:bg-primary-hover hover:scale-105',
              'w-full py-3 px-4 rounded-full',
              'focus:outline-none focus:ring-1 focus:ring-gray-100 focus:ring-offset-2',
              'transition duration-100 ease-in-out'
            )}>
            Remove Me!
          </button>

          <div className='px-5 py-4 mt-4 text-gray-300'>
            <div className='flex justify-center items-center space-x-4'>
              <Image
                src='/recaptcha-icon.svg'
                width={32}
                height={32}
                alt='ReCaptcha Logo'
              />

              <p className='text-xs'>
                This site is protected by reCAPTCHA and the Google{' '}
                <NewTabLink
                  text='Privacy Policy'
                  href='https://policies.google.com/privacy'
                />{' '}
                and{' '}
                <NewTabLink
                  text='Terms of Service'
                  href='https://policies.google.com/terms'
                />{' '}
                apply.
              </p>

              <br />
            </div>

            <p className='text-xs mt-6 text-center'>
              WE ARE NOT AFFILIATED WITH SPOTIFY IN ANY WAY.
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
