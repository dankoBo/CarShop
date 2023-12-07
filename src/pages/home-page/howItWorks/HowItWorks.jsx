import { 
	HowItWorksWrapper, 
	HowItWorksTitle, 
	HowItWorksSteps 
} from './HowItWorks.styled'
import HowToStep from "../../../components/howToStep/HowToStep"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'

function HowItWorks() {
	return (
		<HowItWorksWrapper>
			<HowItWorksTitle>
				How it works
			</HowItWorksTitle>
			<HowItWorksSteps>
				<HowToStep
					icon='/src/assets/howItWorksImages/selection.png'
					title='1. Selection of the Car'
					subtitle='We select and offer several car options from US auctions based on your budget and requirements.'
				/>
				<ArrowRightAltIcon fontSize="large" />
				<HowToStep
					icon='/src/assets/howItWorksImages/concluding.png'
					title='2. Concluding the Agreement'
					subtitle='The conclusion of the contract gives the opportunity not to worry about the parties for the fulfillment of their obligations.'
				/>
				<ArrowRightAltIcon fontSize="large" />
				<HowToStep
					icon='/src/assets/howItWorksImages/payment.png'
					title='3. Payment through the Bank'
					subtitle='Payments are made by invoice, SWIFT transfer through the Bank, which guarantees the transparency and formality of the transaction.'
				/>
				<ArrowRightAltIcon fontSize="large" />
				<HowToStep
					icon='/src/assets/howItWorksImages/transfer.png'
					title='4. Car transfer to the customer'
					subtitle='Transfer / Delivery of a car to the happy buyer that saved 35-50% from analogs in Ukraine'
				/>
			</HowItWorksSteps>
		</HowItWorksWrapper>
	);
}

export default HowItWorks