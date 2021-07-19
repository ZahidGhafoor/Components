import React from 'react'
import "./Dfile.scss"

import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
// import DownloadForOfflineIcon from '@material-ui/icons/DownloadForOffline';



// import DownloadIcon from '@material-ui/icons/Download';

import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";



const useStyles = makeStyles({

    // root: {
    //     "& .MuiTableCell-alignCenter":{
    //         textAlign:"center"

    //     }

    // },
    table: {
        minWidth:"inherit",
    }
})


const row2 = [
    {
      Tax: "Modal-1",
      Money: <CloudDownloadIcon/>,
    },
  
    {
      Tax: "Modal-2",
      Money: <CloudDownloadIcon/>,
    },
    {
      Tax: "Modal-3",
      Money: <CloudDownloadIcon/>,
    },
    {
      Tax: "Modal-4",
      Money:<CloudDownloadIcon/>,
    },

  ];

const Dfile = () => {

    const classes = useStyles();
    return (
        <>


<div className="main_snd">
            <div className="snd_box">
              <TableContainer style={{ width: "400px" , borderRadius:"10px" , border:"2px solid black" }} component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell style={{fontWeight:'bolder'}}>Modal Name</TableCell>
                      <TableCell style={{fontWeight:'bolder'}} align="center">Download Modal</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row2.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell component="th" scope="row">
                          {row.Tax}
                        </TableCell>
                        <TableCell align="center">{row.Money}</TableCell>

                        <TableCell align="left">{row.fat}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>




            
        </>
    )
}

export default Dfile
