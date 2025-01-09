import markdownIt from '../../utils/markdownIt';

type Props = {
	content: string
}

const MarkdownIt = ({ content }: Props) => {

	return (
		<div className='max-w-[98vw] flex flex-col'>
			{content && (
				<div
					className={'flex flex-col justify-start items-start'}
					dangerouslySetInnerHTML={{ __html: markdownIt.render(content) }}
				></div>
			)}
		</div>
	);
};

export default MarkdownIt;
