import { Button, Pagination, Table, TableBody, TableHead } from '@mui/material';
import * as customTableStyle from './customTableStyle';
import dayjs from 'dayjs';
import React from 'react';
import { useRouter } from 'next/navigation';
import router from 'next/router';

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
  count: number;
  onPageChange: (newPage: number) => void;
  // modifySeq: string;
  page: number;
}

export function CustomTable({
  headRows,
  adminCenterTitleKr,
  adminCenterTitleEng,
  data,
  count,
  onPageChange,
  page,
}: CustomTableProps) {
  const router = useRouter();

  const handleRouteUploadPage = async (
    adminCenterTitleEng: string | undefined
  ) => {
    // router.push(`${adminCenterTItleEng}/upload`);
    //console.log('adminCenterTItleEng =>', adminCenterTitleEng);
    router.push(
      `/admin-center/post/${adminCenterTitleEng}/upload?navType=post&sideType=${adminCenterTitleEng}`
    );
  };

  const handleRouteModifyPage = async (seq: number) => {
    // router.push(`${adminCenterTItleEng}?navType=post&sideType=notice/modify/${seq}`);
    router.push(`${adminCenterTitleEng}/modify/${seq}`);
  };

  return (
    <customTableStyle.AdminCenterContainer>
      <customTableStyle.AdminTitleTypography variant='h5'>
        {adminCenterTitleKr}
      </customTableStyle.AdminTitleTypography>
      <Table>
        <TableHead>
          <customTableStyle.AdminHeadTableRow>
            {headRows.map(({ name, align, width }) => (
              <customTableStyle.AdminHeadTableCell
                key={name}
                align={align}
                width={width}
              >
                {name}
              </customTableStyle.AdminHeadTableCell>
            ))}
          </customTableStyle.AdminHeadTableRow>
        </TableHead>

        <TableBody>
          {data?.map((item02: any) => (
            <customTableStyle.AdminBodyTableRow
              key={item02.id}
              sx={{ cursor: 'pointer' }}
              hover
              onClick={() => handleRouteModifyPage(item02.seq)}
            >
              {headRows?.map((item01: HeadRow) => (
                <customTableStyle.AdminBodyTableCell
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
                </customTableStyle.AdminBodyTableCell>
              ))}
            </customTableStyle.AdminBodyTableRow>
          ))}
        </TableBody>
      </Table>
      <customTableStyle.AdminButtonBox>
        <Button
          className={'uploadButton'}
          variant='contained'
          color='primary'
          onClick={() => handleRouteUploadPage(adminCenterTitleEng)}
        >
          {adminCenterTitleKr} 업로드
        </Button>
      </customTableStyle.AdminButtonBox>

      <Pagination
        className='boardPagination'
        count={count}
        shape='circular'
        page={page}
        size={'small'}
        onChange={(event, value) => {
          onPageChange(value);
        }}
      />
    </customTableStyle.AdminCenterContainer>
  );
}
