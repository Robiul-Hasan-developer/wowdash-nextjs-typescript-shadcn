"use client";

import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  GeographyProps,
} from "react-simple-maps";

// Use a public GeoJSON source
const geoUrl =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const WorldMapChart: React.FC = () => {
  return (
    <div className="w-full flex justify-center">
      <ComposableMap
        projection="geoMercator"
        width={800}
        height={400}
        className="w-full h-auto"
      >
        <Geographies geography={geoUrl}>
          {({ geographies }: { geographies: GeographyProps["geography"][] }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: {
                    fill: "#E0E0E0",
                    outline: "none",
                  },
                  hover: {
                    fill: "#6366f1",
                    outline: "none",
                  },
                  pressed: {
                    fill: "#4f46e5",
                    outline: "none",
                  },
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default WorldMapChart;