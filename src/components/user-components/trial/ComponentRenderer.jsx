const ComponentRenderer = ({ componentType, attributes }) => {
  const { bgColor, textColor, borderStyle, borderColor, borderWidth } =
    attributes;

  const commonStyles = `p-4 rounded-md ${textColor} ${borderStyle} ${borderColor} border-${borderWidth}`;

  switch (componentType) {
    case "accordion":
      return (
        <div className={commonStyles} style={{ backgroundColor: bgColor }}>
          <h3 className="font-bold text-lg">Accordion Title</h3>
          <p className="mt-2 text-sm">This is an example accordion content.</p>
        </div>
      );

    case "menu":
      return (
        <div className={commonStyles} style={{ backgroundColor: bgColor }}>
          <ul>
            <li className="p-2 hover:bg-gray-200">Home</li>
            <li className="p-2 hover:bg-gray-200">About</li>
            <li className="p-2 hover:bg-gray-200">Contact</li>
          </ul>
        </div>
      );

    default:
      return <p>Please select a component.</p>;
  }
};

export default ComponentRenderer;
