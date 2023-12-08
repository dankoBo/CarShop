import { 
	Container, 
	Title, 
	StepsContainer 
} from './HowItWorks.styled'
import Step from './step/Step'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'

function HowItWorks() {
	return (
		<Container>
			<Title>
				How it works
			</Title>
			<StepsContainer>
				<Step
					icon='/src/assets/images/howItWorks/selection.png'
					title='1. Selection of the Car'
					subtitle='We select and offer several car options from US auctions based on your budget and requirements.'
				/>
				<ArrowRightAltIcon fontSize="large" />
				<Step
					icon='/src/assets/images/howItWorks/concluding.png'
					title='2. Concluding the Agreement'
					subtitle='The conclusion of the contract gives the opportunity not to worry about the parties for the fulfillment of their obligations.'
				/>
				<ArrowRightAltIcon fontSize="large" />
				<Step
					icon='/src/assets/images/howItWorks/payment.png'
					title='3. Payment through the Bank'
					subtitle='Payments are made by invoice, SWIFT transfer through the Bank, which guarantees the transparency and formality of the transaction.'
				/>
				<ArrowRightAltIcon fontSize="large" />
				<Step
					icon='/src/assets/images/howItWorks/transfer.png'
					title='4. Car transfer to the customer'
					subtitle='Transfer / Delivery of a car to the happy buyer that saved 35-50% from analogs in Ukraine'
				/>
			</StepsContainer>
		</Container>
	);
}

export default HowItWorks