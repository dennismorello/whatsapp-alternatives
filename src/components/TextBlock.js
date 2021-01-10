import cn from "classnames";

const TextBlock = ({ className, ...otherProps }) => (
  <div className={cn("prose lg:prose-xl", className)} {...otherProps} />
);

export default TextBlock;
