const adresses = [
 {
	id: "H029475",
	street: "Friedhofstr.",
    streetNumber: '6',
    postalCode: '56427',
    district: 'Siershahn',
    users: '1',
    tubeNr: '1',
    tubeType: '24x7',
    microTubeNr: '1',
    cableLength: '168',
    fibers: 4
 },
 {
	id: "H028209",
	street: "Finkenweg",
    streetNumber: '2',
    postalCode: '56427',
    district: 'Siershahn',
    users: '11',
    tubeNr: '1',
    tubeType: '24x7',
    microTubeNr: '2',
    cableLength: '186',
    fibers: 24
 },
 {
	id: "H029461",
	street: "Finkenweg",
    streetNumber: '4',
    postalCode: '56427',
    district: 'Siershahn',
    users: '3',
    tubeNr: '1',
    tubeType: '24x7',
    microTubeNr: '3',
    cableLength: '134',
    fibers: 6
 },
 {
	id: "H029885",
	street: "Finkenweg",
    streetNumber: '3',
    postalCode: '56427',
    district: 'Siershahn',
    users: '1',
    tubeNr: '1',
    tubeType: '24x7',
    microTubeNr: '4',
    cableLength: '37',
    fibers: 4
 },
 {
	id: "H027765",
	street: "Am Birkensee",
    streetNumber: '4',
    postalCode: '56427',
    district: 'Siershahn',
    users: '1',
    tubeNr: '1',
    tubeType: '24x7',
    microTubeNr: '8',
    cableLength: '34',
    fibers: 4
 },
  {
	id: "H029821",
	street: "Am Birkensee",
    streetNumber: '2',
    postalCode: '56427',
    district: 'Siershahn',
    users: '1',
    tubeNr: '1',
    tubeType: '24x7',
    microTubeNr: '9',
    cableLength: '54',
    fibers: 4
 },
   {
	id: "H027322",
	street: "Am Birkensee",
    streetNumber: '1',
    postalCode: '56427',
    district: 'Siershahn',
    users: '5',
    tubeNr: '1',
    tubeType: '24x7',
    microTubeNr: '10',
    cableLength: '65',
    fibers: 12
 }
 
];

  const initalPorts = [
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
    ]







export {
 adresses,
 initalPorts
};