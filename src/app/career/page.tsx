import React from "react";
import LogicalSystem from "@/app/career/slides/logicalSystem";
import ShopBot from "@/app/career/slides/shopBot";
import SolverBot from "@/app/career/slides/solverBot";

export default async function Projects() {
    return (
        <div className="flex flex-col items-center w-full px-4 gap-8">
            <div className="space-y-8 max-w-7xl w-full">
                <LogicalSystem/>
                <ShopBot/>
                <SolverBot/>
            </div>
        </div>
    )
}