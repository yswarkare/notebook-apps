export type ResponseDto<R> = {
  result: R;
  totalPages: number;
  totalItems: number;
  pageNumber: number;
  itemsPerPage: number;
};
