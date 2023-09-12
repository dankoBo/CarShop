import { RecensionWrapper, RecensionTextContainer, RecensionText, RecensionTextAuthor } from './RecensionStyled'
import dannyCh from '../../../assets/responseImages/danny_churchman.png'

function Recension() {
	return (
		<RecensionWrapper>
			<RecensionTextContainer>
				<RecensionText>
					"Unbelievable this is a dream come true, no way would I ever think I would own a car like this. What great blokes. Thank you very much! 5 star from me!!!"
				</RecensionText>
				<RecensionTextAuthor>
					Danny Churchman
				</RecensionTextAuthor>
			</RecensionTextContainer>
			<img src={dannyCh} alt="danny churchman" />
		</RecensionWrapper>
	);
}

export default Recension;