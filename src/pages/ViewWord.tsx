import { useLoaderData, Link } from "react-router"
import type { Word } from "@/types/index.ts"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Edit2 } from "lucide-react"

function ViewWord() {

    const word = useLoaderData() as Word

    return (
        <div>
            <Card className="w-full">
                <CardHeader>
                    <CardTitle className="text-xl">{word.title}</CardTitle>
                    <CardAction>
                        <Link to={`/word/${word.word_id}/edit`}>
                        <Button variant="link" size="icon" className="size-8">
                            <Edit2 />
                        </Button>
                        </Link>
                    </CardAction>
                </CardHeader>
                <CardContent>
                    <CardTitle>Definition</CardTitle>
                    <CardDescription>{word.definition}</CardDescription>
                    <CardTitle>Examples</CardTitle>
                    <CardDescription>{word.examples}</CardDescription>
                    
                </CardContent>
                {/* <CardFooter className="flex-col gap-2">
                    <Button type="submit" className="w-full">
                        Login
                    </Button>
                    <Button variant="outline" className="w-full">
                        Login with Google
                    </Button>
                </CardFooter> */}
            </Card>
        </div>
    )
}

export default ViewWord
