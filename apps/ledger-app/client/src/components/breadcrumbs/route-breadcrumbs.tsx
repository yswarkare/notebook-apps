import { useEffect } from 'react';
import { useMatches } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import { breadcrumbItems } from './breadcrumbs'
import NestedBreadcrumbs from './matches';

function RouteBreadcrumbs() {
  const match = useMatches()

  useEffect(() => {
    console.log({ match })
  }, [match])

  return (
    <Stack direction='column' justifyContent='around' width="100%">
      <Stack direction='row' justifyContent='around' width="100%">
        <NestedBreadcrumbs options={breadcrumbItems} />
      </Stack>
      <Stack direction='row' justifyContent='around' width="100%">
        <span>{match[match.length - 1].pathname}</span>
      </Stack>
    </Stack>
  )
}

export default RouteBreadcrumbs