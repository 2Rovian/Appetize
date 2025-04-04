"use server";
import { signIn, signOut } from "@/auth";

export async function SubmitLoginForm(formData: FormData) {

    const username = formData.get('username') as String;
    console.log(username);
}

export async function signInWithGoogle() {
    await signIn("google");
}

export async function signInWithGithub() {
    await signIn("github");
}

export async function signInWithTwitter() {
    await signIn("twitter");
}

// export async function logout(){
//     await signOut();
// }