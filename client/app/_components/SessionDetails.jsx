"use client";

import { useSession } from "next-auth/react";

export default function SessionDetails() {

    const { data: session, status } = useSession();

    return (
        <div>
            {session && <p>{session.user.email}</p>}
        </div>
    )
}