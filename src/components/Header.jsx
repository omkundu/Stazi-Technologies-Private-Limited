import React from 'react'
import { AiOutlineDown } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
const Header = ({ setSearchText, searchText }) => {

    return (

        <div className=' flex items-center justify-start gap-12 navbar shadow-xl py-3.5 rounded-3xl px-5'>

            <div className='flex relative w-1/4'>

                <input

                    type='text'

                    placeholder='Search...'

                    className='px-5 w-full py-2.5 rounded-3xl border placeholder:text-gray-400 placeholder:font-semibold focus:ring-gray-500 focus:right-1'

                    value={searchText}

                    onChange={(e) => setSearchText(e.target.value)}

                />
                <AiOutlineSearch className='text-2xl font-semibold text-gray-600 absolute right-5 top-3' />
            </div>

            <div className='flex items-center justify-start gap-5'>

                <div className='header-item'>

                    <h2 >
                        
                        Relevance

                    </h2>
                    <AiOutlineDown className='text-sm font-semibold text-gray-600 ' />
                </div>
                <div className='header-item'>

                    <h2 >

                        All brands
                        
                    </h2>
                    <AiOutlineDown className='text-sm font-semibold text-gray-600' />
                </div>
            </div>
        </div>
    )
}

export default Header