import "./global.css";
const seoMaster = ({ targetContent }) => {
  return (
    <>
      {targetContent && (
        <div
          className="mt7 content-html"
          dangerouslySetInnerHTML={{ __html: targetContent }}
        />
      )}
    </>
  );
};

seoMaster.schema = {
  title: "SEO Content",
  description: "SEO",
  type: "object",
  properties: {
    targetContent: {
      title: "SEO Content",
      description: "SEO",
      type: "string",
      default: null,
    },
  },
};

export default seoMaster;
