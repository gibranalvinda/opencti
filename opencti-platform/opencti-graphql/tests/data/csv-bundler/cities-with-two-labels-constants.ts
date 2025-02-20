import { type CsvMapperParsed, CsvMapperRepresentationType } from '../../../src/modules/internal/csvMapper/csvMapper-types';
import { ENTITY_TYPE_LOCATION_CITY } from '../../../src/schema/stixDomainObject';
import { ENTITY_TYPE_LABEL } from '../../../src/schema/stixMetaObject';

export const citiesWithTwoLabelsCsvMapper: Partial<CsvMapperParsed> = {
  id: 'mapper-mock-simple-cities',
  has_header: true,
  separator: ',',
  entity_type: 'CsvMapper',
  name: 'CitiesCsvMapper',
  representations: [
    {
      id: 'cityRepresentation',
      type: CsvMapperRepresentationType.Entity,
      target: {
        entity_type: ENTITY_TYPE_LOCATION_CITY,
      },
      attributes: [
        {
          key: 'name',
          column: {
            column_name: 'A',
          },
        },
        { key: 'objectLabel',
          based_on: {
            representations: [
              'labelRepresentation'
            ]
          }
        },
      ]
    },
    {
      id: 'labelRepresentation',
      type: CsvMapperRepresentationType.Entity,
      target:
        { entity_type: ENTITY_TYPE_LABEL
        },
      attributes: [
        { key: 'color',
          column: {
            column_name: 'C',
          },
        },
        { key: 'value',
          column: {
            column_name: 'B',
          },
        }
      ]
    }
  ]
};
