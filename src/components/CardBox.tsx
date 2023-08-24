import Link from "next/link";
import {Card, 
        CardHeader, 
        CardBody, 
        // CardFooter, 
    } from "@nextui-org/card";

export function CardBox({Title, Description, Page}: any) {
    return (
        <>
        <Card className="m-3 p-3"
        shadow="lg"
        isHoverable
        isPressable
        >
            <Link 
            href={Page}
            >
            <CardHeader className="flex gap-3 font-bold">
                <p className="text-md ">{Title}</p>
            </CardHeader>

            <hr className="mt-1"/>
            
            <CardBody>
                <p>{Description}</p>
            </CardBody>
            </Link>
        </Card> 
        </>
    );
    }