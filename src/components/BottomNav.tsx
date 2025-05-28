import { BookText, HelpCircle, User } from "lucide-react";
import { Link } from "react-router";
import { useLocation } from "react-router";

const BottomNav = () => {

    const location = useLocation()

    return (
        <div className="fixed bottom-0 w-full bg-white border-t flex justify-around items-center py-2 shadow-md">
            <Link to="/">
                <NavItem icon={<BookText className="w-5 h-5" />} label="Vocabulary" active={location.pathname === "/"} />
            </Link>
            <Link to="/quiz">
                <NavItem icon={<HelpCircle className="w-5 h-5" />} label="Quiz" active={location.pathname === "/quiz"} />
            </Link>
            <Link to="/profile">
                <NavItem icon={<User className="w-5 h-5" />} label="Profile" active={location.pathname === "/profile"} />
            </Link>
        </div>
    );
};

interface NavItemProps {
    icon: React.ReactNode;
    label: string;
    active?: boolean;
}

const NavItem = ({ icon, label, active = false }: NavItemProps) => {
    return (
        <div className="flex flex-col items-center text-sm">
            <div className={`text-center ${active ? "text-indigo-600" : "text-gray-600"}`}>
                {icon}
            </div>
            <span className={`mt-1 ${active ? "text-indigo-600 font-medium" : "text-gray-600"}`}>
                {label}
            </span>
        </div>
    );
};

export default BottomNav;
