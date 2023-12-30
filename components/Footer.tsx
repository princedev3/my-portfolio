import React from 'react'

const Footer = () => {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
        <small className="mb-2 block text-xs">
             &copy; 2023 marvin. made with <span className='text-red-500'>❤</span>
        </small>
        <p className="text-xs">
            <span className="font-semibold">About this website</span> built with React & Next.JS (App Router & Server ACtions),TypeSCript, Tailwind CSS, Framer Motion, React Email & Resend, Vercel hoisting.
        </p>
    </footer>
  )
}

export default Footer