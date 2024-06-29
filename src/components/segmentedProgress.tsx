import React from "react";

const colors: Record<number, string> = {
    0: '#d808d8',
    1: '#e63131',
    2: '#e68231',
    3: '#e6bc31',
    4: '#31e664',
    5: '#31c5e6',
}


function Segment({index, color}: { index: number, color: string | null }) {
    return (
        <div className='w-1/5 h-full bg-neutral-200 dark:bg-[#2c2c2e]'
             style={{
                 ...(color ? {backgroundColor: color} : {}),
                 ...(index === 0 ? {
                     borderTopLeftRadius: '10rem',
                     borderBottomLeftRadius: '10rem'
                 } : {}),
                 ...(index === 4 ? {
                     borderTopRightRadius: '10rem',
                     borderBottomRightRadius: '10rem'
                 } : {})
             }}>

        </div>
    )
}

export default function SegmentedProgress({value, phrases, invertColor}: {
    value: number,
    phrases: Record<number, string>,
    invertColor?: boolean
}) {
    return (
        <div className='h-4 flex flex-row items-center relative w-full'>
            <span
                className='w-full justify-center items-center flex flex-col absolute font-medium text-xs tracking-tight'>{phrases[value]}</span>
            {
                Array.from({length: 5}).map((_, index) => (
                    <Segment key={`Progress-${index}`} index={index}
                             color={index < value ? colors[invertColor ? 5 - value : value] : null}/>
                ))
            }
        </div>
    )
}