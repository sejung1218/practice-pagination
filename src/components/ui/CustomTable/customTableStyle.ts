import styled from '@emotion/styled';
import { Box, TableCell, TableRow, Typography } from '@mui/material';

export const ManagementContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  vertical-align: center;
  align-items: center;
  justify-content: center;
  width: 90%;
  min-width: 1500px;
  height: 20%;
  max-height: 20%;
  box-sizing: border-box;
`;

export const AdminCenterContainer = styled(Box)`
  width: 100%;
  height: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  vertical-align: center;
  align-items: center;
  padding: 20px;

  .boardPagination {
    margin-top: 20px;
    & .MuiPaginationItem-root {
      color: black;
      &:hover {
        background-color: #009c72 !important;
        color: white;
      }
    }
    & .Mui-selected {
      background-color: #009c72 !important;
      color: white;
      &:hover {
        background-color: #009c72 !important;
        color: white;
      }
    }
  }
`;

export const AdminTitleTypography = styled(Typography)`
  font-weight: 700;
  margin-bottom: 20px;
`;

// 테이블 헤드
export const AdminHeadTableRow = styled(TableRow)`
  //background-color: #16c293;
  //background-color: rgba(150, 150, 150, 0.5);

  .css-1nhwmjw-MuiTableCell-root {
    padding: 8px !important;
    border-top: 1px solid red;
  }
`;

// 테이블의 Title부분
export const AdminHeadTableCell = styled(TableCell)`
  font-weight: bold;
  //border-right: 1px solid #f0f0f0;
  //border-top: 1px solid #f0f0f0;
  //border-right: 1px solid rgba(224, 224, 224, 1);
  border-top: 1px solid rgba(224, 224, 224, 1);

  &:first-of-type {
    //border-left: 1px solid rgba(224, 224, 224, 1);
    //  background: #f5f5f5;
  }
`;

export const AdminBodyTableRow = styled(TableRow)`
  &:hover {
    //background-color: #f5f5f5 !important;
    background-color: #cacaca !important;
  }

  //background-color: rgba(150, 150, 150, 0.25);
  &:nth-of-type(even) {
    //background-color: rgba(150, 150, 150, 0.3);
    //background-color: rgba(22, 194, 147, 0.15);
    //  bcdeb0
    //  #99cd89
  }

  //.css-tjsolo-MuiTableRow-root:hover {
  //  background-color: red; !important;
  //}

  .css-1q22dw8-MuiTableCell-root {
    padding: 8px !important;
  }
`;

// 테이블의 본문
export const AdminBodyTableCell = styled(TableCell)`
  margin: 0;
  //border-right: 1px solid rgba(224, 224, 224, 1);
  //background-color: red;
  //&:hover {
  //  background-color: blue;
  //}
  &:last-of-type {
    //border-right: none;
  }

  //&:first-of-type {
  //  border-left: 1px solid rgba(224, 224, 224, 1);
  //}
`;
// 안의 내용물. ellipsis 적용.
export const ListBox = styled(Box)`
  //width: 200px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const AdminButtonBox = styled(Box)`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  .uploadButton {
    height: 100%;
    color: #ffffff;
    background-color: #009c72;
    border-radius: 8px;
  }
`;
