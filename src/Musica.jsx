import * as React from "react";
import ReactPlayer from "react-player/lazy";

import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

const media = [
  { label: "Sel·lecciona una cançó", url: "" },
  {
    label: "«La Felicidad», Izaro",
    url: "https://www.youtube.com/watch?v=rzp5foKF9Ps",
  },
  {
    label: "Sálvame, Íñigo Quintero",
    url: "https://www.youtube.com/watch?v=6UAinV-h6VI",
  },
  {
    label: "«Sé que no estic sol», Worship.cat",
    url: "https://www.youtube.com/watch?v=HdV20_4pdDo",
  },
  {
    label: "«Al salir al camino», Rezando voy",
    url: "https://rezando.es/public/rezandovoy/oraciones/2559/o.mp3",
  },
];
export default function Musica() {
  const [url, setUrl] = React.useState(() => media[0]);
  return (
    <div>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <NativeSelect
            inputProps={{
              name: "media",
              id: "uncontrolled-native",
            }}
            onChange={(e) => setUrl(e.target.value)}
          >
            {media.map((med) => (
              <option value={med.url}>{med.label}</option>
            ))}
          </NativeSelect>
        </FormControl>
      </Box>

      <ReactPlayer
        style={{ marginTop: "30px" }}
        width="80vw"
        height="calc(2 * (80vw) /3)"
        controls
        url={url}
      />
    </div>
  );
}