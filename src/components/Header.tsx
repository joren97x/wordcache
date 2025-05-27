import { Outlet } from "react-router"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"


const Header = () => {
    return (
        <>
            <div className="flex justify-between py-2">
                <div>
                    <Link to="/home">
                        <Button variant="ghost" size="icon">
                            <ChevronLeft />
                        </Button>
                    </Link>
                </div>
                <div>
                    <div className="text-center text-xl font-bold">
                        Header typeshit
                    </div>
                </div>
                <div>
                    <Link to="/profile">
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </Link>
                </div>
            </div>
            <hr />
            <Outlet />

            <div className="absolute bottom-0 red-800">
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <Button>Getting started</Button>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                    </NavigationMenu>
            </div>

        </>
    )
}

export default Header