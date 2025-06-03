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

function Quiz() {

    const vocabularies = useLoaderData() as Word[]

    return (
        <div>
            <Card className="w-full">
                <CardHeader>
                    <CardTitle className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, mollitia?</CardTitle>
                    <CardAction>
                        {vocabularies.map((vocabulary) => (
                           <div>
                                <div>{vocabulary.title}</div>
                                <div>{vocabulary.definition}</div>
                           </div>
                        ))}
                        {/* <Link to={`/word/${word.word_id}/edit`}>
                        <Button variant="link" size="icon" className="size-8">
                            <Edit2 />
                        </Button>
                        </Link> */}
                    </CardAction>
                </CardHeader>
                <CardContent>
                    <CardTitle>Definition</CardTitle>
                    <CardDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, mollitia?</CardDescription>
                    <CardTitle>Examples</CardTitle>
                    <CardDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, mollitia?</CardDescription>
                    
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

export default Quiz
