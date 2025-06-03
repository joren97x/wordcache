import { useLoaderData, Link } from "react-router"
import type { Word } from "@/types/index.ts"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardTitle,
} from "@/components/ui/card"

function EditWord() {

    const word = useLoaderData() as Word

    return (
        <div>
            <Card className="w-full">
                
                <CardContent>
                     <CardTitle>Word Title</CardTitle>
                    {/* <CardDescription>{word.title}</CardDescription> */}
                    <Input placeholder="Type your message here." />
                    <CardTitle>Definition</CardTitle>
                    <Textarea placeholder="Type your message here." />
                    <CardTitle>Examples</CardTitle>
                    <Textarea placeholder="Type your message here." />
                    
                </CardContent>
                <CardFooter className="flex-col gap-2">
                    <Button type="submit" className="w-full">
                        Save changes
                    </Button>
                    <Button variant="outline" className="w-full">
                        Delete vocabulary
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}

export default EditWord
