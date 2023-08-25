import { Card, CardHeader } from "@nextui-org/card";

export default function PaymentBox() {
    return(
        <>
        <div
        className="flex flex-wrap justify-center gap-3"
        >
            <Card 
            className="m-3 p-3 max-xl:w-140"
            shadow="lg"
            >
                <CardHeader className="flex gap-3 font-bold">
                    Long Service Payment Due
                </CardHeader>

                <hr className="mt-1"/>

            </Card>
        </div>
        </>
    )
}