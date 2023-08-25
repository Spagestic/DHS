// LSP.tsx
// import { InputBox } from "./InputBox";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { DateInput } from "./DateInput";
import { WageInput } from "./WageInput";
import { CalBtn } from "./CalBtn";


export default function LSP() {
  return (
      <>
        <div
        // className="flex flex-wrap justify-center gap-3 max-lg:w-140"
        >
          <Card 
          className="m-3 p-4 max-w-80"
          shadow="lg"
          >
            <CardHeader className="flex gap-3 font-bold">
                Long Service Payment
            </CardHeader>

            <hr className="mt-2"/>

            <CardBody>
              <p className="mb-2">Tell us your work dates</p>
              <DateInput label="Start Working date"/>     
              <DateInput label="End Working date"/>
              <p className="my-3">Tell us your work dates</p>
              <WageInput label="Monthly Wage"/>
              <CalBtn component="/LSP/PaymentBox"/>
            </CardBody>
        </Card>
        </div>
      </>
  )
}