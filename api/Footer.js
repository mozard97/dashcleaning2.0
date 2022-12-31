import { LocationMarkerIcon, MailIcon, PhoneIcon, UserCircleIcon, UserGroupIcon } from "@heroicons/react/outline";
import { ArrowRightOnRectangleIcon, LinkIcon } from "heroicons2/24/outline";

export const navigation = {
    contactus: [
        { name: ' Florida', href: '#', icon: LocationMarkerIcon },
        { name: '(352)306-4415', href: '#', icon: PhoneIcon },
        { name: 'support@marvcleaning.com', href: '#', icon: MailIcon },
    ],
    account: [
        { name: 'Sign in', href: '#', icon: ArrowRightOnRectangleIcon },
    ],
    company: [
        { name: 'About us', href: '/about', icon: UserGroupIcon },
    ],
    resources: [
        { name: 'Safety Privacy & Terms', href: '#', icon: LinkIcon },
    ],
}
