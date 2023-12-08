import { 
	Container, 
	TextContainer, 
	Text, 
	TextAuthor 
} from './Recension.styled'
import dannyCh from '../../../assets/images/response/danny_churchman.png'

function Recension() {
	return (
		<Container>
			<TextContainer>
				<Text>
					"Unbelievable this is a dream come true, no way would I ever think I would own a car like this. What great blokes. Thank you very much! 5 star from me!!!"
				</Text>
				<TextAuthor>
					Danny Churchman
				</TextAuthor>
			</TextContainer>
			<img src={dannyCh} alt="danny churchman" />
		</Container>
	);
}

export default Recension