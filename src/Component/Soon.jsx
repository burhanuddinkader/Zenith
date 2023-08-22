import React from 'react'
import logo from '../assets/Zenith Health Pro Logo.png'
import linkedIn from '../assets/LinkedInWhite.svg'
import insta from '../assets/InstaWhite.svg'
import globe from '../assets/GlobeWhite.svg'
import contact from '../assets/contact.svg'
import email from '../assets/email.svg'

export default function Soon(){
    return(
        <div className='h-screen bg-gradient-to-l from-teal-700 to-cyan-300 flex flex-col justify-center items-center'>
            <div class="flex w-full justify-center items-center">
                <img className="h-40 w-100" src={logo} alt=""/>
            </div>
            <div className="row h-72 flex flex-col items-center">
                <p className='text-3xl text-white italic my-5 font-bold'>We Care About Your <span className='text-green-600'>Health</span></p>
                <p className='text-8xl text-white my-8 '>COMING SOON</p>
            </div>
            <div className='row flex w-full justify-center items-center '>
                <img className='mx-2' src={contact} alt="" />
                <img className='mx-2' src={email} alt="" />
            </div>
        </div>
    )
}