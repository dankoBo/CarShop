import { Container, HowToStepTitle, HowToStepSubtitle } from './HowToStep.styled'

function HowToStep(props) {
	return (
		<Container>
			<div>
				<img src={props.icon} alt="icon" />
			</div>
			<HowToStepTitle>{props.title}</HowToStepTitle>
			<HowToStepSubtitle>{props.subtitle}</HowToStepSubtitle>
		</Container>
	);
}

export default HowToStep;