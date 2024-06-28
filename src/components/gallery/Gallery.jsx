import { Card } from "primereact/card";
import { getData } from "../../firebase/config";
import { ProgressSpinner } from "primereact/progressspinner";
import { useEffect, useState } from "react";
import { Image } from "primereact/image";
import "./Gallery.css";
import { Chip } from "primereact/chip";
import { Fieldset } from "primereact/fieldset";

const Galeria = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    getData().then((result) => {
      setData(result);
    });
  }, []);

  const header = (source) => {
    return (
      <div className="image-container">
        <Image alt="Card" src={source} preview />
      </div>
    );
  };
  const chipMapper = (sentiments) => {
    const chips = [];
    sentiments.forEach((sentiment, index) => {
      chips.push(
        <Chip
          key={index}
          label={sentiment}
          className="p-mr-2 p-mb-2 m-1"
          icon=""
        />
      );
    });
    return chips;
  };

  if (data == null) {
    return (
      <div className="card flex justify-content-center align-content-center">
        <ProgressSpinner
          style={{ width: "100px", height: "100px" }}
          strokeWidth="8"
          fill="var(--surface-ground)"
          animationDuration=".5s"
        />
      </div>
    );
  } else {
    return (
      <div className="flex flex-column">
        <div class="card flex align-items-center justify-content-center m-6">
          <Fieldset legend="Galeria de imagenes" className="shadow-6">
            <p className="m-3 text-justify">
              Las emociones son una parte fundamental de la experiencia humana,
              influyendo en nuestros pensamientos, comportamientos y relaciones.
              Las emociones básicas como la alegría, la tristeza, la ira, el
              asco y el miedo son experiencias universales que todos compartimos
              y que juegan roles cruciales en nuestra vida diaria. Para esto,
              realizar una galería de fotografías donde los estudiantes enviaban
              imágenes expresando diversas emociones no solo nos permite
              explorar los propios sentimientos, sino que también nos ofrece una
              representación visual de cómo las emociones se manifiestan de
              maneras únicas y personales.
            </p>
            <p className="m-3 text-left">A continuación, la galería:</p>
          </Fieldset>
        </div>
        <div class="card flex flex-wrap justify-content-center gap-5">
          {data.map((item) => (
            <Card
              key={item.id}
              title={"Autor: " + item.author}
              subTitle={chipMapper(item.sentiments)}
              header={header(item.result)}
              className="md:w-25rem shadow-8 card-container"
            >
              <p className="m-0">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    );
  }
};

export default Galeria;
