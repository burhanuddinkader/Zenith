import React from 'react'
import logo from '../assets/Zenith Health Pro Logo.png'
import linkedIn from '../assets/LinkedInWhite.svg'
import insta from '../assets/InstaWhite.svg'
import globe from '../assets/GlobeWhite.svg'

const Contact = () => {
  return (
    <div className='h-screen bg-gradient-to-r from-[#14597b] to-[#edf5fe]'>
      <div className="flex h-24 w-full justify-center items-center">
        <img className='h-16 bg-white rounded-2xl p-2 w-44 align-middle' src={logo} alt="" />
      </div>
      {/* <div className="row h-72 my-16 pt-4"> */}
      <div className="row h-72 my-16 pt-4 flex items-center justify-center">
            <p className='text-5xl text-[#C71A03] my-4 font-bold'>Coming Soon</p>
            <br />
            <p className='text-2xl text-white'>Be the first to know when our</p>  
            <p className='text-2xl text-white'>new site is live</p> 
            {/* <div className='py-2 mt-4'> */}
                {/* <label htmlFor="email"> Email </label> */}
                {/* <input type="text" className="bg-gray-50 border py-2 border-gray-300 text-gray-900 text-sm rounded-lg block w-40 p-2.5 mx-auto" placeholder="Email Address"></input> */}
                {/* <input type="text" className="bg-gray-50 my-4 border py-2 border-gray-300 text-gray-900 text-sm rounded-lg block w-40 p-2.5 mx-auto" placeholder="Mobile Number"></input> */}
            {/* </div> */}
        </div>
      {/* </div>  */}
      <div className="row h-20"></div>
      <div className='row flex h-24 w-full justify-center items-center'>
        <img className='mx-2' src={linkedIn} alt="" />
        <img className='mx-2' src={insta} alt="" />
        <img className='mx-2'src={globe} alt="" />
        <img className='mx-2' src={insta} alt="" />
        <img className='mx-2'src={linkedIn} alt="" />
      </div>
    </div>
  )
}

export default Contact
{/* <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John"></input> */}
        
