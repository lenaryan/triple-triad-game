import PropTypes from 'prop-types';
import cn from 'classnames';
import Heading from '../Heading';
import Text from '../Text';
import s from './CharacterCard.module.scss';
import { ReactComponent as Like } from './assets/heart.svg';
import { Link } from 'react-router-dom';

const CharacterCard = ({ id, name, src, humanName, description, isLike, onLikeClick }) => {
	const handleClick = () => {
		onLikeClick(id);
	};

	return (
		<div className={s.root}>
			<img src={src} alt={name} className={s.cardImage} />
			<div className={s.cardDetails}>
				<Heading level={2} className={s.cardName}>
					{name}
				</Heading>
				<Heading level={4} className={s.cardHumanName}>
					{humanName}
				</Heading>
				<Text element="p" className={s.cardDescription}>
					{description}
				</Text>

				<div className={s.cardMeta}>
					<div
						onClick={handleClick}
						className={cn(s.like, {
							[s.active]: isLike,
						})}
					>
						<Like />
					</div>
					<div className={s.readBio}>
						<Link to={`/characters/${id}`}>Read bio</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

CharacterCard.defaultProps = {
	isLike: false,
};

CharacterCard.propTypes = {
	id: PropTypes.number,
	name: PropTypes.string,
	src: PropTypes.string,
	humanName: PropTypes.string,
	description: PropTypes.string,
	isLike: PropTypes.bool,
	onLikeClick: PropTypes.func,
};

export default CharacterCard;
