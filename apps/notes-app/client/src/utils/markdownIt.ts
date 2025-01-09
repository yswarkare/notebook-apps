import markdownit from 'markdown-it';
import hljs from 'highlight.js';
import { attrs } from '@mdit/plugin-attrs';
import { imgLazyload } from '@mdit/plugin-img-lazyload';
import { alert } from '@mdit/plugin-alert';
import { imgSize } from '@mdit/plugin-img-size';
import mitAnchor from 'markdown-it-anchor';
import highlight from 'markdown-it-highlightjs';
import headings from 'markdown-it-headings';
import hashtag from 'markdown-it-hashtag';
import emoji_plugin from 'markdown-it-emoji/dist/markdown-it-emoji.js';
import footnote from 'markdown-it-footnote';
import container from 'markdown-it-container';
import checkbox from 'markdown-it-task-checkbox';

// Actual default values
const md = markdownit({
	html: true,
	linkify: true,
	highlight: function (str, lang) {
		if (lang && hljs.getLanguage(lang)) {
			try {
				return '<pre><code class="hljs">' + hljs.highlight(str, { language: lang, ignoreIllegals: true }).value + '</code></pre>';
			} catch (err) {
				console.log(err);
			}
		}

		return '<pre><code class="hljs">' + md.utils.escapeHtml(str) + '</code></pre>';
	},
});

md.use(highlight)
	.use(checkbox)
	.use(container)
	.use(emoji_plugin)
	.use(footnote)
	.use(hashtag)
	.use(alert)
	.use(mitAnchor)
	.use(headings)
	.use(attrs)
	.use(imgLazyload)
	.use(imgSize);

export default md;
