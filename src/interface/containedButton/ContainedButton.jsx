import { ButtonStyled } from './ContainedButton.styled'

function ContainedButton(props) {
	return (
			<ButtonStyled type='submit' background={props.background} variant='contained'>
				{props.name}
			</ButtonStyled>
	)
}

export default ContainedButton