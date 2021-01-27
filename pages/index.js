import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
     <div class="px-4 sm:px-6 md:px-8 mb-14 mt-32 sm:mb-20 xl:mb-8">
       <h1 class="text-4xl sm:text-6xl lg:text-7xl leading-none font-extrabold tracking-tight text-gray-900 mt-10 mb-8 sm:mt-14 sm:mb-10">Next.js Tailwind Authentication</h1><p class="max-w-screen-lg text-lg sm:text-2xl sm:leading-10 font-medium mb-10 sm:mb-11">A utility-first CSS framework packed with classes like <code class="font-mono text-gray-900 font-bold ">flex</code>, <code class="font-mono text-gray-900 font-bold ">pt-4</code>, <code class="font-mono text-gray-900 font-bold ">text-center</code> and <code class="font-mono text-gray-900 font-bold ">rotate-90</code> that can be composed to build any design, directly in your markup.</p>
       <div class="flex flex-wrap space-y-4 sm:space-y-0 sm:space-x-4 text-center">
         <a class="w-full sm:w-auto flex-none bg-gray-900 hover:bg-gray-700 text-white text-lg leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200" href="https://github.com/dabit3/next.js-tailwind-authentication">Get started</a>
         <button type="button" class="w-full sm:w-auto flex-none bg-gray-50 text-gray-400 hover:text-gray-900 font-mono leading-6 py-3 sm:px-6 border border-gray-200 rounded-xl flex items-center justify-center space-x-2 sm:space-x-4 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-300 focus:outline-none transition-colors duration-200"><span class="text-gray-900"><span class="hidden sm:inline text-gray-500" aria-hidden="true">$ </span>git clone git@github.com:dabit3/next.js-tailwind-authentication.git</span><span class="sr-only">(click to copy to clipboard)</span>
         </button></div></div>
    </div>
  )
}
