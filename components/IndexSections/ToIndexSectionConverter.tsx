import { IIndexSection } from '../../data/indexSections';

interface IProps extends IIndexSection {}

const ToIndexSectionConverter = ({
  bgImageUrl,
  content,
}: IProps): JSX.Element => {
  return (
    <section
      className="relative h-full px-3 md:px-6 lg:px-8 py-24 flex flex-col justify-center items-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${bgImageUrl})` }}
      key={bgImageUrl}
    >
      <div className="max-w-4xl mx-auto">{content}</div>
    </section>
  );
};

export default ToIndexSectionConverter;
