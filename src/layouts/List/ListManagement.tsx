import { CustomTable } from '@/components/ui/CustomTable';
import { useState } from 'react';
import { HeadRow } from '@/components/ui/CustomTable/CustomTable';
// import { getUserPostList } from '@common/apis/list';
// import { HeadRow } from '@components/ui/CustomTable/CustomTable';
import * as customTableStyle from '@/components/ui/CustomTable/customTableStyle';

const headRows: HeadRow[] = [
  { name: 'No', align: 'center', width: '5%', value: 'seq' },
  { name: '제목', align: 'center', width: '45%', value: 'subject' },
  { name: '등록자', align: 'center', width: '20%', value: 'user.nickName' },
  { name: '작성일', align: 'center', width: '10%', value: 'createdDtime' },
  { name: '수정일', align: 'center', width: '10%', value: 'modifiedDtime' },
  { name: '공지여부', align: 'center', width: '10%', value: 'noticeYn' },
];
export function ListManagement() {
  const [page, setPage] = useState<number>(1);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  // 공지사항 전체 리스트 API
  const {
    data: postListData,
    isLoading: postListIsLoading,
    error: postListError,
  } = getUserPostList({
    postType: 'TYPE_NOTICE',
    courseSeq: 0,
    page: page,
    elementCnt: 10,
  });
  const postListDataContent = postListData?.content;

  // if (postListIsLoading) {
  //   return (
  //     <customTableStyle.ManagementContainer>
  //       Loading...
  //     </customTableStyle.ManagementContainer>
  //   );
  // }
  // if (postListError) {
  //   return (
  //     <customTableStyle.ManagementContainer>
  //       Error...
  //     </customTableStyle.ManagementContainer>
  //   );
  // }
  return (
    <customTableStyle.ManagementContainer>
      {/* <CustomTable
          adminCenterTitleKr={'공지사항'}
          adminCenterTitleEng={'notice'}
          headRows={headRows}
          data={postListDataContent}
          count={postListData.totalPages}
          page={page}
          onPageChange={handlePageChange}
        /> */}
    </customTableStyle.ManagementContainer>
  );
}
