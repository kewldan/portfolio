'use client';

import React, {Fragment} from 'react'
import {Disclosure, DisclosureButton, DisclosurePanel} from '@headlessui/react'
import {FaXmark} from "react-icons/fa6";
import {HiMenu} from "react-icons/hi";
import {usePathname} from "next/navigation";
import Link from "next/link";
import ThemeButton from "@/components/themeToggle";

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
        <Disclosure as="nav" className="w-full outline outline-neutral-300 dark:outline-[#151518] outline-1">
            {({open}) => (
                <>
                    <div className="px-2 sm:px-6 lg:px-8 w-full">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                <DisclosureButton
                                    className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-white focus:outline-none">
                                    <span className="absolute -inset-0.5"/>
                                    {open ? (
                                        <FaXmark size={20}/>
                                    ) : (
                                        <HiMenu size={20}/>
                                    )}
                                </DisclosureButton>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center pl-8 sm:p-0">
                                    <span className='font-bold text-neutral-400 text:text-gray-400'>dev://</span>
                                    <span className='font-semibold text-neutral-800 dark:text-gray-200'>kewldan</span>
                                </div>
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    pathname === item.href ? 'text-black dark:text-white' : 'text-neutral-500 hover:text-neutral-600 dark:text-neutral-400 dark:hover:text-neutral-300',
                                                    'rounded-md px-3 py-2 text-sm font-medium transition-colors'
                                                )}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <ThemeButton/>
                        </div>
                    </div>

                    <DisclosurePanel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <DisclosureButton
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.href === pathname ? 'text-black dark:text-white' : 'text-neutral-500 hover:text-neutral-600 dark:text-neutral-400 dark:hover:text-neutral-300',
                                        'block rounded-md px-3 py-2 text-base font-medium'
                                    )}
                                >
                                    {item.name}
                                </DisclosureButton>
                            ))}
                        </div>
                    </DisclosurePanel>
                </>
            )}
        </Disclosure>
    )
}
