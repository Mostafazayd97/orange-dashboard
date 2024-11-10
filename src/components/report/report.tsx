import { reportData } from "../../data/data"
import { iconsImgs } from "../../utils/images"
import "./report.css"



export const Report = () => {
    return (
        <div className="grid-common col-span-4">
            <div className="flex justify-between">
                <p className="text-gray-300"> Report</p>
                <button>
                    <img src={iconsImgs.plus} width={24} alt="" />
                </button>
            </div>

            <div className="flex justify-between gap-14 w-full">
                <div className="flex flex-col gap-4 pt-4">
                    <p>100</p>
                    <p>75</p>
                    <p>50</p>
                    <p>25</p>
                    <p>0</p>
                </div>
                <div className="flex gap-4 mr-10">
                    {/* <div className="h-full bg-primaryLight rounded w-10 relative"> 
                    <div className="h-[52%] bg-pumpkin w-full rounded-t-lg absolute bottom-0"></div>
                </div> */}

                    {reportData.map((report) => (
                        <div>
                            <div className="h-full bg-primaryLight rounded w-10 relative" key={report.id}>
                                <div style={{ height: `${report.value1}%` }} className={` bg-pumpkin w-full rounded-t-lg absolute bottom-0`}></div>
                            </div>
                            <p className="text-gray-300 py-1">{report.month}</p>
                        </div>

                    ))}

                </div>


            </div>


        </div>
    )
}