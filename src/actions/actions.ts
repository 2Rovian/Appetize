"use server";

export async function SubmitLoginForm(formData: FormData){
    
    const username = formData.get('username') as String;
    console.log(username);
}