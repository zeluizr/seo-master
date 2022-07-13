import { useRuntime } from "vtex.render-runtime";
import "./global.css";

const seoMaster = ({ targetContent, routerContent }) => {
  const { route } = useRuntime();

  return (
    <>
      {route.path === routerContent && (
        <>
          <div
            className="mt7 content-html"
            dangerouslySetInnerHTML={{ __html: targetContent }}
          />
        </>
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
    routerContent: {
      title: "Pagina de destino",
      description: "Pagina de destino",
      type: "string",
      default: null,
    },
  },
};

export default seoMaster;
