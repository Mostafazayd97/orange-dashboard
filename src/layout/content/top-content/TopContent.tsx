
import { useContext } from "react"
import "./TopContent.css"
import SideBarContext from "../../../context/sidebat.context"
import { iconsImgs } from "../../../utils/images"




export const TopContent = () => {

    const { toggleSidebar } = useContext(SideBarContext)
    return (
        <>
            <div className="bg-secondary w-full">
                <div className='flex w-full p-6 justify-between'>
                    <div className='flex items-center'>
                        <img src={iconsImgs.menu} width={30} alt="" onClick={() => toggleSidebar()} className='cursor-pointer' />
                        <p className='text-white ml-3'>HOME</p>
                    </div>
                    <div className='flex gap-5'>
                        <img src={iconsImgs.search} width={30} alt="" />
                        <img src={iconsImgs.bell} width={30} alt="" />
                    </div>
                </div>

            </div>
        </>
    )
}
