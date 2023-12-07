import { LatestArticlesWrapper, LatestArticleTitle, LatestArticlesContainer } from './LatestArticles.styled'
import LatestCarCard from '../../../components/latestCarCard/LatestCarCard';
import { latestCarsData } from '../../../data/carsData'

function LatestArticles() {
	return (
		<LatestArticlesWrapper>
			<LatestArticleTitle>Latest articles</LatestArticleTitle>
			<LatestArticlesContainer>
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
			</LatestArticlesContainer>
		</LatestArticlesWrapper>
	);
}

export default LatestArticles;