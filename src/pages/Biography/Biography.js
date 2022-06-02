import Container from '../../components/Container';
import Text from '../../components/Text';
import Button from '../../components/Button';
import s from './Biography.module.scss';
import Heading from '../../components/Heading';
import { BIO } from '../../constants/bio';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { ReactComponent as Anchor } from '../../assets/anchor.svg';

const Biography = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	const handleGoBackClick = () => {
		navigate(-1);
	};

	const handleAnchorClick = (title) => {
		const link = window.location.origin + window.location.pathname + '#' + title;
		navigator.clipboard.writeText(link);
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
							return (
								<Heading key={index} className={s.marginTop} level={+item.type.charAt(1)}>
									{item.text}
								</Heading>
							);
						case 'h2':
						case 'h3':
						case 'h4':
						case 'h5':
						case 'h6':
							return (
								<div key={index} className={s.heading}>
									<Heading
										id={item.text.replaceAll(/[\W\s]+/g, '_')}
										className={s.marginTop}
										level={+item.type.charAt(1)}
									>
										{item.text}
									</Heading>
									<Anchor
										className={s.anchor}
										onClick={() => handleAnchorClick(item.text.replaceAll(/[\W\s]+/g, '_'))}
									/>
								</div>
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
