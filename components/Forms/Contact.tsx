

import { ContactTypes } from "@/types/contact";
import { z } from "zod";
import { useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod"
import {useEffect, useState} from "react";
import { Turnstile } from "nextjs-turnstile";


type ContactFormData = z.infer<typeof ContactTypes>
const ContactForm = ({onClose}) => {
    const {register, handleSubmit, formState: {errors, isSubmitting}} = useForm(
        {
            resolver: zodResolver(ContactTypes), defaultValues: {
                name: '',
                email: '',
                phone: '',
                message: ''
            },
        }
    )
    const [success, setSuccess] = useState<boolean>(false)
    const [makeFormValid, setMakeFormValid] = useState<boolean>(false)
    const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
    const verifyToken = async () => {
        try {
            await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {method: "POST", body: JSON.stringify({turnstileToken})})
            setMakeFormValid(true)

        } catch (error) {
            console.error(error)
            setMakeFormValid(false)
        }
    }
    useEffect(() => {
        if(success) {
            setTimeout(() => onClose, 2000)
        }

    }, [success]);
    const [successData, setSuccessData] = useState<ContactFormData>()

    const onSubmit = async (values: ContactFormData) => {
        try {
             await fetch("/api/contact/post", {method: "POST", body: JSON.stringify(values)})
             setSuccessData(values)
             setSuccess(true);
        } catch(error) {
            console.log(error)
        }
    }
    if(success) {
        return (
            <>
                <div className="flex justify-center flex-col items-center">
                    <div className="text-center">
                        <div>
                            Welcome {successData?.name}.
                        </div>
                        <div className="my-4">
                            We received your following data
                            <ul className="text-left mt-3">
                                <li>
                                    Email :{successData?.email}
                                </li>
                                <li>
                                    Phone: {successData?.phone}
                                </li>
                            </ul>

                        </div>
                    </div>
                    <div className="text-center">
                        Our customer care will reach out you soon.
                        <br/>
                        Waiting to talk with you.
                    </div>

                </div>
            </>
        )
    }
    return (
        <>
            <div className="mb-3">
                Please provide us your basic information and we will get back to you ASAP.
                Let's build something together...
            </div>
           <form onSubmit={handleSubmit(onSubmit)}>
               <div className="grid grid-cols-12 gap-6">
                   <div className="col-span-12">
                       <div className="pb-2 text-sm" >Your Full name</div>
                       <input className="border p-2 w-full rounded-lg" {...register('name')} type="text"/>
                       <div className="text-sm text-red-500">
                           { errors?.name?.message}
                       </div>
                   </div>
                   <div className="col-span-12">
                       <div className="pb-2 text-sm" >Email</div>
                       <input className="border p-2 w-full rounded-lg" {...register('email')} type="text"/>
                      <div className="text-sm text-red-500">
                          { errors?.email?.message}
                      </div>
                   </div>
                   <div className="col-span-12">
                       <div className="pb-2 text-sm" >Phone Number</div>
                       <input className="border p-2 w-full rounded-lg" {...register('phone')} type="number"/>
                       <div className="text-sm text-red-500">
                           { errors?.phone?.message}
                       </div>
                   </div>
                   <div className="col-span-12">
                       <div className="pb-2 text-sm" >Message</div>
                       <textarea className="border p-2 w-full rounded-lg" {...register('message')} />
                       <div className="text-sm text-red-500">
                           { errors?.message?.message}
                       </div>
                   </div>
               </div>
               <div className="col-span-12">
                   {/*<Turnstile*/}
                   {/*    sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}*/}
                   {/*    onSuccess={(token) => setTurnstileToken(token)}*/}
                   {/*/>*/}
               </div>
               <div className="col-span-12 mt-4">
                   <button className="w-full cursor-pointer bg-primary text-white rounded py-3" onClick={() => onSubmit}>{isSubmitting ? 'Loading...' : 'Submit'}</button>

               </div>

           </form>


        </>
    )
}

export default ContactForm
