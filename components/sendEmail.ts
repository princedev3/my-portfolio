"use server"
import { Resend } from "resend"


const resend = new Resend(process.env.RESEND)


const validateString = (value:unknown,maxlength:number)=>{
    if(!value || typeof value !== "string"||value.length >maxlength){
        return false
    }

    return true
}


export const  sendEmail = async (formData:FormData)=>{

     const sender = formData.get("senderEmail")
    const message = formData.get("message")
if(!validateString(sender,50)){
    return {
        error: "invalid sender email"
    }
}
    
if(!validateString(message,5000)){
    return {
        error: "invalid message"
    }
}
  
   
  try {
    resend.emails.send({
        from:'Contact Form<onboarding@resend.dev>',
        to:'marvinprince232@gmail.com',
        subject:'message from ', 
        reply_to: sender as string,
        text: message as string,
      

    })
   
  } catch (error:any) {
    return {
        error:error.message
    }
  }
}