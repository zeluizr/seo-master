import "./global.css";
const seoMaster = ({ targetContent }) => {
  const HTML = `<h3>         C&Aacute;MARAS MIRRORLESS: CALIDAD GRANDE EN UN TAMA&Ntilde;O         PEQUE&Ntilde;O       </h3>       <p>         Dentro del mundo de la fotograf&iacute;a encontramos una variedad de         equipos con diversos sistemas y uno de ellos es el Mirrorless. Una         C&aacute;mara Mirrorless es aquella que, a diferencia de las         C&aacute;maras R&eacute;flex, no presenta espejos en su interior, lo que         se traduce en un cuerpo m&aacute;s compacto, ligero, y con un sistema de         enfoque de mayor rapidez y rendimiento en comparaci&oacute;n a         &eacute;stas. &iquest;Eso significa que es lo mismo que una         C&aacute;mara Compacta? &iexcl;No! A diferencia de una Compacta         tradicional que posee un objetivo zoom fijo, las C&aacute;maras         Mirrorless cuentan con la posibilidad de utilizar objetivos         intercambiables, aportando mayor capacidad creativa al momento de         iniciar tus proyectos.         <br />         Ahora que entendemos las diferencias entre C&aacute;maras R&eacute;flex,         Mirrorless y Compactas:       </p>       <h3>         &iquest;EXISTEN DIFERENCIAS ENTRE UNA C&Aacute;MARA MIRRORLESS         FULL-FRAME Y APS-C?       </h3>       <p>         La diferencia principal y m&aacute;s simple (aparte del precio) es el         tama&ntilde;o del sensor, donde una c&aacute;mara Full frame posee uno         de mayor tama&ntilde;o que el de una APS-C, lo que termina repercutiendo         en aspectos como un mayor rango din&aacute;mico, campo de visi&oacute;n         m&aacute;s amplio, mayor calidad de imagen y menor ruido a altos ISO,         entre otros. Sin embargo, la c&aacute;mara no es lo m&aacute;s         importante y con ambos sistemas puedes lograr fotograf&iacute;as         incre&iacute;bles.       </p>       <h3>ENCUENTRA UN GRAN CAT&Aacute;LOGO</h3>       <p>         En Killstore podr&aacute;s encontrar una amplia gama de C&aacute;maras         Mirrorless, desde c&aacute;maras de entrada para principiantes hasta         c&aacute;maras de l&iacute;neas profesionales. Tambi&eacute;n         encontrar&aacute;s las mejores marcas como Canon, Nikon, Fujifilm, Sony         y Olympus.       </p>`;

  return (
    <>
      <div
        className="mt7 content-html"
        dangerouslySetInnerHTML={{ __html: targetContent ?? HTML }}
      />
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
