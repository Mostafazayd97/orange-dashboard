import { Base } from './base/base'
import './content.css'
import { TopContent } from './top-content/TopContent'

export const Content = () => {

    return (
        <>
        <div className='bg-secondary w-full'>
               <TopContent />
            <Base /> 
        </div>
        
        </>
    )
}