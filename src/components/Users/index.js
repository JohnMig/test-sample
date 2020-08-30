import React, { useState } from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import {
  TableContainer,
  Table,
  TablePagination,
  Paper
} from '@material-ui/core'

import { Wrapper } from './Table/Wrapper'
import { Header } from './Table/Header'
import { Body } from './Table/Body'
import { DownloadCSV } from './Table/DownloadCSV'

import { getComparator, stableSort } from '../../utils/sort'

const useStyles = makeStyles({
  container: {
    maxHeight: 540
  }
})

const Users = ({ users: { data } }) => {
  const classes = useStyles()
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const [order, setOrder] = useState('asc')
  const [orderBy, setOrderBy] = useState('id')
  const rowsPerPageOptions = [5, 10, 15, 20, 25]

  const handlePageChange = (event, newPage) => {
    setPage(newPage)
  }

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  const handleSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  const bodyProps = {
    page,
    rowsPerPage,
    data,
    stableSort,
    getComparator,
    order,
    orderBy
  }

  const headerProps = {
    order,
    orderBy,
    onRequestSort: handleSort
  }

  return data && data.length ? (
    <Wrapper>
      <TableContainer className={classes.container} component={Paper}>
        <Table stickyHeader>
          <Header {...headerProps} />
          <Body {...bodyProps} />
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={rowsPerPageOptions}
        rowsPerPage={rowsPerPage}
        page={page}
        count={data.length}
        onChangePage={handlePageChange}
        onChangeRowsPerPage={handleRowsPerPageChange}
        component="div"
      />
      <DownloadCSV data={data} />
    </Wrapper>
  ) : (
    <div />
  )
}

export default connect((state) => ({
  users: state.users.users
}))(Users)
