'use client'
import React from 'react';
import { Input } from '@nextui-org/react';

export function WageInput({ label }: any) {
    return (
        <>
            <Input 
            className='mt-1 p-1'
            size='md'
            variant='underlined' // "flat", "bordered", "underlined", "faded"
            type="number"
            startContent="$"
            endContent="HKD"
            placeholder="0"
            labelPlacement="outside"
            label={label}
            />
        </>
    )
}