import React from 'react'
import {FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from '@/components/ui/form'
import {Input} from '@/components/ui/input'

type CustomField = {
    control: any;
    name: string;
    label: string;
    placeholder?: string;
    description?: string;
}

function CustomField({control, name, label, placeholder, description}: CustomField) {
    return (
        <FormField
            control={control}
            name={name}
            render={({field}) => (
                <FormItem>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        <Input placeholder={placeholder} type={name === 'password' ? 'password' : 'text'}
                               className="input-class"  {...field} />
                    </FormControl>
                    <FormDescription>
                        {description}
                    </FormDescription>
                    <FormMessage className="form-message mt-2"/>
                </FormItem>
            )}
        />
    )
}

export default CustomField