import { useEffect, useState } from 'react'
import './sidebar.css'
import { personsImgs } from '../../utils/images';
import { navigationLinks } from '../../data/data';


export const Sidebar = () => {
    const [activeLinkIdx,setActiveLinkIdx] = useState(1);
    const [sideBarOpen, setSideBarOpen] = useState("")

    useEffect(() => {
        setSideBarOpen('')
    }, [])

    return (
        <div className={`bg-primary w-2/12 p-10  ${sideBarOpen}`}>
            <div className='flex justify-start items-center gap-6'>
                <div className="w-40 info-img img-fit-cover ">
                    <img
                        src={personsImgs.person_one}
                        alt="profile image"
                        className="object-cover"
                    />
                </div>
                <span className='font-bold text-white uppercase'>Mostafa Zayed</span>
            </div>
            <div className='flex flex-col py-10'>
               {
                    navigationLinks.map((navLink) => (
                        <li key={navLink.id} className='list-none py-2 '>
                            <a className={`flex flex-row items-center gap-3 nav-link p-2 cursor-pointer hover:bg-[#3a1900] rounded-xl ${navLink.id === activeLinkIdx ? 'active':null}`}  onClick={()=>setActiveLinkIdx(navLink.id)}>
                                <img src={navLink.image} className='w-8' alt="" />
                                <span className='text-white'>{navLink.title} </span>
                            </a>
                        </li>
                    ))
                }
            </div>


        </div>

    )
}