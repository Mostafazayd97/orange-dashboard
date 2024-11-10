import { subscriptions } from "../../data/data"
import { iconsImgs } from "../../utils/images"
import "./subscription.css"



export const Subscription = () => {
    return (
        <div className="grid-common ">
            <div className="flex justify-between ">
                <p className="text-gray-300 ">Subscription</p>
                <button>
                    <img src={iconsImgs.plus} width={24} alt="" />
                </button>
            </div>

            {
                subscriptions.map((subscription) => (
                    <div key={subscription.id} className="bg-primaryLight flex justify-between hover:cursor-pointer hover:bg-secondary hover:text-pumpkin  py-1 p-2">
                        <div className="flex gap-3 items-center">
                            <img src={iconsImgs.alert} width={24} alt="" />
                            <div className="flex items-center gap-3 text-sm">
                                <p>{subscription.title}</p>
                                <span className="text-xs">{subscription.due_date}</span>
                            </div>
                        </div>
                        <div className="p-3">
                            $ {subscription.amount}
                        </div>
                    </div>
                ))
            }

        </div>
    )
}