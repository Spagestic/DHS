'use client'
import Link from 'next/link';
import { Button } from '@nextui-org/react';

export function CalBtn({component}: any) {
    return (
        <>
            <Button
            className="mt-3"
            color="primary"
            >
                <Link href={component}>
                    Calculate
                </Link>
            </Button>
        </>
    )
}