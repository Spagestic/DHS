import { CardBox } from "./CardBox";

export function Content() {
  return (
    <>
      <div 
      className="flex flex-wrap justify-center gap-3"
      >
        <CardBox 
        Title="Long Service Payment" 
        Description="Calculate your Long Service Payment based on Labour the Law of Hong Kong." 
        Page="/LSP"
        />

        {/* <CardBox
        Title="Annual Leave"
        Description="Coming Soon"
        Page="/ALC"
        /> */}

        {/* <CardBox
        Title="Serverance Payment"
        Description="Coming Soon"
        Page="/SP"
        />   */}
      </div>
    </>
  );
}
