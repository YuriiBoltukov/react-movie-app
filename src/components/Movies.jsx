import { Card } from './Card';

function Movies(props) {
	const { movies } = props;
	return (
		<div className='movies'>
			{movies.length ? (
				movies.map(movie => {
					return <Card key={Card.imdbID} {...movie} />;
				})
			) : (
				<h4>Nothing found...</h4>
			)}
		</div>
	);
}
export { Movies };
