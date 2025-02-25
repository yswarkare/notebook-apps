import markdownIt from '../../utils/markdownIt';

type Props = {
	content: string
}

const MarkdownIt = ({ content }: Props) => {

	return (
		<div className='w-full flex flex-col'>
			{content && (
				<div
					className={'w-full flex flex-col justify-start items-start'}
					dangerouslySetInnerHTML={{ __html: markdownIt.render(content) }}
				></div>
			)}
		</div>
	);
};

export default MarkdownIt;
