import { Card, CardHeader } from "@nextui-org/card";

export function InputBox() {
    return(
        <>
        <Card 
        className="m-3 p-4"
        shadow="lg"
        >
            <CardHeader className="flex gap-3 font-bold">
                Long Service Payment Due
            </CardHeader>

            <hr className="mt-1"/>

        </Card>
        </>
    )
}