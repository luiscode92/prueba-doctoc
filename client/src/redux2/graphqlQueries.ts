import { gql } from '@apollo/client';

// Mutations

export const CREATE_APPOINTMENT = gql`
  mutation CreateAppointment($input: CreateResourceInput!) {
    createAppointment(input: $input) {
      operation
      resourceType
      resourceData {
        end
        id
        meta {
          lastUpdated
          versionId
        }
        participant {
          actor {
            reference
          }
          status
        }
        serviceType {
          coding {
            code
            display
            system
          }
        }
        start
        status
      }
    }
  }
`;

export const UPDATE_APPOINTMENT = gql`
  mutation UpdateAppointment($input: UpdateResourceInput!) {
    updateAppointment(input: $input) {
      operation
      resourceId
      resourceType
      resourceData {
        end
        id
        meta {
          lastUpdated
          versionId
        }
        participant {
          actor {
            reference
          }
          status
        }
        serviceType {
          coding {
            code
            display
            system
          }
        }
        start
        status
      }
    }
  }
`;

export const DELETE_APPOINTMENT = gql`
  mutation DeleteAppointment($input: DeleteResourceInput!) {
    deleteAppointment(input: $input) {
      operation
      resourceId
      resourceType
    }
  }
`;

// Queries

export const GET_APPOINTMENT = gql`
  query GetAppointment($resourceId: ID!) {
    getAppointment(resourceId: $resourceId) {
      operation
      resourceId
      resourceType
      resourceData {
        end
        id
        meta {
          lastUpdated
          versionId
        }
        participant {
          actor {
            reference
          }
          status
        }
        serviceType {
          coding {
            code
            display
            system
          }
        }
        start
        status
      }
    }
  }
`;

export const SEARCH_APPOINTMENTS_BY_DATE = gql`
  query SearchAppointmentsByDate($date: String!) {
    searchAppointmentsByDate(date: $date) {
      operation
      resourcesFound {
        quantity
        resourcesData {
          fullUrl
          resource {
            end
            id
            meta {
              lastUpdated
              versionId
            }
            participant {
              actor {
                reference
              }
              status
            }
            serviceType {
              coding {
                code
                display
                system
              }
            }
            start
            status
          }
          search {
            mode
          }
        }
      }
    }
  }
`;

export const SEARCH_PATIENTS = gql`
  query SearchPatients($familyContains: String!) {
    searchPatients(familyContains: $familyContains) {
      operation
      resourcesFound {
        quantity
        resourcesData {
          fullUrl
          resource {
            birthDate
            gender
            id
            meta {
              lastUpdated
              versionId
            }
            name {
              family
              given
              use
            }
            resourceType
          }
          search {
            mode
          }
        }
      }
    }
  }
`;

export const SEARCH_PRACTITIONER = gql`
  query SearchPractitioner($familyContains: String!) {
    searchPractitioner(familyContains: $familyContains) {
      operation
      resourcesFound {
        quantity
        resourcesData {
          fullUrl
          resource {
            active
            address {
              city
              country
              line
              postalCode
              state
            }
            gender
            id
            identifier {
              system
              value
            }
            meta {
              lastUpdated
              versionId
            }
            name {
              family
              given
              prefix
            }
            resourceType
            telecom {
              system
              value
              use
            }
          }
          search {
            mode
          }
        }
      }
    }
  }
`;
