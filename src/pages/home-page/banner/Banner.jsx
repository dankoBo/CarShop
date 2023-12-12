import { 
	Container, 
	TitleWithButton, 
	Title, 
	ImageContainer, 
	TitleRed 
} from './Banner.styled'
import ContainedButton from '../../../components/containedButton/ContainedButton'

function Banner() {
	return (
		<Container>
			<TitleWithButton>
				<Title>
					Could you be our <TitleRed>next winner?</TitleRed>
				</Title>
				<ContainedButton name="Enter now" />
			</TitleWithButton>
			<ImageContainer />
		</Container>
	)
}

export default Banner