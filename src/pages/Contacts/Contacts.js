import Container from '../../components/Container';
import Heading from '../../components/Heading';
import Text from '../../components/Text';
import s from './Contacts.module.scss';
import me from './../../assets/me.jpeg';

const Contacts = () => {
	return (
		<section className={s.root}>
			<Container>
				<Heading level={1} backLine>
					Contacts
				</Heading>
				<img src={me} alt="Lena" className={s.contactsPic} />
				<Text element="p" className={s.gap}>
					That's me, Lena.
				</Text>
				<Text element="p">
					That's me on Twitter: <a href="twitter.com/metalwebdev">@metalwebdev</a>
				</Text>
			</Container>
		</section>
	);
};

export default Contacts;
