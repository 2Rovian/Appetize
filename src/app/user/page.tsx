import { auth ,signIn, signOut } from "@/auth"
import UserComponent from "./UserComponent";

export default async function User_Page() {
    const session = await auth();
    const userName = session?.user?.name;
    const profilePic = session?.user?.image;

    console.log(session)
    return (
        <div className="flex justify-center">
            {userName ?
                (   
                    <UserComponent userName={userName} profilePic={profilePic}/>
                    
                )
                :
                (
                <div>
                    <p>this is the userpage</p>

                </div>
                )}

        </div>
    )
}