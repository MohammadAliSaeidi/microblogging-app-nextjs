import Link from "next/link";

function Page() {
	return (
		<div className='login-page'>
			Already have an account?
			<Link href='/auth/login'>Login</Link>
		</div>
	);
}

export default Page;