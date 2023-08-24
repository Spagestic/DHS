'use client'
import React from 'react'
import { Input } from '@nextui-org/react'

export function DateInput({ label }: any) {
    return (
        <>
            <Input
            className='mt-1 p-1'
            size='md'
            variant='underlined' // "flat", "bordered", "underlined", "faded"
            type="date"
            placeholder="Date"
            labelPlacement="outside"
            label={label}
            />
        </>
    )
}