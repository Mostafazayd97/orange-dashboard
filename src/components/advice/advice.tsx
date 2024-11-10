import { iconsImgs } from "../../utils/images"
import "./advice.css"

export const Advice = () => {
    return (
        <div className="grid-common ">
        <div className="flex justify-between ">
            <p className="text-gray-300 ">Savings</p>
            <button>
                <img src={iconsImgs.plus} width={24} alt="" />
            </button>
        </div>
        </div>
        )
    }