import React from "react";
import LogicalSystem from "@/app/indie/slides/logicalSystem";
import ShopBot from "@/app/indie/slides/shopBot";
import SolverBot from "@/app/indie/slides/solverBot";

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