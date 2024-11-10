import { savings } from "../../data/data"
import { iconsImgs, personsImgs } from "../../utils/images"
import "./savings.css"



export const Savings = () => {
    return (
        <div className="grid-common ">
            <div className="flex justify-between ">
                <p className="text-gray-300 ">Savings</p>
                <button>
                    <img src={iconsImgs.plus} width={24} alt="" />
                </button>
            </div>


            {
                savings.map((savings) => (
                    <div key={savings.id}>
                        <div className="flex justify-between hover:cursor-pointer hover:bg-secondary hover:text-pumpkin  py-1 p-2">
                            <div className="flex gap-3 items-center">
                                <img className=" w-[40px] h-[40px] rounded-full" src={personsImgs.person_one} alt="" />
                                <p className="text-sm">{savings.title}</p>
                            </div>
                            <div className="p-3">
                                $ {savings.saving_amount}
                            </div>

                        </div>
                        <div className="flex gap-3  my-3" >
                            <span className="text-sm inline-block bg-primaryLight text-gray-300">Date Taken <span>{savings.date_taken}</span></span>
                            <span className="text-sm inline-block bg-primaryLight text-gray-300">Date Due <span>{savings.amount_left}</span></span>
                        </div>

                        <div className="rounded-full bg-primaryLight w-full h-3 my-3 relative">
                            <div className="absolute top-0 left-0 bg-pumpkin h-3 rounded-full" style={{ width: `${50}%` }}></div>
                        </div>
                    </div>


                ))
            }


        </div>
    )
}