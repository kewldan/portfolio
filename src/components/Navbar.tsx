'use client';

import React, {Fragment} from 'react'
import {Disclosure} from '@headlessui/react'
import {FaXmark} from "react-icons/fa6";
import {HiMenu} from "react-icons/hi";
import {usePathname} from "next/navigation";

const navigation = [
    {name: 'Home', href: '/'},
    {name: 'Projects', href: '/projects'},
]

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    const pathname = usePathname();

    return (
        <Disclosure as="nav" className="bg-[#161b20] w-full">
            {({open}) => (
                <>
                    <div className="mx-auto max-w-4xl px-2 sm:px-6 lg:px-8 w-full">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                <Disclosure.Button
                                    className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="absolute -inset-0.5"/>
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <FaXmark size={20}/>
                                    ) : (
                                        <HiMenu size={20}/>
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center">
                                    <span className='font-bold text-gray-400'>dev://</span>
                                    <span className='font-semibold text-gray-200'>kewldan</span>
                                </div>
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    (pathname === item.href) ? 'bg-[#1a232b] text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                    'rounded-md px-3 py-2 text-sm font-medium'
                                                )}
                                                aria-current={(pathname === item.href) ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.href === pathname ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium'
                                    )}
                                    aria-current={item.href === pathname ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}
