import remark from "remark";
import html from "remark-html";

const markdownToHtml = (markdown) => {
  const processedContent = remark().use(html).processSync(markdown);
  const htmlContent = processedContent.toString();

  return htmlContent;
};

export default markdownToHtml;
