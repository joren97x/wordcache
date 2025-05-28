import { useState } from "react";
const categories = ["All", "Programming", "English", "Food", "General", "Brain Rot"];
import Chip from "./ui/chip";

export default function ChipFilter() {

    const [selected, setSelected] = useState("All");

    return (
        <div className="py-4">
            <div className="flex gap-2 overflow-x-auto scrollbar-hide whitespace-nowrap">
                {categories.map((category) => (
                    <Chip key={category} label={category} active={selected === category} onClick={() => setSelected(category)}/>
                ))}
            </div>
        </div>
    )

}

