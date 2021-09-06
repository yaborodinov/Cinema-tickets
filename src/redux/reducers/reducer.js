const initialState = {
  'date': 1,
  'dates': [],
  'films': [{
    'name': 'Die Hard 2',
    'description': 'On Christmas Eve 1990, two years after the Nakatomi Tower Incident, former NYC police officer John McClane now working for the LA Police Department is waiting at Dulles International Airport for wife Holly to arrive from Los Angeles',
    'age restrictions': '14 years',
    'poster': 'https://upload.wikimedia.org/wikipedia/en/thumb/2/2c/Die_Hard_2.jpg/220px-Die_Hard_2.jpg',
    'sessions': [{
        '10:00': {
          '1': true,
          '2': false,
          '3': true,
          '4': true,
          '5': true,
          '6': true,
          '7': true,
          '8': false,
          '9': true,
          '10': true,
          '11': false,
          '12': true,
          '13': false,
          '14': true,
          '15': true,
          '16': true,
          '17': true,
          '18': false
        }
      },
      {
        '12:00': {
          '1': true,
          '2': false,
          '3': false,
          '4': true,
          '5': true,
          '6': false,
          '7': true,
          '8': false,
          '9': true,
          '10': true,
          '11': true,
          '12': true,
          '13': false,
          '14': true,
          '15': true,
          '16': true,
          '17': true,
          '18': false
        }
      },
      {
        '14:00': {
          '1': true,
          '2': false,
          '3': false,
          '4': true,
          '5': true,
          '6': false,
          '7': true,
          '8': false,
          '9': true,
          '10': true,
          '11': true,
          '12': true,
          '13': false,
          '14': true,
          '15': true,
          '16': true,
          '17': true,
          '18': false
        }
      },
      {
        '16:00': {
          '1': false,
          '2': true,
          '3': false,
          '4': true,
          '5': true,
          '6': false,
          '7': true,
          '8': false,
          '9': true,
          '10': true,
          '11': true,
          '12': true,
          '13': false,
          '14': false,
          '15': true,
          '16': true,
          '17': true,
          '18': false
        }
      },
      {
        '18:00': {
          '1': true,
          '2': false,
          '3': false,
          '4': true,
          '5': true,
          '6': false,
          '7': true,
          '8': false,
          '9': true,
          '10': true,
          '11': true,
          '12': false,
          '13': false,
          '14': true,
          '15': true,
          '16': true,
          '17': true,
          '18': false
        }
      },
      {
        '20:00': {
          '1': true,
          '2': true,
          '3': false,
          '4': false,
          '5': true,
          '6': true,
          '7': true,
          '8': false,
          '9': true,
          '10': false,
          '11': true,
          '12': true,
          '13': false,
          '14': false,
          '15': true,
          '16': true,
          '17': true,
          '18': false
        }
      }
    ]
  }]
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_API_DATA':
      return {
        ...action.data
      }
      case 'SET_CURRENT_DAY':
        return {
          ...state,
          currentDay: action.day
        }
        case 'SET_CURRENT_FILM':
          return {
            ...state,
            currentFilm: action.film
          }
          case 'SET_CURRENT_SIT':
            return {
              ...action.item
            }
            default:
              return state
  }
}