function Card(props) {
	const {
		Title: title,
		Year: year,
		imdbID: id,
		Type: type,
		Poster: poster,
	} = props;
	return (
		<div className='row card movie' id={id}>
			<div className='col s12 m7'>
				<div className='card-content'>
					<div className='card-image'>
						{poster === 'N/A' ? (
							<img
								src={`https://via.placeholder.com/300x500?text=${title}`}
								alt='img'
							/>
						) : (
							<img src={poster} alt='img' />
						)}
					</div>
					<div className='card-context'>
						<span className='card-title'>{title}</span>
						<p>
							{year}
							<span className='right'>{type}</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export { Card };
