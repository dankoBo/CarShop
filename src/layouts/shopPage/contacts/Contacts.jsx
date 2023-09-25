import { ContactsWrapper, TitleStyled, ContactContainerStyled, ContactInfoStyled, ContactWordStyled } from './ContactsStyled'
import PhonelinkRingIcon from '@mui/icons-material/PhonelinkRing';
import DraftsIcon from '@mui/icons-material/Drafts';
import AddHomeIcon from '@mui/icons-material/AddHome';

function Contacts() {
	return (
		<ContactsWrapper>
			<TitleStyled>Contacts Details</TitleStyled>
			<ContactContainerStyled>
				<PhonelinkRingIcon />
				<ContactInfoStyled>
					<ContactWordStyled>Phone:</ContactWordStyled> 879-332-9375
				</ContactInfoStyled>
			</ContactContainerStyled>
			<ContactContainerStyled>
				<DraftsIcon />
				<ContactInfoStyled>
					<ContactWordStyled>Email:</ContactWordStyled> info@pixsellz.io
				</ContactInfoStyled>
			</ContactContainerStyled>
			<ContactContainerStyled>
				<AddHomeIcon />
				<ContactInfoStyled>
					<ContactWordStyled>Adress:</ContactWordStyled> 456 Hagenes Gardens Suite 808
				</ContactInfoStyled>
			</ContactContainerStyled>
		</ContactsWrapper>
	);
}

export default Contacts;