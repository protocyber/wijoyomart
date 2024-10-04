'use client'

import React from 'react'
import {Button} from '@/components/ui/button'
import Image from 'next/image'
import logo from '@/public/images/wijoyomart.png'

import {z} from 'zod'
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import {Form} from '@/components/ui/form'
import CustomField from '@/components/CustomField'
import {authFormSchema} from '@/lib/utils'


const Login = () => {

    const formSchema = authFormSchema('sign-in')

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm text-center">
                <div className="rounded-full bg-white p-2 mx-auto w-auto inline-block">
                    <Image
                        className="h-128 w-auto rounded-full"
                        src={logo}
                        alt="Wijoyo Mart"
                        height={128}
                        width={128}
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
