export const DEVICES_LIST_QUERY = `
  query DEVICES_LIST($per_page: Int, $page: Int, $filter: EndpointQueryObjectFilter!, $sorting: [EndpointQueryObjectSort!]!) {
    endpointsQuery(per_page: $per_page, page: $page, filter: $filter, sorting: $sorting) {
      items {
        id
        name
        tags
        ip_address
        imei
        imei_lock
        service_profile {
          id
          name
        }
        tariff_profile {
          id
          name
        }
        status {
          id
          description
        }
        sim {
          id
          iccid
          msisdn
          imsi
          status {
            id
            description
          }
        }
        stats {
          current_month {
            month
            data_volume {
              rx
              tx
              total
            }
            sms_volume {
              rx
              tx
            }
            sat_geo_data_volume {
              rx
              tx
              total
            }
          }
        }
        connectivity {
          status
          is_satellite_geo
          pdp_context {
            rat_type {
              id
              description
            }
          }
        }
      }
      meta {
        count
        per_page
        pages
      }
    }
  }
`;
