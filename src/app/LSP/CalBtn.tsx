'use client'
import Link from 'next/link';
import { Button } from '@nextui-org/react';

export function CalBtn({component}: any) {
    return (
        <>      <Button
                className="mt-3 bg-gradient-to-r from-cyan-600 to-blue-500"
                href={component}
                as={Link}
                color="primary"
                variant="solid"
                radius='md'
                >
                    Calculate
                </Button>
            
        </>
    )
}