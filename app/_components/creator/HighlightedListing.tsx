import { useEffect, useRef } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';

export default function HighlightedListing({
	codeString,
}: {
	codeString: string;
}) {
	const codeRef = useRef<HTMLElement>(null);

	useEffect(() => {
		if (codeRef.current) {
			codeRef.current.removeAttribute('data-highlighted');
			codeRef.current.innerHTML = codeString;
			hljs.highlightElement(codeRef.current);
		}
	}, [codeString]);

	return (
		<pre className='bg-transparent'>
			<code ref={codeRef} className='bg-transparent'>
				{codeString}
			</code>
		</pre>
	);
}
