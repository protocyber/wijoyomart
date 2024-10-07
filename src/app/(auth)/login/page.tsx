'use client'

import React, {useContext} from 'react'
import {Button} from '@/components/ui/button'
import Image from 'next/image'
import {z} from 'zod'
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import {Form} from '@/components/ui/form'
import CustomField from '@/components/CustomField'
import {authFormSchema} from '@/lib/utils'
import {signInWithEmailAndPassword} from '@firebase/auth'
import {auth} from '@/lib/firebase'
import {useRouter} from 'next/navigation'
import FirebaseContext from '@/app/FirebaseContext'


const Login = () => {

    const formSchema = authFormSchema('sign-in')

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    })
    const router = useRouter()
    const {setUser} = useContext(FirebaseContext)

    async function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        // console.log(values)
        const {email, password} = values

        try {
            await signInWithEmailAndPassword(auth, email, password).then(userCredential => {
                setUser(userCredential.user)
                router.push('/')
            })
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm text-center">
                <div className="rounded-full bg-white p-2 mx-auto inline-block">
                    <Image
                        priority
                        className="rounded-full"
                        src="/images/logo.png"
                        alt="Wijoyo Mart"
                        width={128}
                        height={128}
                    />
                </div>
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-300">
                    Sign in to your account
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <Form {...form}>
                    <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
                        <CustomField control={form.control} name="email" label="Email" placeholder="Email"/>
                        <CustomField control={form.control} name="password" label="Password" placeholder="Password"/>
                        <div>
                            <Button type="submit" className="w-full form-btn">Sign in</Button>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    )
}

export default Login
