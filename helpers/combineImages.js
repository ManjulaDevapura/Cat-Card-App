import { getImage } from "./getImage.js";
import blend from "@mapbox/blend";
import { writeFile } from "fs";
import { join } from "path";

export const combineImages = async (imageArray, width, height) => {
  blend(
    imageArray,
    { width: width, height: height, format: "jpeg" },
    (err, data) => {
      const fileOut = join(process.cwd(), `/cat-card.jpg`);

      writeFile(fileOut, data, "binary", (err) => {
        if (err) {
          console.log(err);
          return;
        }

        console.log("The file was saved!");
      });
    }
  );
};
