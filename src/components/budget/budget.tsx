import { budget } from "../../data/data"
import { iconsImgs } from "../../utils/images"
import "./budget.css"


export const Budget = () => {
    return (
        <div className="grid-common  col-span-4 ">
            <div className="flex justify-between gap-14 w-full">
                <p className="text-gray-300">Budget</p>
                <button>
                    <img src={iconsImgs.plus} width={24} alt="" />
                </button>
            </div>
            <div className="flex justify-between  pt-4 text-2xl my-2">
                <p className="font-bold "> Cash</p>
                <p className="font-bold">$ 100,000</p>
            </div>

            {
                budget.map((budget) => (
                    <div key={budget.id} className="bg-primaryLight flex justify-between hover:cursor-pointer hover:bg-secondary hover:text-pumpkin  py-1 p-2">
                        <div className="flex ">
                            <div className="flex gap-3 items-center">
                                <img src={iconsImgs.check} width={24} alt="" />
                            </div>
                            <div className="flex flex-col p-2 text-sm ">
                                <p>{budget.title}</p>

                                <span className="text-xs">{budget.type}</span>
                            </div>
                        </div>
                        <div className="p-3 ">
                           $ {budget.amount}
                        </div>
                    </div>

                ))
            }
        </div >
    )
}