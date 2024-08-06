import React from "react";
import LogicalSystem from "@/app/career/slides/logicalSystem";
import ShopBot from "@/app/career/slides/shopBot";

export default async function Projects() {
    return (
        <div className="flex flex-col items-center w-full px-4">
            <LogicalSystem/>
            <ShopBot/>
        </div>
    )
}