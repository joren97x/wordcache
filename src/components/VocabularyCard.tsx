import Chip from "./ui/chip"
import { cn } from "@/lib/utils"
import {
    Card,
    CardContent,
} from "@/components/ui/card"
type Word = {
  id: number;
  word: string;
  definition: string;
  examples: string;
};
type CardProps = React.ComponentProps<typeof Card>

interface VocabularyCardProps extends CardProps {
    word: Word
}

export default function VocabularyCard({ className, word,...props }: VocabularyCardProps) {
    return (
        <Card className={cn("w-[100%] my-3", className)} {...props}>
            <CardContent className="grid">
                <div className=" flex items-center space-x-4 rounded-md">
                    <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">
                            {word.word}
                        </p>
                        <p className="text-sm text-muted-foreground">
                            {word.definition}
                        </p>
                    </div>
                    <Chip label="General" />
                </div>
            </CardContent>
        </Card>
    )
}
