import React from 'react';
import Link from "next/link";

function Page() {
	return (
		<div className='login-page'>
			Don't have an account?
			<Link href='/auth/signup'>Signup</Link>
		</div>
	);
}

export default Page;