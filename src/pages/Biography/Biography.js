import Container from '../../components/Container';
import Text from '../../components/Text';
import Button from '../../components/Button';
import s from './Biography.module.scss';
import Heading from '../../components/Heading';
import { BIO } from '../../constants/bio';
import { Navigate, useNavigate, useParams } from 'react-router-dom';

const Biography = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	const handleGoBackClick = () => {
		navigate(-1);
	};

	if (!BIO[id]) {
		return <Navigate to={'/characters'} />;
	}

	return (
		<section className={s.root}>
			<Container>
				<Button isBlack onClick={handleGoBackClick}>
					Go Back
				</Button>
				{BIO[id].map((item, index) => {
					switch (item.type) {
						case 'paragraph':
							return (
								<Text key={index} element="p">
									{item.text}
								</Text>
							);
						case 'img':
							return <img key={index} className={s.centeredBlock} src={item.src} alt=" " />;
						case 'h1':
						case 'h2':
						case 'h3':
						case 'h4':
						case 'h5':
						case 'h6':
							return (
								<Heading key={index} className={s.marginTop} level={+item.type.charAt(1)}>
									{item.text}
								</Heading>
							);
						default:
							return <Text element={item.type}>{item.text}</Text>;
					}
				})}
			</Container>
		</section>
	);
};

export default Biography;
