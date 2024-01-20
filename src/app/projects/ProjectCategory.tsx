import React from "react";

export default function ProjectCategory({title, children}: { title: string, children: React.ReactNode }) {
    return (
        <>
            <h1 className="text-5xl font-bold divider my-6 px-3">{title}</h1>

            <div className='grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-4 mb-6 px-4'>
                {children}
            </div>
        </>
    )
}