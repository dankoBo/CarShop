import { HowToStepWrapper, HowToStepTitle, HowToStepSubtitle } from './HowToStepStyled'

function HowToStep(props) {
	return (
		<HowToStepWrapper>
			<div>
				<img src={props.icon} alt="icon" />
			</div>
			<HowToStepTitle>{props.title}</HowToStepTitle>
			<HowToStepSubtitle>{props.subtitle}</HowToStepSubtitle>
		</HowToStepWrapper>
	);
}

export default HowToStep;