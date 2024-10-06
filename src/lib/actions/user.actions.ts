'use server';

import {cookies} from 'next/headers'

export const logoutAccount = async () => {
    try {
        // const { account } = await createSessionClient();

        cookies().delete('appwrite-session')

        // await account.deleteSession('current');

    }
    catch (error) {
        console.error(error)
        return null
    }
}
