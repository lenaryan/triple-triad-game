import s from './Container.module.scss';
import cn from 'classnames';

const Container = ({ children, className }) => {
    return (
        <div className={cn(s.root, className)}>
            {children}
        </div>
    )
}

export default Container;