import { Card } from './Card';

function Movies(props) {
	const { movies } = props;
	return (
		<div className='movies'>
			{movies.map(movie => {
				return <Card key={Card.imdbID} {...movie} />;
			})}
		</div>
	);
}
export { Movies };
