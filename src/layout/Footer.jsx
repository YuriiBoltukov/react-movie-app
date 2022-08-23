function Footer() {
	const date = new Date().getFullYear();

	return (
		<footer className='page-footer green accent-2'>
			<div className='footer-copyright'>
				<div className='container'>
					© {date} Copyright Text
					<a className='grey-text text-lighten-4 right' href='#!'>
						Repo
					</a>
				</div>
			</div>
		</footer>
	);
}

export { Footer };
