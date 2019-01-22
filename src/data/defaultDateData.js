const defaultDateData = {
  // 20190120185350
  // https://api.nasa.gov/neo/rest/v1/feed?start_date=2019-01-20&end_date=2019-01-20&api_key=DEMO_KEY

  links: {
    next:
      'https://api.nasa.gov/neo/rest/v1/feed?start_date=2019-01-21&end_date=2019-01-21&detailed=false&api_key=DEMO_KEY',
    prev:
      'https://api.nasa.gov/neo/rest/v1/feed?start_date=2019-01-19&end_date=2019-01-19&detailed=false&api_key=DEMO_KEY',
    self:
      'https://api.nasa.gov/neo/rest/v1/feed?start_date=2019-01-20&end_date=2019-01-20&detailed=false&api_key=DEMO_KEY',
  },
  element_count: 7,
  near_earth_objects: {
    '2019-01-20': [
      {
        links: {
          self: 'https://api.nasa.gov/neo/rest/v1/neo/3837782?api_key=DEMO_KEY',
        },
        id: '3837782',
        neo_reference_id: '3837782',
        name: '(2019 AO8)',
        nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3837782',
        absolute_magnitude_h: 25.637,
        estimated_diameter: {
          kilometers: {
            estimated_diameter_min: 0.0198223425,
            estimated_diameter_max: 0.0443241054,
          },
          meters: {
            estimated_diameter_min: 19.8223425361,
            estimated_diameter_max: 44.324105384,
          },
          miles: {
            estimated_diameter_min: 0.0123170288,
            estimated_diameter_max: 0.0275417137,
          },
          feet: {
            estimated_diameter_min: 65.0339342861,
            estimated_diameter_max: 145.4202979081,
          },
        },
        is_potentially_hazardous_asteroid: false,
        close_approach_data: [
          {
            close_approach_date: '2019-01-20',
            epoch_date_close_approach: 1547971200000,
            relative_velocity: {
              kilometers_per_second: '11.2602370082',
              kilometers_per_hour: '40536.8532294761',
              miles_per_hour: '25188.0241636153',
            },
            miss_distance: {
              astronomical: '0.0265209608',
              lunar: '10.3166532516',
              kilometers: '3967479.25',
              miles: '2465277.25',
            },
            orbiting_body: 'Earth',
          },
        ],
        is_sentry_object: false,
      },
      {
        links: {
          self: 'https://api.nasa.gov/neo/rest/v1/neo/3338034?api_key=DEMO_KEY',
        },
        id: '3338034',
        neo_reference_id: '3338034',
        name: '(2006 QE)',
        nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3338034',
        absolute_magnitude_h: 19.6,
        estimated_diameter: {
          kilometers: {
            estimated_diameter_min: 0.3195618867,
            estimated_diameter_max: 0.7145621017,
          },
          meters: {
            estimated_diameter_min: 319.5618867213,
            estimated_diameter_max: 714.5621017269,
          },
          miles: {
            estimated_diameter_min: 0.1985664891,
            estimated_diameter_max: 0.4440081677,
          },
          feet: {
            estimated_diameter_min: 1048.4314204307,
            estimated_diameter_max: 2344.3639258298,
          },
        },
        is_potentially_hazardous_asteroid: false,
        close_approach_data: [
          {
            close_approach_date: '2019-01-20',
            epoch_date_close_approach: 1547971200000,
            relative_velocity: {
              kilometers_per_second: '22.658753674',
              kilometers_per_hour: '81571.513226405',
              miles_per_hour: '50685.3660933737',
            },
            miss_distance: {
              astronomical: '0.4481049635',
              lunar: '174.3128356934',
              kilometers: '67035552',
              miles: '41653960',
            },
            orbiting_body: 'Earth',
          },
        ],
        is_sentry_object: false,
      },
      {
        links: {
          self: 'https://api.nasa.gov/neo/rest/v1/neo/3478654?api_key=DEMO_KEY',
        },
        id: '3478654',
        neo_reference_id: '3478654',
        name: '(2009 WD54)',
        nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3478654',
        absolute_magnitude_h: 28.5,
        estimated_diameter: {
          kilometers: {
            estimated_diameter_min: 0.0053034072,
            estimated_diameter_max: 0.0118587791,
          },
          meters: {
            estimated_diameter_min: 5.3034072332,
            estimated_diameter_max: 11.8587790858,
          },
          miles: {
            estimated_diameter_min: 0.0032953835,
            estimated_diameter_max: 0.0073687014,
          },
          feet: {
            estimated_diameter_min: 17.3996305869,
            estimated_diameter_max: 38.9067567758,
          },
        },
        is_potentially_hazardous_asteroid: false,
        close_approach_data: [
          {
            close_approach_date: '2019-01-20',
            epoch_date_close_approach: 1547971200000,
            relative_velocity: {
              kilometers_per_second: '20.5535572456',
              kilometers_per_hour: '73992.806084308',
              miles_per_hour: '45976.2522027746',
            },
            miss_distance: {
              astronomical: '0.4056682354',
              lunar: '157.8049468994',
              kilometers: '60687104',
              miles: '37709216',
            },
            orbiting_body: 'Earth',
          },
        ],
        is_sentry_object: false,
      },
      {
        links: {
          self: 'https://api.nasa.gov/neo/rest/v1/neo/3741152?api_key=DEMO_KEY',
        },
        id: '3741152',
        neo_reference_id: '3741152',
        name: '(2016 CG18)',
        nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3741152',
        absolute_magnitude_h: 28.5,
        estimated_diameter: {
          kilometers: {
            estimated_diameter_min: 0.0053034072,
            estimated_diameter_max: 0.0118587791,
          },
          meters: {
            estimated_diameter_min: 5.3034072332,
            estimated_diameter_max: 11.8587790858,
          },
          miles: {
            estimated_diameter_min: 0.0032953835,
            estimated_diameter_max: 0.0073687014,
          },
          feet: {
            estimated_diameter_min: 17.3996305869,
            estimated_diameter_max: 38.9067567758,
          },
        },
        is_potentially_hazardous_asteroid: false,
        close_approach_data: [
          {
            close_approach_date: '2019-01-20',
            epoch_date_close_approach: 1547971200000,
            relative_velocity: {
              kilometers_per_second: '17.9242010467',
              kilometers_per_hour: '64527.1237680358',
              miles_per_hour: '40094.6453213109',
            },
            miss_distance: {
              astronomical: '0.4780499316',
              lunar: '185.9614257812',
              kilometers: '71515256',
              miles: '44437516',
            },
            orbiting_body: 'Earth',
          },
        ],
        is_sentry_object: false,
      },
      {
        links: {
          self: 'https://api.nasa.gov/neo/rest/v1/neo/3752409?api_key=DEMO_KEY',
        },
        id: '3752409',
        neo_reference_id: '3752409',
        name: '(2016 HF2)',
        nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3752409',
        absolute_magnitude_h: 26.1,
        estimated_diameter: {
          kilometers: {
            estimated_diameter_min: 0.0160160338,
            estimated_diameter_max: 0.0358129403,
          },
          meters: {
            estimated_diameter_min: 16.0160337979,
            estimated_diameter_max: 35.8129403019,
          },
          miles: {
            estimated_diameter_min: 0.0099518989,
            estimated_diameter_max: 0.0222531225,
          },
          feet: {
            estimated_diameter_min: 52.5460443254,
            estimated_diameter_max: 117.4965270602,
          },
        },
        is_potentially_hazardous_asteroid: false,
        close_approach_data: [
          {
            close_approach_date: '2019-01-20',
            epoch_date_close_approach: 1547971200000,
            relative_velocity: {
              kilometers_per_second: '6.0994444659',
              kilometers_per_hour: '21958.0000773048',
              miles_per_hour: '13643.847325812',
            },
            miss_distance: {
              astronomical: '0.2007178228',
              lunar: '78.0792312622',
              kilometers: '30026960',
              miles: '18657888',
            },
            orbiting_body: 'Earth',
          },
        ],
        is_sentry_object: false,
      },
      {
        links: {
          self: 'https://api.nasa.gov/neo/rest/v1/neo/3772974?api_key=DEMO_KEY',
        },
        id: '3772974',
        neo_reference_id: '3772974',
        name: '(2017 FJ101)',
        nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3772974',
        absolute_magnitude_h: 28.3,
        estimated_diameter: {
          kilometers: {
            estimated_diameter_min: 0.0058150704,
            estimated_diameter_max: 0.0130028927,
          },
          meters: {
            estimated_diameter_min: 5.8150703965,
            estimated_diameter_max: 13.0028927004,
          },
          miles: {
            estimated_diameter_min: 0.0036133161,
            estimated_diameter_max: 0.0080796204,
          },
          feet: {
            estimated_diameter_min: 19.0783155595,
            estimated_diameter_max: 42.6604104873,
          },
        },
        is_potentially_hazardous_asteroid: false,
        close_approach_data: [
          {
            close_approach_date: '2019-01-20',
            epoch_date_close_approach: 1547971200000,
            relative_velocity: {
              kilometers_per_second: '9.6064219084',
              kilometers_per_hour: '34583.1188703767',
              miles_per_hour: '21488.6051669849',
            },
            miss_distance: {
              astronomical: '0.4219032978',
              lunar: '164.1203918457',
              kilometers: '63115836',
              miles: '39218364',
            },
            orbiting_body: 'Earth',
          },
        ],
        is_sentry_object: false,
      },
      {
        links: {
          self: 'https://api.nasa.gov/neo/rest/v1/neo/3837791?api_key=DEMO_KEY',
        },
        id: '3837791',
        neo_reference_id: '3837791',
        name: '(2019 AZ8)',
        nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3837791',
        absolute_magnitude_h: 25.754,
        estimated_diameter: {
          kilometers: {
            estimated_diameter_min: 0.0187825683,
            estimated_diameter_max: 0.0419990995,
          },
          meters: {
            estimated_diameter_min: 18.7825682933,
            estimated_diameter_max: 41.9990994959,
          },
          miles: {
            estimated_diameter_min: 0.0116709432,
            estimated_diameter_max: 0.0260970225,
          },
          feet: {
            estimated_diameter_min: 61.6226013594,
            estimated_diameter_max: 137.79232559,
          },
        },
        is_potentially_hazardous_asteroid: false,
        close_approach_data: [
          {
            close_approach_date: '2019-01-20',
            epoch_date_close_approach: 1547971200000,
            relative_velocity: {
              kilometers_per_second: '9.9801680104',
              kilometers_per_hour: '35928.604837593',
              miles_per_hour: '22324.6378225589',
            },
            miss_distance: {
              astronomical: '0.0351690903',
              lunar: '13.6807765961',
              kilometers: '5261221',
              miles: '3269171.25',
            },
            orbiting_body: 'Earth',
          },
        ],
        is_sentry_object: false,
      },
    ],
  },
};

module.exports = defaultDateData;
