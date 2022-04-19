import s from './TextBlock.module.scss';
import Container from '../Container';
import Heading from '../Heading';
import CharacterCard from '../CharacterCard';

const TextBlock = () => {
    return (
        <section className={s.root}>
            <Container>
                <div className={s.cardTitle}>
                    <Heading backLine>Marvel Cards</Heading>
                    <Heading level={2}>Collect your best five</Heading>
                </div>
                <div className={s.cardWrap}>
                    <CharacterCard />
                    <CharacterCard />
                    <CharacterCard />
                </div>
            </Container>
        </section>
    )
}

export default TextBlock;