import { 
	Container, 
	Title, 
	Subtitle 
} from './Step.styled'

function Step(props) {
	return (
		<Container>
			<div>
				<img src={props.icon} alt="icon" />
			</div>
			<Title>{props.title}</Title>
			<Subtitle>{props.subtitle}</Subtitle>
		</Container>
	);
}

export default Step;