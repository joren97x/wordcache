import { useLoaderData, Link } from "react-router"
import type { Word } from "@/types/index.ts"
import { useEffect, useState } from "react"
import { CircleCheckBig, CircleX } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

function QuizResults() {

    const cards = [1, 2, 3]
    const [progress, setProgress] = useState(13)
    useEffect(() => {
        const timer = setTimeout(() => setProgress(70), 500)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div>
            <Card className="w-full">
                <CardContent>
                    7/10
                    <br />
                    Your score
                    <Progress value={progress} className="w-[60%]" />
                    70% Correct
                </CardContent>
            </Card>
            <Card className="w-full">
                <CardContent>
                    <CardTitle>
                        Summary
                    </CardTitle>
                    <CardContent>
                        <div className="grid grid-cols-2">
                            <div><CircleCheckBig /> 7 Correct</div>
                            <div><CircleX />3 Wrong</div>
                        </div>
                    </CardContent>
                </CardContent>
            </Card>
            <h1>Detailed Answers</h1>
            <div className="grid">
                {
                    cards.map((card) => (
                        <div>
                            <Card>
                                <CardContent>
                                    {card}
                                </CardContent>
                            </Card>
                        </div>
                    ))
                }
            </div>
            <div className="flex-col gap-2 mt-6">
                <div>
                    <Button type="submit" className="w-full">
                        Retry Quiz
                    </Button>
                </div>
                   <div>
                     <Button variant="outline" className="w-full">
                        Back to Vocabulary List
                    </Button>
                   </div>
            </div>
        </div>
    )
}

export default QuizResults
