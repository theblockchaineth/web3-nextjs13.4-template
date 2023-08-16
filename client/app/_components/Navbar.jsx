"use client"

import { Web3Button } from "@web3modal/react"
import { UserCircleIcon, HomeModernIcon, PlusIcon, CheckIcon, QueueListIcon, BookOpenIcon, InformationCircleIcon, QuestionMarkCircleIcon, LinkIcon } from '@heroicons/react/24/solid'
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { signOut } from "next-auth/react";
import { useAccount } from 'wagmi'

const leftNavigationMenu = [
    {
        name: "Home",
        href: "/",
        icon: <HomeModernIcon className="h-5 mr-2"/>
    },
    {
        name: "Mint",
        href: "/mint",
        icon: <PlusIcon className="h-5 mr-2" />
    },
    {
        name: "Allowlist",
        href: "/allowlist",
        icon: <CheckIcon className="h-5 mr-2" />
    },
    {
        name: "Collection",
        href: "/collection",
        icon: <QueueListIcon className="h-5 mr-2" />
    },
    {
        name: "Lore",
        href: "/lore",
        icon: <BookOpenIcon className="h-5 mr-2" />
    },
    {
        name: "About",
        href: "/about",
        icon: <InformationCircleIcon className="h-5 mr-2" />
    },
    {
        name: "FAQ",
        href: "/faq",
        icon: <QuestionMarkCircleIcon className="h-5 mr-2" />
    },
    {
        name: "Socials",
        href: "/socials",
        icon: <LinkIcon className="h-5 mr-2" />
    }
]

export default function Navbar() {

    const pathname = usePathname();
    const { status  } = useSession();
    const { address } = useAccount();

    return (
        <div className="mx-auto flex items-center justify-between navbar bg-base-100 sticky top-0 z-50 opacity-100 shadow-xl shadow-zinc-600/30">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52">
                        {leftNavigationMenu.map((item, index) => (
                                <li key={index}>
                                    <a href={item.href}>
                                        {item.icon}
                                        {item.name}
                                    </a>  
                                </li>
                            )
                        )
                        }
                    </ul>
                </div>
            </div>
            <div className="btn btn-ghost navbar-center">
                <a href={"/"} className="normal-case text-2xl tracking-wider font-marker">The Pariah</a>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle p-2">
                        <UserCircleIcon />
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52">
                        <li><a>My Profile</a></li>
                        <li><a>My Tokens</a></li>
                        <hr className="my-3"/>
                        <div className="text-gray-500 ml-3 my-1 mr-2 ">
                            <p>Services:</p>
                            {status === "unauthenticated" && <a className="my-4 w-full bg-pink-600 text-white hover:opacity-70 inline-flex items-center rounded-md disabled:outline hover:disabled:opacity-100 px-3 py-2 text-sm font-semibold shadow-sm" href={`/siwe?redirect=${pathname}`}>Sign In</a>}
                            {status === "authenticated" && <button className="my-4 w-full bg-red-600 text-white hover:opacity-70 inline-flex items-center rounded-md disabled:outline hover:disabled:opacity-100 px-3 py-2 text-sm font-semibold shadow-sm" onClick={() => signOut({redirect: true, callbackUrl: pathname})}>Sign Out</button>}
                        </div>
                        <hr className="my-3"/>
                        <div className="text-gray-500 ml-3 my-1">
                            <p>Wallet:</p>
                        </div>
                        <div className="ml-3 mt-2 mb-6">
                            <Web3Button />
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}