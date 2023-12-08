import { 
	Container, 
	Title, 
	ContactContainer, 
	ContactInfo, 
	ContactWord 
} from './ContactsStyled'

import PhonelinkRingIcon from '@mui/icons-material/PhonelinkRing';
import DraftsIcon from '@mui/icons-material/Drafts';
import AddHomeIcon from '@mui/icons-material/AddHome';

function Contacts() {
	return (
		<Container>
			<Title>Contacts Details</Title>
			<ContactContainer>
				<PhonelinkRingIcon />
				<ContactInfo>
					<ContactWord>Phone:</ContactWord> 879-332-9375
				</ContactInfo>
			</ContactContainer>
			<ContactContainer>
				<DraftsIcon />
				<ContactInfo>
					<ContactWord>Email:</ContactWord> info@pixsellz.io
				</ContactInfo>
			</ContactContainer>
			<ContactContainer>
				<AddHomeIcon />
				<ContactInfo>
					<ContactWord>Adress:</ContactWord> 456 Hagenes Gardens Suite 808
				</ContactInfo>
			</ContactContainer>
		</Container>
	);
}

export default Contacts;