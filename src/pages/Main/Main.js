import { useState } from 'react';
import Container from '../../components/Container';
import Slider from '../../components/Slider';
import Heading from '../../components/Heading';
import CharacterCard from '../../components/CharacterCard';
import { CHARACTERS } from '../../constants/characters';
import s from './Main.module.scss';

const Main = () => {
	const [characters, setCharacters] = useState(CHARACTERS);

	const handleLikeClick = (id) => {
		setCharacters((prevState) =>
			prevState.map((hero) => {
				if (hero.id === id) {
					return {
						...hero,
						isLike: !hero.isLike,
					};
				}
				return hero;
			})
		);
	};

	return (
		<>
			<Slider />
			<section className={s.cardsBlock}>
				<Container>
					<div className={s.cardTitle}>
						<Heading backLine>Marvel Cards</Heading>
						<Heading level={2}>Collect your best five</Heading>
					</div>
					<div className={s.cardWrap}>
						{characters.map((item) => {
							return (
								<CharacterCard
									id={item.id}
									name={item.name}
									src={item.thumbnail.path}
									description={item.description}
									humanName={item.humanName}
									key={item.id}
									isLike={item.isLike}
									onLikeClick={handleLikeClick}
								/>
							);
						})}
					</div>
				</Container>
			</section>
		</>
	);
};

export default Main;
