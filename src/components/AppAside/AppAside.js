import React from 'react';

import styles from './AppAside.module.css';


function AppAside() {
  return (
    <aside className="bg-slate-200 w-80 rounded-3xl h-[calc(100%-32px)] m-4 p-4">
      <nav className="h-full flex flex-col">
        <ul className="flex flex-col">
          <a className="mb-2" href="/#">
            <span className='text-xl'>Партнёры</span>
          </a>
          <a className="mb-2" href="/#">
            <span className='text-xl'>Процессы производства</span>
          </a>
          <a className="mb-2" href="/#">
            <span className='text-xl'>Статьи в блоге</span>
          </a>
        </ul>
        <a className={`mt-auto flex items-center`} href="/#">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
          <span className='text-xl'>Аккаунт</span>
        </a>
      </nav>
    </aside>
  )
}

export default AppAside;