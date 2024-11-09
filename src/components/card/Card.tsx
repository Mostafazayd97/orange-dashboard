import "./Card.css"



export const Card = () => {
    return (
        <div className="grid-common col-span-4">
            <div className="title py-2">
                <p className="text-gray-300">Cards</p>
            </div>
            <div className="card">
                <div className="balance flex flex-col gap-2">
                    <p className="font-bold ">balance</p>
                    <p className="font-bold text-2xl"> $ 22,000</p>
                    <div className="card-wrapper">
                        <span className="card-pin-hidden">**** **** **** </span>
                        <span>1234</span>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="flex flex-col gap-2">
                        <p className="capitalize text-lg text-gray-300">expires</p>
                        <p className="font-bold text-sm">12/26</p>
                    </div>
                <div className="flex justify-end" >
                    <div className="bg-scarlet w-[40px] h-[40px] z-10 mr-[-10px] rounded-[100%]"></div>
                    <div className="bg-yellow w-[40px] h-[40px] rounded-[100%]" ></div>
                </div>
                </div>
                

            </div>
        </div>

    )
}