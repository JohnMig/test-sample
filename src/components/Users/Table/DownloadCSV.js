import React from 'react'
import { CSVLink } from 'react-csv'
import { Button } from '@material-ui/core'
import PropTypes from 'prop-types'

import { exportCSV } from '../../../utils/csv'

export const DownloadCSV = ({ data }) => {
  return (
    <CSVLink
      data={exportCSV(data)}
      filename={'user-data.csv'}
      style={{ textDecoration: 'none' }}
    >
      <Button variant="outlined">Download</Button>
    </CSVLink>
  )
}

DownloadCSV.propTypes = {
  data: PropTypes.array.isRequired
}
