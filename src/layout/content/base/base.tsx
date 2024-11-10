import { Advice } from "../../../components/advice/advice"
import { Budget } from "../../../components/budget/budget"
import { Card } from "../../../components/card/Card"
import { Loans } from "../../../components/loans/loans"
import { Report } from "../../../components/report/report"
import { Savings } from "../../../components/savings/savings"
import { Subscription } from "../../../components/subscriptions/sunscription"
import { Transictions } from "../../../components/transctions/transiction"
import "./base.css"


export const Base = () => {
    return (
        <div>
            <div className="grid grid-cols-12 gap-6 p-2 px-7">
                <Card />
                <Transictions />
                <Report />
            </div>
            <div className="grid grid-cols-12 gap-6 p-2 px-7 h-full">
                <Budget />
                <div className="col-span-4 flex flex-col gap-3">
                    <Subscription />
                    <Savings />
                </div>
                <div className="col-span-4 flex flex-col gap-3">
                <Loans />
                <Advice />

                </div>
            </div>
         
        </div>

    )
}