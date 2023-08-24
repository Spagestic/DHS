import { Card, CardHeader } from "@nextui-org/card";
import { DateInput } from "./DateInput";
import { WageInput } from "./WageInput";
import { CalBtn } from "./CalBtn";

export function InputBox() {
    return(
        <>
        <Card 
        className="m-3 p-4"
        shadow="lg"
        >
            <CardHeader className="flex gap-3 font-bold">
                Long Service Payment
            </CardHeader>

            <hr className="mt-1"/>

            <DateInput label="Start Working date"/>     

            <DateInput label="End Working date"/>

            <WageInput label="Monthly Wage"/>

            <CalBtn component="/PaymemtBox"/>
        </Card>
        </>
    )
}