import { BannerWrapper, TitleWithButtonStyled, BannerTitleStyled, BannerImageWrapper, TitleRed } from './BannerStyled'
import ContainedButton from '../../../interface/containedButton/ContainedButton'

function Banner() {
	return (
		<BannerWrapper>
			<TitleWithButtonStyled>
				<BannerTitleStyled>
					Could you be our <TitleRed>next winner?</TitleRed>
				</BannerTitleStyled>
				<ContainedButton name="Enter now" />
			</TitleWithButtonStyled>
			<BannerImageWrapper />
		</BannerWrapper>
	);
}

export default Banner;