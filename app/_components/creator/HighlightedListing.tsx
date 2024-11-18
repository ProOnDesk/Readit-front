import { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';

export default function HighlightedListing({
	codeString,
}: {
	codeString: string;
}) {
	useEffect(() => {
		Prism.highlightAll();
	}, [codeString]);

	return (
		<pre>
			<code className='language-javascript'>{codeString}</code>
		</pre>
	);
}
