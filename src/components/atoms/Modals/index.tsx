'use client'
import {
  useEffect,
  useRef,
  FC,
  DetailedHTMLProps,
  HTMLAttributes,
} from 'react';
import ReactDOM from 'react-dom';

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  /**
   * The HTML tag you want to create.
   * @default "section"
   */
  section?: keyof JSX.IntrinsicElements;
  id: string;
  className: string;
}

const Modals: FC<Props> = ({
  section = 'section',
  id,
  className,
  children,
  ...rest
}) => {
  const el = document.createElement(section);
  const wrapper: React.RefObject<HTMLElement> = useRef(el);

  useEffect(() => {
    const current = wrapper.current as HTMLElement;
    if (!current) return;

    current.setAttribute('id', id);
    current.setAttribute('class', className);

    Object.keys(rest).forEach(attribute => {
      const val = rest[attribute as keyof typeof rest] as string;
      current.setAttribute(attribute, val);
    });

    document.body.appendChild(current);

    return () => {
      document.body.removeChild(current);
    };
  }, [wrapper, id, className, rest]);

  if (!wrapper.current) {
    return <>{null}</>;
  }

  return ReactDOM.createPortal(children, wrapper.current);
};

export default Modals;
