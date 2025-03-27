const ComponentRenderer = ({ componentType, attributes }) => {
  const { bgColor, textColor, borderStyle, borderColor, borderWidth } =
    attributes;

  const commonStyles = `p-4 rounded-md ${textColor} ${borderStyle} ${borderColor} border-${borderWidth}`;
};

export default ComponentRenderer;
