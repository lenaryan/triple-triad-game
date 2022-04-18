import s from './TextBlock.module.css';
import Text from '../Text';
import Container from '../Container';

const TextBlock = () => {
    return (
        <section className={s.root}>
            <Container>
                <Text element="div" strong>Div Strong</Text>
                <Text element="p" italic>P Italic</Text>
                <Text element="span" disabled>Span Disabled</Text>
                <Text element="div" italic strong disabled>Div Italic Strong Disabled</Text>
            </Container>
        </section>
    )
}

export default TextBlock;