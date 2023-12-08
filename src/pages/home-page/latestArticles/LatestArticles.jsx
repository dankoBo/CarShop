import { 
	Container, 
	Title, 
	CardsContainer 
} from './LatestArticles.styled'
import LatestCarCard from './latestCarCard/LatestCarCard';
import { latestCarsData } from '../../../data/carsData'

function LatestArticles() {
	return (
		<Container>
			<Title>Latest articles</Title>
			<CardsContainer>
				{
					latestCarsData.map(car => (
							<LatestCarCard 
								key={car.id}
								photo={car.photo}
								brand={car.brand}
								date={car.date}
							/>
						)
					)
				}
			</CardsContainer>
		</Container>
	);
}

export default LatestArticles;