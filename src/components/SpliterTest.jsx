import React from 'react'
import { useState } from 'react';

const SpliterTest = ({ need }) => {
  const [ignoreOut8, setIgnoreOut8] = useState(false);

  const [port, setPort] = useState([
    {
      "splitter1to2ID": "1",
      "splitter1to8": "1.1",
      "splitterOut": "OUT1",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S1.1 OUT 1",
      "used": false
    },
    {
      "splitter1to2ID": "1",
      "splitter1to8": "1.1",
      "splitterOut": "OUT2",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S1.1 OUT 2",
      "used": false
    },
    {
      "splitter1to2ID": "1",
      "splitter1to8": "1.1",
      "splitterOut": "OUT3",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S1.1 OUT 3",
      "used": false
    },
    {
      "splitter1to2ID": "1",
      "splitter1to8": "1.1",
      "splitterOut": "OUT4",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S1.1 OUT 4",
      "used": false
    },
    {
      "splitter1to2ID": "1",
      "splitter1to8": "1.1",
      "splitterOut": "OUT5",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S1.1 OUT 5",
      "used": false
    },
    {
      "splitter1to2ID": "1",
      "splitter1to8": "1.1",
      "splitterOut": "OUT6",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S1.1 OUT 6",
      "used": false
    },
    {
      "splitter1to2ID": "1",
      "splitter1to8": "1.1",
      "splitterOut": "OUT7",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S1.1 OUT 7",
      "used": false
    },
    {
      "splitter1to2ID": "1",
      "splitter1to8": "1.1",
      "splitterOut": "OUT8",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S1.1 OUT 8",
      "used": false
    },
    {
      "splitter1to2ID": "1",
      "splitter1to8": "1.2",
      "splitterOut": "OUT1",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S1.2 OUT 1",
      "used": false
    },
    {
      "splitter1to2ID": "1",
      "splitter1to8": "1.2",
      "splitterOut": "OUT2",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S1.2 OUT 2",
      "used": false
    },
    {
      "splitter1to2ID": "1",
      "splitter1to8": "1.2",
      "splitterOut": "OUT3",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S1.2 OUT 3",
      "used": false
    },
    {
      "splitter1to2ID": "1",
      "splitter1to8": "1.2",
      "splitterOut": "OUT4",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S1.2 OUT 4",
      "used": false
    },
    {
      "splitter1to2ID": "1",
      "splitter1to8": "1.2",
      "splitterOut": "OUT5",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S1.2 OUT 5",
      "used": false
    },
    {
      "splitter1to2ID": "1",
      "splitter1to8": "1.2",
      "splitterOut": "OUT6",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S1.2 OUT 6",
      "used": false
    },
    {
      "splitter1to2ID": "1",
      "splitter1to8": "1.2",
      "splitterOut": "OUT7",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S1.2 OUT 7",
      "used": false
    },
    {
      "splitter1to2ID": "1",
      "splitter1to8": "1.2",
      "splitterOut": "OUT8",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S1.2 OUT 8",
      "used": false
    },
    {
      "splitter1to2ID": "1",
      "splitter1to8": "1.3",
      "splitterOut": "OUT1",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S1.3 OUT 1",
      "used": false
    },
    {
      "splitter1to2ID": "1",
      "splitter1to8": "1.3",
      "splitterOut": "OUT2",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S1.3 OUT 2",
      "used": false
    },
    {
      "splitter1to2ID": "1",
      "splitter1to8": "1.3",
      "splitterOut": "OUT3",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S1.3 OUT 3",
      "used": false
    },
    {
      "splitter1to2ID": "1",
      "splitter1to8": "1.3",
      "splitterOut": "OUT4",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S1.3 OUT 4",
      "used": false
    },
    {
      "splitter1to2ID": "1",
      "splitter1to8": "1.3",
      "splitterOut": "OUT5",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S1.3 OUT 5",
      "used": false
    },
    {
      "splitter1to2ID": "1",
      "splitter1to8": "1.3",
      "splitterOut": "OUT6",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S1.3 OUT 6",
      "used": false
    },
    {
      "splitter1to2ID": "1",
      "splitter1to8": "1.3",
      "splitterOut": "OUT7",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S1.3 OUT 7",
      "used": false
    },
    {
      "splitter1to2ID": "1",
      "splitter1to8": "1.3",
      "splitterOut": "OUT8",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S1.3 OUT 8",
      "used": false
    },
    {
      "splitter1to2ID": "1",
      "splitter1to8": "1.4",
      "splitterOut": "OUT1",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S1.4 OUT 1",
      "used": false
    },
    {
      "splitter1to2ID": "1",
      "splitter1to8": "1.4",
      "splitterOut": "OUT2",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S1.4 OUT 2",
      "used": false
    },
    {
      "splitter1to2ID": "1",
      "splitter1to8": "1.4",
      "splitterOut": "OUT3",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S1.4 OUT 3",
      "used": false
    },
    {
      "splitter1to2ID": "1",
      "splitter1to8": "1.4",
      "splitterOut": "OUT4",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S1.4 OUT 4",
      "used": false
    },
    {
      "splitter1to2ID": "1",
      "splitter1to8": "1.4",
      "splitterOut": "OUT5",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S1.4 OUT 5",
      "used": false
    },
    {
      "splitter1to2ID": "1",
      "splitter1to8": "1.4",
      "splitterOut": "OUT6",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S1.4 OUT 6",
      "used": false
    },
    {
      "splitter1to2ID": "1",
      "splitter1to8": "1.4",
      "splitterOut": "OUT7",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S1.4 OUT 7",
      "used": false
    },
    {
      "splitter1to2ID": "1",
      "splitter1to8": "1.4",
      "splitterOut": "OUT8",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S1.4 OUT 8",
      "used": false
    },
    {
      "splitter1to2ID": "2",
      "splitter1to8": "2.1",
      "splitterOut": "OUT1",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S2.1 OUT 1",
      "used": false
    },
    {
      "splitter1to2ID": "2",
      "splitter1to8": "2.1",
      "splitterOut": "OUT2",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S2.1 OUT 2",
      "used": false
    },
    {
      "splitter1to2ID": "2",
      "splitter1to8": "2.1",
      "splitterOut": "OUT3",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S2.1 OUT 3",
      "used": false
    },
    {
      "splitter1to2ID": "2",
      "splitter1to8": "2.1",
      "splitterOut": "OUT4",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S2.1 OUT 4",
      "used": false
    },
    {
      "splitter1to2ID": "2",
      "splitter1to8": "2.1",
      "splitterOut": "OUT5",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S2.1 OUT 5",
      "used": false
    },
    {
      "splitter1to2ID": "2",
      "splitter1to8": "2.1",
      "splitterOut": "OUT6",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S2.1 OUT 6",
      "used": false
    },
    {
      "splitter1to2ID": "2",
      "splitter1to8": "2.1",
      "splitterOut": "OUT7",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S2.1 OUT 7",
      "used": false
    },
    {
      "splitter1to2ID": "2",
      "splitter1to8": "2.1",
      "splitterOut": "OUT8",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S2.1 OUT 8",
      "used": false
    },
    {
      "splitter1to2ID": "2",
      "splitter1to8": "2.2",
      "splitterOut": "OUT1",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S2.2 OUT 1",
      "used": false
    },
    {
      "splitter1to2ID": "2",
      "splitter1to8": "2.2",
      "splitterOut": "OUT2",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S2.2 OUT 2",
      "used": false
    },
    {
      "splitter1to2ID": "2",
      "splitter1to8": "2.2",
      "splitterOut": "OUT3",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S2.2 OUT 3",
      "used": false
    },
    {
      "splitter1to2ID": "2",
      "splitter1to8": "2.2",
      "splitterOut": "OUT4",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S2.2 OUT 4",
      "used": false
    },
    {
      "splitter1to2ID": "2",
      "splitter1to8": "2.2",
      "splitterOut": "OUT5",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S2.2 OUT 5",
      "used": false
    },
    {
      "splitter1to2ID": "2",
      "splitter1to8": "2.2",
      "splitterOut": "OUT6",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S2.2 OUT 6",
      "used": false
    },
    {
      "splitter1to2ID": "2",
      "splitter1to8": "2.2",
      "splitterOut": "OUT7",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S2.2 OUT 7",
      "used": false
    },
    {
      "splitter1to2ID": "2",
      "splitter1to8": "2.2",
      "splitterOut": "OUT8",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S2.2 OUT 8",
      "used": false
    },
    {
      "splitter1to2ID": "2",
      "splitter1to8": "2.3",
      "splitterOut": "OUT1",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S2.3 OUT 1",
      "used": false
    },
    {
      "splitter1to2ID": "2",
      "splitter1to8": "2.3",
      "splitterOut": "OUT2",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S2.3 OUT 2",
      "used": false
    },
    {
      "splitter1to2ID": "2",
      "splitter1to8": "2.3",
      "splitterOut": "OUT3",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S2.3 OUT 3",
      "used": false
    },
    {
      "splitter1to2ID": "2",
      "splitter1to8": "2.3",
      "splitterOut": "OUT4",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S2.3 OUT 4",
      "used": false
    },
    {
      "splitter1to2ID": "2",
      "splitter1to8": "2.3",
      "splitterOut": "OUT5",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S2.3 OUT 5",
      "used": false
    },
    {
      "splitter1to2ID": "2",
      "splitter1to8": "2.3",
      "splitterOut": "OUT6",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S2.3 OUT 6",
      "used": false
    },
    {
      "splitter1to2ID": "2",
      "splitter1to8": "2.3",
      "splitterOut": "OUT7",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S2.3 OUT 7",
      "used": false
    },
    {
      "splitter1to2ID": "2",
      "splitter1to8": "2.3",
      "splitterOut": "OUT8",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S2.3 OUT 8",
      "used": false
    },
    {
      "splitter1to2ID": "2",
      "splitter1to8": "2.4",
      "splitterOut": "OUT1",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S2.4 OUT 1",
      "used": false
    },
    {
      "splitter1to2ID": "2",
      "splitter1to8": "2.4",
      "splitterOut": "OUT2",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S2.4 OUT 2",
      "used": false
    },
    {
      "splitter1to2ID": "2",
      "splitter1to8": "2.4",
      "splitterOut": "OUT3",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S2.4 OUT 3",
      "used": false
    },
    {
      "splitter1to2ID": "2",
      "splitter1to8": "2.4",
      "splitterOut": "OUT4",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S2.4 OUT 4",
      "used": false
    },
    {
      "splitter1to2ID": "2",
      "splitter1to8": "2.4",
      "splitterOut": "OUT5",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S2.4 OUT 5",
      "used": false
    },
    {
      "splitter1to2ID": "2",
      "splitter1to8": "2.4",
      "splitterOut": "OUT6",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S2.4 OUT 6",
      "used": false
    },
    {
      "splitter1to2ID": "2",
      "splitter1to8": "2.4",
      "splitterOut": "OUT7",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S2.4 OUT 7",
      "used": false
    },
    {
      "splitter1to2ID": "2",
      "splitter1to8": "2.4",
      "splitterOut": "OUT8",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S2.4 OUT 8",
      "used": false
    },
    {
      "splitter1to2ID": "3",
      "splitter1to8": "3.1",
      "splitterOut": "OUT1",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S3.1 OUT 1",
      "used": false
    },
    {
      "splitter1to2ID": "3",
      "splitter1to8": "3.1",
      "splitterOut": "OUT2",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S3.1 OUT 2",
      "used": false
    },
    {
      "splitter1to2ID": "3",
      "splitter1to8": "3.1",
      "splitterOut": "OUT3",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S3.1 OUT 3",
      "used": false
    },
    {
      "splitter1to2ID": "3",
      "splitter1to8": "3.1",
      "splitterOut": "OUT4",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S3.1 OUT 4",
      "used": false
    },
    {
      "splitter1to2ID": "3",
      "splitter1to8": "3.1",
      "splitterOut": "OUT5",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S3.1 OUT 5",
      "used": false
    },
    {
      "splitter1to2ID": "3",
      "splitter1to8": "3.1",
      "splitterOut": "OUT6",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S3.1 OUT 6",
      "used": false
    },
    {
      "splitter1to2ID": "3",
      "splitter1to8": "3.1",
      "splitterOut": "OUT7",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S3.1 OUT 7",
      "used": false
    },
    {
      "splitter1to2ID": "3",
      "splitter1to8": "3.1",
      "splitterOut": "OUT8",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S3.1 OUT 8",
      "used": false
    },
    {
      "splitter1to2ID": "3",
      "splitter1to8": "3.2",
      "splitterOut": "OUT1",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S3.2 OUT 1",
      "used": false
    },
    {
      "splitter1to2ID": "3",
      "splitter1to8": "3.2",
      "splitterOut": "OUT2",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S3.2 OUT 2",
      "used": false
    },
    {
      "splitter1to2ID": "3",
      "splitter1to8": "3.2",
      "splitterOut": "OUT3",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S3.2 OUT 3",
      "used": false
    },
    {
      "splitter1to2ID": "3",
      "splitter1to8": "3.2",
      "splitterOut": "OUT4",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S3.2 OUT 4",
      "used": false
    },
    {
      "splitter1to2ID": "3",
      "splitter1to8": "3.2",
      "splitterOut": "OUT5",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S3.2 OUT 5",
      "used": false
    },
    {
      "splitter1to2ID": "3",
      "splitter1to8": "3.2",
      "splitterOut": "OUT6",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S3.2 OUT 6",
      "used": false
    },
    {
      "splitter1to2ID": "3",
      "splitter1to8": "3.2",
      "splitterOut": "OUT7",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S3.2 OUT 7",
      "used": false
    },
    {
      "splitter1to2ID": "3",
      "splitter1to8": "3.2",
      "splitterOut": "OUT8",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S3.2 OUT 8",
      "used": false
    },
    {
      "splitter1to2ID": "3",
      "splitter1to8": "3.3",
      "splitterOut": "OUT1",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S3.3 OUT 1",
      "used": false
    },
    {
      "splitter1to2ID": "3",
      "splitter1to8": "3.3",
      "splitterOut": "OUT2",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S3.3 OUT 2",
      "used": false
    },
    {
      "splitter1to2ID": "3",
      "splitter1to8": "3.3",
      "splitterOut": "OUT3",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S3.3 OUT 3",
      "used": false
    },
    {
      "splitter1to2ID": "3",
      "splitter1to8": "3.3",
      "splitterOut": "OUT4",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S3.3 OUT 4",
      "used": false
    },
    {
      "splitter1to2ID": "3",
      "splitter1to8": "3.3",
      "splitterOut": "OUT5",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S3.3 OUT 5",
      "used": false
    },
    {
      "splitter1to2ID": "3",
      "splitter1to8": "3.3",
      "splitterOut": "OUT6",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S3.3 OUT 6",
      "used": false
    },
    {
      "splitter1to2ID": "3",
      "splitter1to8": "3.3",
      "splitterOut": "OUT7",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S3.3 OUT 7",
      "used": false
    },
    {
      "splitter1to2ID": "3",
      "splitter1to8": "3.3",
      "splitterOut": "OUT8",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S3.3 OUT 8",
      "used": false
    },
    {
      "splitter1to2ID": "3",
      "splitter1to8": "3.4",
      "splitterOut": "OUT1",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S3.4 OUT 1",
      "used": false
    },
    {
      "splitter1to2ID": "3",
      "splitter1to8": "3.4",
      "splitterOut": "OUT2",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S3.4 OUT 2",
      "used": false
    },
    {
      "splitter1to2ID": "3",
      "splitter1to8": "3.4",
      "splitterOut": "OUT3",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S3.4 OUT 3",
      "used": false
    },
    {
      "splitter1to2ID": "3",
      "splitter1to8": "3.4",
      "splitterOut": "OUT4",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S3.4 OUT 4",
      "used": false
    },
    {
      "splitter1to2ID": "3",
      "splitter1to8": "3.4",
      "splitterOut": "OUT5",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S3.4 OUT 5",
      "used": false
    },
    {
      "splitter1to2ID": "3",
      "splitter1to8": "3.4",
      "splitterOut": "OUT6",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S3.4 OUT 6",
      "used": false
    },
    {
      "splitter1to2ID": "3",
      "splitter1to8": "3.4",
      "splitterOut": "OUT7",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S3.4 OUT 7",
      "used": false
    },
    {
      "splitter1to2ID": "3",
      "splitter1to8": "3.4",
      "splitterOut": "OUT8",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S3.4 OUT 8",
      "used": false
    },
    {
      "splitter1to2ID": "4",
      "splitter1to8": "4.1",
      "splitterOut": "OUT1",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S4.1 OUT 1",
      "used": false
    },
    {
      "splitter1to2ID": "4",
      "splitter1to8": "4.1",
      "splitterOut": "OUT2",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S4.1 OUT 2",
      "used": false
    },
    {
      "splitter1to2ID": "4",
      "splitter1to8": "4.1",
      "splitterOut": "OUT3",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S4.1 OUT 3",
      "used": false
    },
    {
      "splitter1to2ID": "4",
      "splitter1to8": "4.1",
      "splitterOut": "OUT4",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S4.1 OUT 4",
      "used": false
    },
    {
      "splitter1to2ID": "4",
      "splitter1to8": "4.1",
      "splitterOut": "OUT5",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S4.1 OUT 5",
      "used": false
    },
    {
      "splitter1to2ID": "4",
      "splitter1to8": "4.1",
      "splitterOut": "OUT6",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S4.1 OUT 6",
      "used": false
    },
    {
      "splitter1to2ID": "4",
      "splitter1to8": "4.1",
      "splitterOut": "OUT7",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S4.1 OUT 7",
      "used": false
    },
    {
      "splitter1to2ID": "4",
      "splitter1to8": "4.1",
      "splitterOut": "OUT8",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S4.1 OUT 8",
      "used": false
    },
    {
      "splitter1to2ID": "4",
      "splitter1to8": "4.2",
      "splitterOut": "OUT1",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S4.2 OUT 1",
      "used": false
    },
    {
      "splitter1to2ID": "4",
      "splitter1to8": "4.2",
      "splitterOut": "OUT2",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S4.2 OUT 2",
      "used": false
    },
    {
      "splitter1to2ID": "4",
      "splitter1to8": "4.2",
      "splitterOut": "OUT3",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S4.2 OUT 3",
      "used": false
    },
    {
      "splitter1to2ID": "4",
      "splitter1to8": "4.2",
      "splitterOut": "OUT4",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S4.2 OUT 4",
      "used": false
    },
    {
      "splitter1to2ID": "4",
      "splitter1to8": "4.2",
      "splitterOut": "OUT5",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S4.2 OUT 5",
      "used": false
    },
    {
      "splitter1to2ID": "4",
      "splitter1to8": "4.2",
      "splitterOut": "OUT6",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S4.2 OUT 6",
      "used": false
    },
    {
      "splitter1to2ID": "4",
      "splitter1to8": "4.2",
      "splitterOut": "OUT7",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S4.2 OUT 7",
      "used": false
    },
    {
      "splitter1to2ID": "4",
      "splitter1to8": "4.2",
      "splitterOut": "OUT8",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S4.2 OUT 8",
      "used": false
    },
    {
      "splitter1to2ID": "4",
      "splitter1to8": "4.3",
      "splitterOut": "OUT1",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S4.3 OUT 1",
      "used": false
    },
    {
      "splitter1to2ID": "4",
      "splitter1to8": "4.3",
      "splitterOut": "OUT2",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S4.3 OUT 2",
      "used": false
    },
    {
      "splitter1to2ID": "4",
      "splitter1to8": "4.3",
      "splitterOut": "OUT3",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S4.3 OUT 3",
      "used": false
    },
    {
      "splitter1to2ID": "4",
      "splitter1to8": "4.3",
      "splitterOut": "OUT4",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S4.3 OUT 4",
      "used": false
    },
    {
      "splitter1to2ID": "4",
      "splitter1to8": "4.3",
      "splitterOut": "OUT5",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S4.3 OUT 5",
      "used": false
    },
    {
      "splitter1to2ID": "4",
      "splitter1to8": "4.3",
      "splitterOut": "OUT6",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S4.3 OUT 6",
      "used": false
    },
    {
      "splitter1to2ID": "4",
      "splitter1to8": "4.3",
      "splitterOut": "OUT7",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S4.3 OUT 7",
      "used": false
    },
    {
      "splitter1to2ID": "4",
      "splitter1to8": "4.3",
      "splitterOut": "OUT8",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S4.3 OUT 8",
      "used": false
    },
    {
      "splitter1to2ID": "4",
      "splitter1to8": "4.4",
      "splitterOut": "OUT1",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S4.4 OUT 1",
      "used": false
    },
    {
      "splitter1to2ID": "4",
      "splitter1to8": "4.4",
      "splitterOut": "OUT2",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S4.4 OUT 2",
      "used": false
    },
    {
      "splitter1to2ID": "4",
      "splitter1to8": "4.4",
      "splitterOut": "OUT3",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S4.4 OUT 3",
      "used": false
    },
    {
      "splitter1to2ID": "4",
      "splitter1to8": "4.4",
      "splitterOut": "OUT4",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S4.4 OUT 4",
      "used": false
    },
    {
      "splitter1to2ID": "4",
      "splitter1to8": "4.4",
      "splitterOut": "OUT5",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S4.4 OUT 5",
      "used": false
    },
    {
      "splitter1to2ID": "4",
      "splitter1to8": "4.4",
      "splitterOut": "OUT6",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S4.4 OUT 6",
      "used": false
    },
    {
      "splitter1to2ID": "4",
      "splitter1to8": "4.4",
      "splitterOut": "OUT7",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S4.4 OUT 7",
      "used": false
    },
    {
      "splitter1to2ID": "4",
      "splitter1to8": "4.4",
      "splitterOut": "OUT8",
      "cassetteID": "",
      "fiberNr": "",
      "fullID": "S4.4 OUT 8",
      "used": false
    }
  ])


  const [currentPage, setCurrentPage] = useState(1);
  const portsPerPage = 20;

  const indexOfLastPort = currentPage * portsPerPage;
  const indexOfFirstPort = indexOfLastPort - portsPerPage;
  const currentPorts = port.slice(indexOfFirstPort, indexOfLastPort);

  const totalPages = Math.ceil(port.length / portsPerPage);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

function handleUsePorts({ need }) {
  setPort(prevPorts => {
    const grouped = prevPorts.reduce((acc, port) => {
      if (!acc[port.splitter1to2ID]) acc[port.splitter1to2ID] = [];
      acc[port.splitter1to2ID].push(port);
      return acc;
    }, {});

    for (const splitterID in grouped) {
      const freePorts = grouped[splitterID].filter(p => {
        const isOut8 = p.splitterOut === 'OUT8';
        return !p.used && (!ignoreOut8 || !isOut8);
      });

      if (freePorts.length >= need) {
        let count = 0;
        return prevPorts.map(p => {
          const isOut8 = p.splitterOut === 'OUT8';
          if (
            p.splitter1to2ID === splitterID &&
            !p.used &&
            (!ignoreOut8 || !isOut8) &&
            count < need
          ) {
            count++;
            return { ...p, used: true };
          }
          return p;
        });
      }
    }

    alert('Not enough free ports in any splitter group.');
    return prevPorts;
  });
}




  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
<button
  onClick={() => setIgnoreOut8(prev => !prev)}
  style={{
    padding: '10px 20px',
    margin: '10px 0',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: ignoreOut8 ? '#ff4d4f' : '#4caf50',
    color: 'white',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease'
  }}
>
  {ignoreOut8 ? 'Ignoring OUT8 Ports' : 'Using All Ports'}
</button>


      <button className='bg-black p-2 m-2 rounded-full text-white hover:bg-gray-200' onClick={() => handleUsePorts({ need })}>use ports for { need } users</button>
      <h2>Splitter Port Table</h2>
   <table style={{ borderCollapse: 'collapse', width: '80%', textAlign: 'center' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={thStyle}>splitter1to2ID</th>
      <th style={thStyle}>splitter1to8</th>
      <th style={thStyle}>splitterOut</th>
      <th style={thStyle}>cassetteID</th>
      <th style={thStyle}>fiberNr</th>
      <th style={thStyle}>fullID</th>
      <th style={thStyle}>used</th>
    </tr>
  </thead>
  <tbody>
    {currentPorts.map((port, index) => (
      <tr
        key={index}
        style={port.used ? { backgroundColor: '#000', color: '#fff' } : {}}
      >
        <td style={tdStyle}>{port.splitter1to2ID}</td>
        <td style={tdStyle}>{port.splitter1to8}</td>
        <td style={tdStyle}>{port.splitterOut}</td>
        <td style={tdStyle}>{port.cassetteID}</td>
        <td style={tdStyle}>{port.fiberNr}</td>
        <td style={tdStyle}>{port.fullID}</td>
        <td style={tdStyle}>{port.used ? 'Yes' : 'No'}</td>
      </tr>
    ))}
  </tbody>
</table>


      <div style={{ marginTop: '15px' }}>
        <button onClick={handlePrev} disabled={currentPage === 1} style={buttonStyle}>Previous</button>
        <span style={{ margin: '0 10px' }}>Page {currentPage} of {totalPages}</span>
        <button onClick={handleNext} disabled={currentPage === totalPages} style={buttonStyle}>Next</button>
      </div>
    </div>
  );
};

const thStyle = {
  border: '1px solid #ccc',
  padding: '10px',
  fontWeight: 'bold',
  backgroundColor: '#eee'
};

const tdStyle = {
  border: '1px solid #ccc',
  padding: '8px'
};

const buttonStyle = {
  padding: '6px 12px',
  margin: '0 5px',
  cursor: 'pointer'
};

export default SpliterTest


