import { iconsImgs } from "../../utils/images"
import "./loans.css"


export const Loans = () => {
    return (
        <div className="grid-common ">
            <div className="flex justify-between ">
                <p className="text-gray-300 ">Loans</p>
                <button>
                    <img src={iconsImgs.plus} width={24} alt="" />
                </button>
            </div>

            <div className="flex gap-3 items-center py-4">
                <div className="bg-pumpkin w-[120px] h-[120px] rounded-full relative">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-secondary w-[100px] h-[100px] rounded-full">
                        <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-300"> 10%</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}