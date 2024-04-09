import { TopToolbar, SortButton, CreateButton, ExportButton } from 'react-admin'

const ListActions = () => (
  <TopToolbar>
    <SortButton fields={['name', 'weight']} className='cat-sort-button' />
    <CreateButton />
    <ExportButton />
  </TopToolbar>
)

export default ListActions
