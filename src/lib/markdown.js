import remark from "remark";
import html from "remark-html";

const markdownToHtml = async (markdown) => {
  const processedContent = await remark().use(html).process(markdown);
  const htmlContent = processedContent.toString();

  return htmlContent;
};

export default markdownToHtml;
