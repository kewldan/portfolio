import React from "react";

const colors: Record<number, string> = {
    0: '#2c2c2e',
    1: '#a11714',
    2: '#b3541c',
    3: '#b58c1c',
    4: '#008c47',
    5: '#006d9c',
}

const phrases: Record<string, string> = {
    0: 'IDK',
    1: 'BAD',
    2: 'NORMAL',
    3: 'GOOD',
    4: 'GREAT',
    5: 'IMPECCABLE',
}

function Segment({index, color}: { index: number, color: string | null }) {
    return (
        <div className='w-1/5 h-full bg-neutral-400'
             style={{
                 ...(color ? {backgroundColor: color} : {}),
                 ...(index === 0 ? {
                     borderTopLeftRadius: '1rem',
                     borderBottomLeftRadius: '1rem'
                 } : {}),
                 ...(index === 4 ? {
                     borderTopRightRadius: '1rem',
                     borderBottomRightRadius: '1rem'
                 } : {})
             }}>

        </div>
    )
}

export default function SegmentedProgress({value}: { value: number }) {
    return (
        <div className='h-4 flex flex-row items-center divide-x divide-neutral-300 dark:divide-neutral-600 relative'>
            <span
                className='w-full justify-center items-center flex flex-col absolute font-bold text-xs text-white'>{phrases[value]}</span>
            {
                Array.from({length: 5}).map((_, index) => (
                    <Segment key={`Progress-${index}`} index={index}
                             color={index < value ? colors[value] : null}/>
                ))
            }
        </div>
    )
}