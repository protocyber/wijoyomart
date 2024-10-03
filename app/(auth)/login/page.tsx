import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import tailwindLogo from '@/public/images/tailwind-mark.svg'

const Login = () => {
	return (
		<div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
			<div className="sm:mx-auto sm:w-full sm:max-w-sm">
				<Image
					className="mx-auto h-10 w-auto"
					src={tailwindLogo}
					alt="Wijoyo Mart"
                    height={10}
				/>
				<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
					Sign in to your account
				</h2>
			</div>

			<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
				<form className="space-y-6" action="#" method="POST">
					<div>
						<Input type="email" placeholder="Email address" />
					</div>

					<div>
						<div className="flex items-center justify-between">
							<div></div>
							<div className="text-sm">
								<a
									href="#"
									className="font-semibold text-indigo-600 hover:text-indigo-500"
								>
									Forgot password?
								</a>
							</div>
						</div>
						<div className="mt-2">
							<Input type="password" placeholder="Password" />
						</div>
					</div>

					<div>
						<Button type="submit" className="w-full">Sign in</Button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
