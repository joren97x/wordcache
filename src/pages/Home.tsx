import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import ChipFilter from "@/components/ChipFilter"
import VocabularyCard from '@/components/VocabularyCard.tsx'
import { Link } from "react-router"

function Home() {

    const words = [
        { id: 1, title: 'Item 1', definition: "lorem ipsum", examples: "1 umm yeah, 2 for real doe" },
        { id: 2, title: 'Item 2', definition: "lorem ipsum", examples: "1 umm yeah, 2 for real doe" },
        { id: 3, title: 'Item 3', definition: "lorem ipsum", examples: "1 umm yeah, 2 for real doe" },
    ];

    return (
        <div>
            <div className="relative w-full ">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
                <Input
                    type="text"
                    placeholder="Search vocabulary..."
                    className="pl-10"
                />
            </div>
            <ChipFilter />
            <Button className="w-full bg-indigo-500" size="lg">Start a quiz</Button>
            <div className="text-xl font-bold py-2">All Vocabulary</div>
            <div>
                {words.map((word) => (
                    <Link to={`/word/${word.id}`}>
                        <VocabularyCard word={word} key={word.id} />
                    </Link>
                ))
                }

            </div>
        </div>
    )
}

export default Home
