// import { Button, Pagination, Table, TableBody, TableHead } from '@mui/material';
import { useRouter } from 'next/router';
import * as customTableStyle2 from './customTableStyle2';
import { Button, Pagination, Table, TableBody, TableHead } from '@mui/material';
import dayjs from 'dayjs';
// import dayjs from 'dayjs';
// import React from 'react';
// import { useRouter } from 'next/navigation';
// import router from 'next/router';

export interface HeadRow {
  name: string;
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify' | undefined;
  width: string;
  value: string;
}

interface CustomTableProps {
  headRows: HeadRow[];
  // bodyRows: BodyRow[];
  adminCenterTitleKr?: string;
  adminCenterTitleEng?: string;
  data: any;
  count?: number;
  onPageChange: (newPage: number) => void;
  // modifySeq: string;
  page: number;
}

export function CustomTable2({
  headRows,
  adminCenterTitleKr,
  adminCenterTitleEng,
  data,
  count,
  onPageChange,
  page,
}: CustomTableProps) {
  const router = useRouter();

  // const handleRouteUploadPage = async (
  //   adminCenterTitleEng: string | undefined
  // ) => {
  //   // router.push(`${adminCenterTItleEng}/upload`);
  //   //console.log('adminCenterTItleEng =>', adminCenterTitleEng);
  //   router.push(
  //     `/admin-center/post/${adminCenterTitleEng}/upload?navType=post&sideType=${adminCenterTitleEng}`
  //   );
  // };

  // const handleRouteModifyPage = async (seq: number) => {
  //   router.push(
  //     `${adminCenterTitleEng}?navType=post&sideType=notice/modify/${seq}`
  //   );
  //   router.push(`${adminCenterTitleEng}/modify/${seq}`);
  // };

  return (
    <customTableStyle2.AdminCenterContainer>
      <customTableStyle2.AdminTitleTypography variant='h5'>
        {adminCenterTitleKr}
      </customTableStyle2.AdminTitleTypography>
      <Table>
        <TableHead>
          <customTableStyle2.AdminHeadTableRow>
            {headRows.map(({ name, align, width }) => (
              <customTableStyle2.AdminHeadTableCell
                key={name}
                align={align}
                width={width}
              >
                {name}
              </customTableStyle2.AdminHeadTableCell>
            ))}
          </customTableStyle2.AdminHeadTableRow>
        </TableHead>

        {/* 이부분에서 계산해보자 */}
        <TableBody>
          {data?.map((item02: any) => (
            <customTableStyle2.AdminBodyTableRow
              key={item02.seq}
              sx={{ cursor: 'pointer' }}
              hover
              // onClick={() => handleRouteModifyPage(item02.seq)}
            >
              {headRows?.map((item01: HeadRow) => (
                <customTableStyle2.AdminBodyTableCell
                  key={item01.name}
                  align={item01.align}
                  width={item01.width}
                >
                  {item01.value === 'createdDtime' ||
                  item01.value === 'modifiedDtime'
                    ? dayjs(item02[item01.value]).format('YYYY/MM/DD HH:mm')
                    : item01.value.startsWith('user.')
                    ? item02.user[item01.value.split('.')[1]]
                    : item02[item01.value]}
                </customTableStyle2.AdminBodyTableCell>
              ))}
            </customTableStyle2.AdminBodyTableRow>
          ))}
        </TableBody>
      </Table>
      <customTableStyle2.AdminButtonBox>
        <Button
          className={'uploadButton'}
          variant='contained'
          color='primary'
          // onClick={() => handleRouteUploadPage(adminCenterTitleEng)}
        >
          {adminCenterTitleKr} 업로드
        </Button>
      </customTableStyle2.AdminButtonBox>

      <Pagination
        className='boardPagination'
        count={count}
        shape='circular'
        page={page + 1}
        size={'small'}
        onChange={(event, value) => {
          onPageChange(value);
        }}
      />
    </customTableStyle2.AdminCenterContainer>
  );
}
