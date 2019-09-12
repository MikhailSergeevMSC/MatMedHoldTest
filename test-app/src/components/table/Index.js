import React, { Component } from 'react';
import './Table.css';
import TableWrap from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Data from '../../example.json'

class Table extends Component {
  constructor(props){
    super(props);

    this.state={
      item: []
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(data){
    this.props.updateData(data)
  }
  render() {
    return (
      <div className="tableWrapper">
        <TableWrap className="table">
          <TableHead>
            <TableRow>
              <TableCell>№</TableCell>
              <TableCell>Название</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              Data.map(Data => (
                <TableRow onClick={() => this.handleClick({
                  id: Data.id,
                  title: Data.title,
                  desc: Data.desc
                })} className="tableRow" key={Data.tbody}>
                  <TableCell>
                    {Data.id}
                  </TableCell>
                  <TableCell>
                    {Data.title}
                  </TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </TableWrap>
      </div>
    );
  }
}

export default Table;
