'use client'

import React, {useState} from 'react'
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


const Login = () => {

    const formSchema = authFormSchema('sign-in')

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    })
    const [error, setError] = useState('')
    const router = useRouter()


    const handleLogin = async (values: z.infer<typeof formSchema>) => {
        setError("")

        const {email, password} = values
        try {
            await signInWithEmailAndPassword(auth, email, password)
            router.push("/")
        } catch (err) {
            setError((err as Error).message)
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
                {error && (
                    <div className="bg-red-100 text-red-700 p-3 rounded mb-4 text-sm dark:bg-red-900 dark:text-red-300">
                        {error}
                    </div>
                )}
                <Form {...form}>
                    <form className="space-y-6" onSubmit={form.handleSubmit(handleLogin)}>
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
