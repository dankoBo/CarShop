import { 
	BannerWrapper, 
	TitleWithButton, 
	BannerTitle, 
	BannerImageWrapper, 
	TitleRed 
} from './Banner.styled'
import ContainedButton from '../../../interface/containedButton/ContainedButton'

function Banner() {
	return (
		<BannerWrapper>
			<TitleWithButton>
				<BannerTitle>
					Could you be our <TitleRed>next winner?</TitleRed>
				</BannerTitle>
				<ContainedButton name="Enter now" />
			</TitleWithButton>
			<BannerImageWrapper />
		</BannerWrapper>
	)
}

export default Banner