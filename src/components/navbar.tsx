import React from 'react'
import ThemeButton from "@/components/themeToggle";
import I18nSwitch from "@/components/i18nSwitch";
import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import {Button} from "@/components/ui/button";
import {Menu} from "lucide-react";
import NavbarLink, {NavItem} from "@/components/navbar-link";

const navigation: NavItem[] = [
    {name: 'home', href: '/'},
    {name: 'indie', href: '/indie'},
    {name: 'business', href: '/business'},
    {name: 'market', href: '/market'},
]

export default function Navbar() {
    return (
        <nav className="w-full border-b-[1px] bg-background flex justify-center">
            <div className="flex justify-between items-center h-full max-w-7xl w-full py-4 px-4">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button className="shrink-0 flex sm:hidden" size="icon" variant="outline">
                            <Menu/>
                        </Button>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle></SheetTitle>
                            <SheetDescription></SheetDescription>
                        </SheetHeader>
                        <div className="flex flex-col items-start gap-4 text-md font-medium">
                            {navigation.map(item => (
                                <NavbarLink item={item} key={item.href}/>
                            ))}
                        </div>
                    </SheetContent>
                </Sheet>
                <div className="w-full flex items-center justify-between">
                    <div className="text-xl font-bold space-x-0.5">
                        <span className="text-muted-foreground font-light">dev://</span>
                        <span>kewldan</span>
                    </div>
                    <div className="gap-4 text-md font-medium hidden sm:flex">
                        {
                            navigation.map(item => (
                                <NavbarLink item={item} key={item.href}/>
                            ))
                        }
                    </div>
                    <div className="flex gap-2 items-center">
                        <I18nSwitch/>
                        <ThemeButton/>
                    </div>
                </div>
            </div>
        </nav>
    )
}
