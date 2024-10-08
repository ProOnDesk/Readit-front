import { useEffect } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';

export default function HighlightedListing({
	codeString,
}: {
	codeString: string;
}) {
	useEffect(() => {
		hljs.highlightAll(); 
	}, []);

	return (
		<pre className='bg-transparent'>
			<code className='bg-transparent'>{codeString}</code>
		</pre>
	);
}
