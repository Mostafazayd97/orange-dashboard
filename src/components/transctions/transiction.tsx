import { transactions } from "../../data/data"
import { iconsImgs } from "../../utils/images"
import "./transictions.css"


export const Transictions = () => {
    return (
        <div className="grid-common rounded col-span-4 flex flex-col gap-5">
            <div className="flex justify-between">
                <p className="text-gray-300">Transictions</p>
                <button>
                    <img src={iconsImgs.plus} width={24} alt="" />
                </button>
            </div>

            <div className="flex flex-col gap-3">
            {   
                transactions.map(transactions => (
                    <div className="flex justify-between ">
                            <div className="flex gap-2 ">
                                <div className="overflow-hidden w-[50px] h-[50px] img-fit-cover">
                                    <img className=" overflow-hidden rounded-[100%]" src={transactions.image} alt="" />
                                </div>
                                <div>
                                    <p className="font-bold">{transactions.name}</p>
                                    <p className="text-gray-300">{transactions.date}</p>
                                </div>
                            </div>

                        <p className="text-scarlet">${transactions.amount}</p>
                    </div>
                ))
            }
            </div>
           
        </div>
    )

}