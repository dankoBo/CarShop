import LatestCarCard from '../../../components/latestCarCard/LatestCarCard';
import { latestCarsData } from '../../../dataBase/carsData'
import { LatestArticlesWrapper, LatestArticleTitle, LatestArticlesContainer } from './LatestArticlesStyled'

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
						))
				}
			</LatestArticlesContainer>
		</LatestArticlesWrapper>
	);
}

export default LatestArticles;