import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Edit2 } from "lucide-react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardTitle,
    CardHeader,
    CardAction
} from "@/components/ui/card"

function Profile() {

    const categories = ["category 1", "category 2", "category 3"]

    return (
        <div>
            <Card className="w-full">
                 <CardHeader className="justify-center">
                    <Avatar className="size-20">
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="text-xl">John Doe</div>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, molestias.</div>
                    <Button>Edit Profile</Button>
                </CardHeader>
                <CardContent>
                    <div className="text-xl">Learning Progress</div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="col-span-2">
                            <Card className="w-full">
                                <CardContent className="justify-center">
                                    <div>Learning Progress</div>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="col-span-1">
                            <Card className="w-full">
                                <CardContent className="justify-center">
                                    <div>Learning Progress</div>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="col-span-1">
                            <Card className="w-full">
                                <CardContent className="justify-center">
                                    <div>Learning Progress</div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                    <div className="text-xl">Vocabulary Categories</div>
                    <div className="grid grid-cols-2 gap-4">
                        {
                            categories.map((category, index) => (
                                <div className="col-span-2" key={index}>
                                    <Card className="w-full">
                                        <CardContent className="justify-center">
                                            <div>{category}</div>
                                        </CardContent>
                                    </Card>
                                </div>
                            ))
                        }
                        
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default Profile
