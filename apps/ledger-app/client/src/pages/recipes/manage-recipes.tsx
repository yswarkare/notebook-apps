import { Box, Typography } from "@mui/material"
import RoutedTabs from "../../components/Tabs/RoutedTabs"
import { Suspense } from "react"
import { PageLoader } from "yw-icons"
import { Outlet, useOutletContext } from "react-router-dom"
import path from "../../routes/path"

const tabs = (productName: string) => {
  const paths = path._products._recipes._recipe(productName);
  return ([
    { label: 'Recipe List', url: paths.list },
    { label: 'Create Recipe', url: paths.create },
  ])
}

function ManageRecipes() {
  const context = useOutletContext<{ productId: string, productName: string }>();
  return (
    <Box
      display='flex'
      width={'100%'}
      flexDirection='column'
      position={'relative'}
      sx={{
        alignItems: 'center',
        justifyContent: 'start',
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 1,
        p: 2,
        gap: 2,
      }}
    >
      <Typography variant={'h4'}>Manage Recipes</Typography>
      <RoutedTabs id="recipes" tabs={tabs(context.productName)} nestedLevel={4} />
      {
        context?.productId && context?.productName &&
        <Suspense fallback={<PageLoader />}>
          <Outlet context={{ productId: context.productId, productName: context.productName }} />
        </Suspense>
      }
    </Box>
  )
}
export default ManageRecipes