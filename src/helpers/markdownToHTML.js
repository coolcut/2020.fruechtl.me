var MarkdownIt = require("markdown-it")();

export default function markdownToHTML(data) {
  return MarkdownIt.render(content);
}
